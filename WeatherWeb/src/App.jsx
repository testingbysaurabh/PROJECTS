import React, { useEffect } from "react";
import Weateher from "./Components/Weather";
import { useGlobalContext } from "./Utils/GlobalContext";
// import Extra from"./Components/Exra"

const App = () => {
  const { setLat, setLong } = useGlobalContext();

  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords?.latitude;
    const long = position.coords?.longitude;

    setLat(lat);
    setLong(long);
    // console.log(lat, long);
  });

  return (
    <div>
      <Weateher />
    </div>
  );
};

export default App;
