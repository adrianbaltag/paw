import Navbar from "./components/Navbar";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import Community from "./components/Community";
function App() {
  return (
    <div className="parent-container">
      <Navbar />
      <div className="containerMapAndCommunity  w-screen flex justify-evenly">
        <div className="mapContainer w-9/12" style={{ marginTop: "2em" }}>
          <MapContainer
            center={[40.851185, -73.970163]}
            zoom={20}
            scrollWheelZoom={false}
            style={{ height: "70vh", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.851185, -73.970163]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="communityContainer">
          <Community />
        </div>
      </div>
    </div>
  );
}

export default App;
