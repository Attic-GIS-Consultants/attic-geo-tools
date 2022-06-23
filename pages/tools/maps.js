import { Box, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material"
import axios from "axios"

import { useEffect, useState } from "react"


export default function Maps() {
    const [maps,setMaps] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/map/all").then(res=>{
            setMaps(res.data)
        }).catch(err=>{
            alert(err)
        })
    })
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop:4 }}>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                {
                    maps.map((map,i)=>{
                        return(
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
