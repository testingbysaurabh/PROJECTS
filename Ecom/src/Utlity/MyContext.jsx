import React, { createContext, useContext, useState } from 'react'



export const abc = createContext()
export const MyContext = ({ children }) => {

    const [orignalData, setOrignalData] = useState([])
    const [data, setData] = useState([])
    const [val, setVal] = useState(0)
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [cartVal, setCartVal] = useState(0)
    const [cartData, setCartData] = useState([])

    //  console.log(cartData)

    return (
        <abc.Provider value={{
            orignalData, setOrignalData, 
            data, setData, 
            val, setVal,
            user, setUser, 
            password, setPassword,
            cartVal, setCartVal,
            cartData, setCartData
        }}>
            {children}
        </abc.Provider>
    )
}

export function contextCall() {
    return useContext(abc)
}

