import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import styles from "../styles/map.module.css"
import L from "leaflet"

export default function Map(props) {
    const maps = {
        base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    };


    return (

        <MapContainer
            center={props.center}
            zoom={props.zoom}
            scrollWheelZoom={true}
            className={styles.map}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url={maps.base}
            />
            <Marker position={props.position}
                icon={new L.Icon({
                    iconUrl: 'https://res.cloudinary.com/attic-gis/image/upload/v1638365244/marker_srf8ee.png',
                    iconAnchor: null,
                    popupAnchor: null,
                    shadowUrl: null,
                    shadowSize: null,
                    shadowAnchor: null,
                    iconSize: new L.Point(30, 45),
                })}>

            </Marker>
        </MapContainer>

    )
}


