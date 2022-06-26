import { MapContainer, Marker, TileLayer ,GeoJSON} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import styles from "../../styles/map.module.css"
import L from "leaflet"

export default function Map(props) {
    const maps = {
        base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    };


    return (

        <MapContainer
            center={[-13.957495, 33.968008]}
            zoom={8}
            scrollWheelZoom={true}
            className={styles.map}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url={maps.base}
            />
            {
                props.layers.map((layer,i)=>{
                    return(
                        <GeoJSON
                            key={i}
                            data={ layer}
                            style = {(ft)=>{            
                                return {
                                    color: layer.style.color,
                                };
                            }}
                        />
                    )
                })
            }
            
        </MapContainer>

    )
}


