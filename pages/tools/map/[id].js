import { Box, Paper, Typography } from "@mui/material"
import axios from "axios"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import LayerList from "../../../components/map/layerList.js"
import {  Dialog, DialogContent, TableContainer, Table, TableHead, TableRow, TableCell, } from "@mui/material"
const Map = dynamic(() => import("../../../components/map/map.js"), { ssr: false });
export default function SpecificMap() {
    const [data, setData] = useState([])
    const [layers, setLayers] = useState([])
    const [tableOpen,setTableOpen] = useState(false)
    const [dialogData,setDialogData] = useState([])
    const router = useRouter()
    useEffect(() => {
        if (!router.isReady) return
        axios.get(`http://localhost:3000/map/specific/${router.query.id}`).then((res) => {
            const layers = res.data.layers
            const reversedLayers = [...layers].reverse()
            setData([res.data])
            setLayers(reversedLayers)
        }).catch(err => {
            alert(err)
        })
    }, [router])
    return (
        data.map((data, key) => {
            return (

                <Box key={key} sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', marginTop: 4 }}>
                    <Typography variant="h3">{data.name}</Typography>
                    <Box sx={{ display: 'flex', gap: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0,justifyContent:'left',px:1 }} component={Paper} elevation={4}>
                            <Typography variant="h4">Layers</Typography>
                            <LayerList layers={data.layers} setLayers={setLayers} setDialogData={setDialogData} setTableOpen={setTableOpen}/>
                        </Box>
                        <Map layers={layers} />
                    </Box>
                    {tableOpen ? <Dialog open={tableOpen} maxWidth onClose={(e) => { setTableOpen(false) }}>
                        <DialogContent>
                            <TableContainer component={Paper}>
                                <Table aria-label="layer table">
                                    <TableHead>
                                        <TableRow>
                                            {
                                                Object.keys(dialogData.features[0].properties).map((layerProperties, i) => {

                                                    return (
                                                        <TableCell key={i}>
                                                            {layerProperties}
                                                        </TableCell>
                                                    )
                                                })
                                            }
                                        </TableRow>
                                    </TableHead>
                                    {
                                        dialogData.features.map((ft, i) => {
                                            return (
                                                <TableRow key={i}>
                                                    {
                                                        Object.values(ft.properties).map((prop, i) => {
                                                            return (
                                                                <TableCell key={i}>
                                                                    {prop}
                                                                </TableCell>
                                                            )
                                                        })
                                                    }
                                                </TableRow>
                                            )
                                        })
                                    }
                                </Table>
                            </TableContainer>
                        </DialogContent>
                    </Dialog> : null }
                    
                </Box>
            )
        })

    )
}
