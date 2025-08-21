import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../Utils/Contex/ApiContext';
import CartHover from './CartHover';

const ResNavbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [place, setPlace] = useState('My Address');
  const { lat, long } = useGlobalContext();
  const [timeID, setTimeID] = useState();
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get current path

  useEffect(() => {
    async function getLocation() {
      if (!lat || !long) return;

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`,
          {
            headers: {
              'User-Agent': 'BittBuzz/1.0 (ushasaifi@gmail.com)',
            },
          }
        );

        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const data = await res.json();
        setPlace(data.display_name);
      } catch (error) {
        console.error('Location fetch error:', error);
        setPlace('Unable to fetch location');
      }
    }

    getLocation();
  }, [lat, long]);

  const handleCartEnter = () => {
    clearTimeout(timeID);
    setShowCart(true);
  };

  const handleCartLeave = () => {
    const id = setTimeout(() => {
      setShowCart(false);
    }, 2000);
    setTimeID(id);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-40 bg-white shadow-md font-gilroy">
      <nav className="max-w-7xl mx-auto h-[70px] px-6 flex justify-between items-center">
        {/* LEFT SIDE: Logo + Location */}
        <div className="flex items-center gap-10">
          <svg
            onClick={() => navigate('/home')}
            className="cursor-pointer hover:scale-105 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 61 61"
            height="49"
            width="49"
          >
            <g clipPath="url(#a)">
              <path
                fill="#FF5200"
                d="M.32 30.5c0-12.966 0-19.446 3.498-23.868a16.086 16.086 0 0 1 2.634-2.634C10.868.5 17.354.5 30.32.5s19.446 0 23.868 3.498c.978.774 1.86 1.656 2.634 2.634C60.32 11.048 60.32 17.534 60.32 30.5s0 19.446-3.498 23.868a16.086 16.086 0 0 1-2.634 2.634C49.772 60.5 43.286 60.5 30.32 60.5s-19.446 0-23.868-3.498a16.086 16.086 0 0 1-2.634-2.634C.32 49.952.32 43.466.32 30.5Z"
              />
              <path
                fill="#fff"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.317 24.065v-6.216a.735.735 0 0 0-.732-.732.735.735 0 0 0-.732.732v7.302c0 .414.336.744.744.744h.714c10.374 0 11.454.54 10.806 2.73-.03.108-.066.21-.102.324-.006.024-.012.048-.018.066-2.724 8.214-10.092 18.492-12.27 21.432a.764.764 0 0 1-1.23 0c-1.314-1.776-4.53-6.24-7.464-11.304-.198-.462-.294-1.542 2.964-1.542h3.984c.222 0 .402.18.402.402v3.216c0 .384.282.738.666.768a.73.73 0 0 0 .582-.216.701.701 0 0 0 .216-.516v-4.362a.76.76 0 0 0-.756-.756h-8.052c-1.404 0-2.256-1.2-2.814-2.292-1.752-3.672-3.006-7.296-3.006-10.152 0-7.314 5.832-13.896 13.884-13.896 7.17 0 12.6 5.214 13.704 11.52.006.054.048.294.054.342.288 3.096-7.788 2.742-11.184 2.76a.357.357 0 0 1-.36-.36v.006Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.32.5h60v60h-60z" />
              </clipPath>
            </defs>
          </svg>

          {place && (
            <p className="text-gray-700 font-medium text-sm cursor-pointer hover:text-orange-500 transition-transform hover:scale-[1.01]">
              <span className="underline decoration-2 font-bold underline-offset-4">
                Other
              </span>{' '}
              &nbsp;&nbsp;{place.slice(0, 33)}...
            </p>
          )}
        </div>

        {/* RIGHT SIDE: Buttons */}
        <div className="flex gap-6 items-center">
          <button
            onClick={() => navigate('/search')}
            className="cursor-pointer text-gray-700 font-medium hover:text-orange-500 transition"
          >
            <i className="mr-1 text-sm fa-solid fa-magnifying-glass"></i>Search
          </button>

              <button
              onClick={()=>navigate('/help')}
               className="cursor-pointer text-gray-700 font-medium hover:text-orange-500 transition">
              <i className="mr-1 fa-solid fa-circle-question"></i> Help
            
          </button>


          <button className="cursor-pointer text-gray-700 font-medium hover:text-orange-500 transition">
            <i className="mr-1 fa-solid fa-tags"></i>Offers
          </button>

          {/* ✅ Only show Cart on pages other than /cart */}
          {location.pathname !== '/cart' && (
            <div
              className="relative"
              onMouseEnter={handleCartEnter}
              onMouseLeave={handleCartLeave}
            >
              <button
                onClick={() => navigate('/cart')}
                className="cursor-pointer text-gray-700 font-medium hover:text-orange-500 transition"
              >
                <i className="mr-1 fa-solid fa-cart-shopping"></i>Cart
              </button>
              {showCart && <CartHover timeID={timeID} setter={setShowCart} />}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default ResNavbar;
