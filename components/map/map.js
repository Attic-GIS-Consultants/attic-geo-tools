import { MapContainer, Marker, TileLayer, GeoJSON, LayersControl } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import styles from "../../styles/map.module.css"
import L from "leaflet"
import { Dialog, DialogContent, Typography } from '@mui/material';
import { useState } from 'react';

export default function Map(props) {
    const maps = {
        base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    };

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState()
    return (

        <MapContainer
            center={props.center}
            zoom={8}
            scrollWheelZoom={true}
            className={styles.map}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url={maps.base}
            />
            <LayersControl position="topright">
                {
                    props.layers.map((layer, i) => {
                        return (
                            <LayersControl.Overlay checked name={layer.name} key={i}>
                                <GeoJSON
                                    data={layer}
                                    style={(ft) => {
                                        return {
                                            color: layer.style.color,// generateRandomColor()//
                                        };
                                    }}
                                    eventHandlers={{
                                        click: (e) => {
                                            setSelected(e.layer.feature.properties)
                                            setOpen(true)
                                        }
                                    }
                                    }
                                >

                                </GeoJSON>
                            </LayersControl.Overlay>

                        )
                    })
                }
            </LayersControl>
            

            
          
            {
                (open) ? <Dialog open={open} onClose={() => { setOpen(false) }}>
                    <DialogContent>
                        {
                            Object.entries(selected).slice(0, 4).map(([fieldName, fieldValue], i) => {
                                return (
                                    <Typography key={i}>
                                        {fieldName + ": " + fieldValue}
                                    </Typography>
                                )
                            })
                        }
                    </DialogContent>
                </Dialog> : null
            }


        </MapContainer>

    )
}


function getColor(d) {

}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var randomColor = generateRandomColor();