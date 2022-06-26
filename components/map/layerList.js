import {List , ListItem,ListItemText} from "@mui/material"
export default function LayerList(props) {
  return (
    <List>
        {
            props.layers.map((layer,i)=>{
                return(
                    <ListItem key={i}>
                        <ListItemText primary={layer.name} secondary={layer.features.length+" Features"}/>
                    </ListItem>
                )
            })
        }
    </List>
  )
}
