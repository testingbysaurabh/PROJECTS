import React, { useEffect, useState } from "react";
import Simmer from "./Simmer";
import toast, { Toaster } from "react-hot-toast";

const Weather = () => {
  const API_KEY = import.meta.env.VITE_WEATHER_API;
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ipval, setIpval] = useState("");

  // landing location ke liye
  useEffect(() => {
    async function getLandingLocation() {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=auto:ip`
        );
        const data = await res.json();
        if (data.error) {
          toast.error(data.error.message || "Something went wrong");
          return;
        }
        setQuery(data.location.name);
      } catch (error) {
        console.log("Error in landing location:", error);
      } finally {
        setLoading(false);
      }
    }

    getLandingLocation();
  }, []); 

  /// Fetch weather  query 
  useEffect(() => {
    async function getWeather() {
      if (!query) return;
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=no`
        );
        const data = await res.json();

        if (data.error) {
          toast.error("City not found");
          setWeather(null);
        } else {
          setWeather(data);
        }
      } catch (error) {
        console.log("Error fetching weather data:", error);
        toast.error("Network error");
      } finally {
        setLoading(false);
      }
    }

    getWeather();
  }, [query]);

  if (loading) return <Simmer />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-cyan-300 flex flex-col items-center justify-start px-4 py-8 font-sans">
      <Toaster position="top-center" reverseOrder={false} />

      
      <div className="w-full max-w-md mb-10 relative flex">
        <input
          value={ipval}
          onChange={(e) => setIpval(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && ipval.trim()) {
              setQuery(ipval.trim().toLowerCase());
              setIpval("");
            }
          }}
          type="text"
          placeholder="Search Location on CloudMood"
          className="w-full py-4 pl-6 pr-12 rounded-full bg-white/50 shadow-[inset_4px_4px_10px_rgba(255,255,255,0.6),inset_-4px_-4px_10px_rgba(0,0,0,0.1)] backdrop-blur-md text-gray-700 placeholder-gray-500 focus:outline-none"
        />
        <span
          onClick={() => {
            if (ipval.trim()) {
              setQuery(ipval.trim().toLowerCase());
              setIpval(""); 
            }
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-3xl hover:cursor-pointer"
        >
          🔍
        </span>
      </div>

      {/* Weather Info */}
      {weather && weather.location && weather.current && (
        <div className="w-full max-w-5xl bg-white/30 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-[8px_8px_20px_rgba(0,0,0,0.2),-8px_-8px_20px_rgba(255,255,255,0.3)] text-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 transition-all">
          {/* Location & Date */}
          <div className="text-center md:text-left space-y-2">
            <div className="text-xl font-semibold flex items-center gap-2">
              📍
              <span className="text-black/80">
                {weather.location.name}, {weather.location.country}
              </span>
            </div>
            <div className="text-4xl font-bold text-black/90">
              {new Date(weather.location.localtime).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="text-lg text-gray-600">
              {new Date(weather.location.localtime).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </div>
          </div>

          {/* b Temperature & Icon */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src={`https:${weather.current.condition.icon}`}
              alt={weather.current.condition.text}
              className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-xl"
            />
            <div className="text-5xl sm:text-6xl font-extrabold text-black/90 drop-shadow-lg">
              {Math.round(weather.current.temp_c)}°C
            </div>
            <div className="text-md text-gray-600">
              {weather.current.condition.text}
            </div>
          </div>

          {/* Weather Details hai */}
          <div className="text-sm space-y-3 w-full md:w-auto max-w-xs bg-white/40 p-4 rounded-2xl shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1),inset_-2px_-2px_6px_rgba(255,255,255,0.2)]">
            <div className="flex justify-between">
              <span className="text-gray-600">Pressure</span>
              <span className="font-medium">{weather.current.pressure_mb} mb</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Humidity</span>
              <span className="font-medium">{weather.current.humidity} %</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Precipitation</span>
              <span className="font-medium">{weather.current.precip_mm} mm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Wind</span>
              <span className="font-medium">{weather.current.wind_kph} kph</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
