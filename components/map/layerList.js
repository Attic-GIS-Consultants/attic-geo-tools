import { Checkbox,List, ListItem, ListItemText, Dialog, DialogContent, TableContainer, Table, TableHead, Paper, TableRow, TableCell, Typography, IconButton } from "@mui/material"
import { useState } from "react"
import { BiTable , } from "react-icons/bi"
import {BsDot , BsSlashLg,BsSquareFill} from "react-icons/bs"
export default function LayerList(props) {
    const [tableOpen, setTableOpen] = useState(false)
    return (
        <List>
            {
                props.layers.map((layer, i) => {
                    return (
                        <ListItem key={i} sx={{ display: 'flex', gap:2}}>
                            <Checkbox title="Turn off"  defaultChecked onChange={(e)=>{
                                if (e.target.checked == false){
                                    const filteredLayers = props.layers.filter(tempLayer => tempLayer.name != layer.name)
                                    props.setLayers(filteredLayers)
                                }else{
                                    props.setLayers([...props.layers,layer])
                                } 
                            }} />
                            <LayerSymbol color={layer.style.color} geomType={layer.features[0].geometry.type}/>
                            <ListItemText primary={layer.name} secondary={layer.features.length + " Features"}  />
                            <IconButton color="primary" onClick={() => {
                                setTableOpen(true)
                            }}>
                                <BiTable title="Attributes Table" size={30} />
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
        </List>
    )
}

function LayerSymbol(props){
    if (props.geomType == "Point" || props.geomType == "Multi-Point" ){
        return <BsDot size={30} color={props.color} />
    }
    else if (props.geomType == "Line" || props.geomType == "Multi-Line" || props.geomType == "LineString" ) {
        return <BsSlashLg size={30} color={props.color} />
    }
    if (props.geomType == "Polygon" || props.geomType == "Multi-Polygon") {
        return <BsSquareFill size={30} color={props.color} />
    }
    
}