import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
// import Restaurant from './Components/Restaurant'
// import Error from './Components/Error'
// import SliderItemData from './Components/SliderItemData'
import { useGlobalContext } from "./Utils/Contex/ApiContext";
// import Menu from './Components/Menu'
// import SearchItem from './Components/SearchItem'
import { lazy } from "react";
import { Suspense } from "react";
import RiseLoader2 from "./Components/RiseLoader2";
import ResNavbar from "./Components/ResNavbar";
import toast, { Toaster } from 'react-hot-toast';
import Cart from "./Components/Cart";
import Help from "./Components/Help";


const Restaurant = lazy(() => import("./Components/Restaurant"));
const Error = lazy(() => import("./Components/Error"));
const SliderItemData = lazy(() => import("./Components/SliderItemData"));
const Menu = lazy(() => import("./Components/Menu"));
const SearchItem = lazy(() => import("./Components/SearchItem"));

const App = () => {
  const { setLat, setLong } = useGlobalContext();

  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords?.latitude;
    const long = position.coords?.longitude;

    setLat(lat);
    setLong(long);
  });
  return (
    <>
      <div>
      <Toaster/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<Help />} path="/help" />
          <Route path="/search" element={<SearchItem />} />
          <Route
            path="/restaurants"
            element={
              <Suspense fallback={<RiseLoader2 />}>
                <>
                  <ResNavbar />
                  <Restaurant />
                </>
              </Suspense>
            }
          />

          <Route
            path="/slider-data/:itemId/:text"
            element={<SliderItemData />}
          />
          <Route path="/menu/:itemId" element={<Menu />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
