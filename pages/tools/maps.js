import { Box, Card, CardActionArea, CardContent, Grid, Typography, CircularProgress } from "@mui/material"
import axios from "axios"
import {useQuery} from "react-query"



export default function Maps() {
    const {status, data} = GetMaps()
    if(status == "loading"){
        return(
            <Box sx={{ display: 'flex', justifyContent:'center',marginTop:6 }}>
                <CircularProgress size={30} />
            </Box>
        )
    }
    else if( status == "success"){
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {
                        data.map((map, i) => {
                            return (
                                <Grid key={i} item>
                                    <Card>
                                        <CardActionArea href={`/tools/map/${map._id}`}>
                                            <CardContent>
                                                <Typography variant="h6">{map.name}</Typography>
                                                <Typography>{map.layers.length + " Layers"}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        )
    }
    
}

function GetMaps(){
    return useQuery('maps', async ()=>{
        const { data } = await axios.get("https://attic-geo-api.herokuapp.com/map/all")
        return data
    })
}