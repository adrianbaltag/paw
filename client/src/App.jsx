import Navbar from "./components/Navbar";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import Community from "./components/Community";
import { useEffect } from "react";

function App() {
  const keyIP = import.meta.env.VITE_IPGEOLOCATION_API;
  console.log(keyIP);
  useEffect(() => {
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${keyIP}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="parent-container">
      <Navbar />
      <div className="containerMapAndCommunity  w-screen flex justify-evenly">
        <div className="mapContainer w-9/12" style={{ marginTop: "2em" }}>
          <MapContainer
            center={[40.834285, -73.98123]}
            zoom={20}
            scrollWheelZoom={false}
            style={{ height: "70vh", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.834285, -73.98123]}>
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
