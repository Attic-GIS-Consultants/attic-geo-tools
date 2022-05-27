import { Marker} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

export function Mark(props) {
    return (
        <Marker position={[
            props.coordinates[0],
            props.coordinates[1]
        ]}
            title={props.title}
            id={props.id}>

        </Marker>
    )
}