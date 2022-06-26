import { Box, Typography } from "@mui/material"
import axios from "axios"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import LayerList from "../../../components/map/layerList.js"

const Map = dynamic(() => import("../../../components/map/map.js"), { ssr: false });
export default function SpecificMap() {
    const [data,setData] = useState([])
    const router = useRouter()
    useEffect(()=>{
        if (!router.isReady) return 
        axios.get(`http://localhost:3000/map/specific/${router.query.id}`).then((res)=>{
            setData([res.data])
        }).catch(err=>{
            alert(err)
        })
    },[router])
    return (
        data.map((data,key)=>{
            return(
                
                <Box key={key} sx={{ display: 'flex', flexDirection: 'column', gap: 2,alignItems:'center',marginTop:4 }}>
                    <Typography variant="h3">{data.name}</Typography>
                    <Box sx={{ display: 'flex', gap: 4 }}>
                        <LayerList layers={data.layers} />
                        <Map layers={data.layers} />
                    </Box>
                </Box>
            )
        })
        
    )
}
