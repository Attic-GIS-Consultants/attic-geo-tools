import { List, ListItem, ListItemText, IconButton } from "@mui/material"
import { BiTable , } from "react-icons/bi"
import {BsDot , BsSlashLg,BsSquareFill} from "react-icons/bs"
export default function LayerList(props) {
    
   
    return (
        <List>
            
            {
                props.layers.map((layer, i) => {
                    return (
                        <ListItem key={i} sx={{ display: 'flex', gap:2}}>
                            
                            <LayerSymbol color={layer.style.color} geomType={layer.features[0].geometry.type}/>
                            <ListItemText primary={layer.name} secondary={layer.features.length + " Features"}  />
                            <IconButton color="primary" onClick={() => {
                                props.setTableOpen(true)
                                props.setDialogData(layer)
                            }}>
                                <BiTable title="Attributes Table" size={30} />
                            </IconButton>
                            
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