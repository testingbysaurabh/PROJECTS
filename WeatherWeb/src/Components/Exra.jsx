import React, { useEffect, useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const WeatherDashboard = () => {
  const [query, setQuery] = useState("New delhi");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      async function getData() {
        try {
          if (!query) {
            setWeather(null);
            setLoading(false);
            return;
          }

          setLoading(true);
          setWeather(null);

          const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=32ac799408644e9ca6665959252907&q=${query}&aqi=no`
          );
          const data = await res.json();

          if (data.error) {
            setWeather({ error: data.error }); 
          } else {
            setWeather(data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setWeather({ error: { message: "Network ya server mein samasya hai." } });
        } finally {
          setLoading(false);
        }
      }

      getData();
    }, 1500);

    return () => clearTimeout(id);
  }, [query]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'long' }),
      fullDate: date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
    };
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-400 to-purple-600 p-4 flex items-center justify-center font-sans">
      <div className="w-full max-w-4xl mx-auto bg-purple-500/30 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl text-white">
        <header className="flex justify-between items-center mb-6">
          <div className="relative flex-grow max-w-sm">
            <input
              type="text"
              defaultValue={query}
              placeholder="Shehar ka naam search karein..."
              className="w-full py-3 px-5 pr-10 bg-purple-400/50 rounded-full placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
              onChange={(e) => setQuery(e.target.value)}
            />
            <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70" />
          </div>
          <button className="text-white p-2">
            <BsThreeDotsVertical size={24} />
          </button>
        </header>

        <main className="min-h-[200px] flex items-center justify-center">
          {loading && (
            <div className="text-center text-xl p-8">Loading...</div>
          )}
          
          {weather?.error && !loading && (
             <div className="text-center text-xl p-8 text-yellow-300">
                "{query}" shehar nahi mila. Sahi naam likhein.
             </div>
          )}

          {weather && weather.location && !loading && (
            <div className="w-full flex flex-col md:flex-row justify-between items-center animate-fade-in">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <div className="flex items-center justify-center md:justify-start text-2xl font-semibold">
                  <FiMapPin className="mr-2" />
                  <span>{weather.location.name}, {weather.location.country}</span>
                </div>
                <div className="text-5xl font-bold mt-2">{formatDate(weather.location.localtime).fullDate}</div>
                <div className="text-2xl text-gray-200">{formatDate(weather.location.localtime).day}</div>
              </div>

              <div className="flex items-center my-4 md:my-0">
                <img src={weather.current.condition.icon} alt={weather.current.condition.text} className="w-24 h-24 drop-shadow-lg" />
                <div className="text-7xl font-bold drop-shadow-lg">{Math.round(weather.current.temp_c)}°C</div>
              </div>

              <div className="text-sm space-y-2 w-full md:w-auto max-w-xs">
                <div className="flex justify-between"><span className="text-gray-300">Dabaav (Pressure)</span><span className="font-semibold">{weather.current.pressure_mb} mb</span></div>
                <div className="flex justify-between"><span className="text-gray-300">Nami (Humidity)</span><span className="font-semibold">{weather.current.humidity} %</span></div>
                <div className="flex justify-between"><span className="text-gray-300">Baarish (Precipitation)</span><span className="font-semibold">{weather.current.precip_mm} mm</span></div>
                <div className="flex justify-between"><span className="text-gray-300">Hawa (Wind)</span><span className="font-semibold">{weather.current.wind_kph} kph</span></div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default WeatherDashboard;
