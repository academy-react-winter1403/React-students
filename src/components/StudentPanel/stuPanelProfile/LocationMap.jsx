// import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';



// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });


function LocationMarker({ setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return null;
}

export default function LocationMap() {
  const [position, setPosition] = useState(null);

  return (
    <div style={{ height: '300px', width: '100%'}}>
      <MapContainer
        center={[35.6892, 51.3890]} 
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}  
      >
        <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      </MapContainer>
    </div>
  );
}
