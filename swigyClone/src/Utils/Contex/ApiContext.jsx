import { createContext, useContext, useState } from "react";

const globalContext = createContext()


export const GlobalContext = ({children}) => {
    const[lat, setLat] = useState()
    const[long, setLong] = useState()
    const[showModals,setShowModals] = useState(false)
    const cdn = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"
    const topDealscdn = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/"
    return (
        <globalContext.Provider value={{cdn, setLat, setLong, long, lat, topDealscdn,showModals,setShowModals}}>
            {children}
        </globalContext.Provider>
    )
}


export function useGlobalContext()
{
    return useContext(globalContext)
}