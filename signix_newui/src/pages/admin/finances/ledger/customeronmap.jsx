
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
export const Customers_on_Map = () => {
  return (
    <>
    <div className="my-5">
        <MapContainer
        center={[20, 0]} // world center
        zoom={2}
        style={{ height: "500px", width: "100%" }}
        zoomControl={true} // enables zoom buttons
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Example Marker */}
        <Marker position={[28.6139, 77.209]}>
          <Popup>New Delhi, India</Popup>
        </Marker>
      </MapContainer>
    </div>
    </>
  );
};
