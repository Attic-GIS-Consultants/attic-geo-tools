import { MapContainer, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import styles from "../styles/map.module.css"


export default function Map(props) {
    const maps = {
        base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    };
   

    return (
        
            <MapContainer
                center={[-13.973922, 33.756947]}
                zoom={8}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url={maps.base}
                />
                {props.layers}
            </MapContainer>

    )
}


