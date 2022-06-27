import { Checkbox,List, ListItem, ListItemText, Dialog, DialogContent, TableContainer, Table, TableHead, Paper, TableRow, TableCell, Typography, IconButton } from "@mui/material"
import { useState } from "react"
import { BiTable } from "react-icons/bi"
export default function LayerList(props) {
    const [tableOpen, setTableOpen] = useState(false)
    return (
        <List>
            {
                props.layers.map((layer, i) => {
                    return (
                        <ListItem key={i} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Checkbox  defaultChecked onChange={(e)=>{
                                if (e.target.checked == false){
                                    const filteredLayers = props.layers.filter(tempLayer => tempLayer.name != layer.name)
                                    props.setLayers(filteredLayers)
                                }else{
                                    props.setLayers([...props.layers,layer])
                                } 
                            }} />
                            <ListItemText primary={layer.name} secondary={layer.features.length + " Features"}  />
                            <IconButton color="primary" onClick={() => {
                                setTableOpen(true)
                            }}>
                                <BiTable title="Layer Table" size={30} />
                            </IconButton>
                            <Dialog open={tableOpen} maxWidth onClose={(e) => { setTableOpen(false) }}>
                                <DialogContent>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="layer table">
                                            <TableHead>
                                                <TableRow>
                                                    {
                                                        Object.keys(layer.features[0].properties).map((layerProperties, i) => {

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
                                                layer.features.map((ft, i) => {
                                                    console.log(typeof (ft.properties));
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
                            </Dialog>
                        </ListItem>
                    )
                })
            }
        </List >
    )
}