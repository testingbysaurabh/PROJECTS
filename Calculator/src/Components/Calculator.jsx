import React, { useState } from 'react'

const Calculator = () => {
    const [val, setVal] = useState("")

    const ClearBtnHandler = () => {
        setVal("")
    }
    const NumBtnHandler = (e) => {

        setVal(val + e.target.innerText)
        // console.log(e.target.innerText)
    }
    const EqualBtnHandler = (e) => {
        try {
            setVal(eval(val))
        } catch (error) {
            setVal("invlid")
        }

    }



    return (
        <div className='flex flex-col border-1 p-2 w-[300px] m-1 rounded items-center bg-gradient-to-br from-slate-800 to-zinc-700'>

            <input value={val} className='border h-20 w-70 m-auto text-5xl p-3 text-right  bg-gray-200 rounded' type="text" disabled />

            <div className="btn grid grid-cols-4 p-1">

                <button onClick={ClearBtnHandler} className=' h-15 w-15 rounded-4xl bg-white m-1'>C</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-white m-1'>**</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-white m-1'>%</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-yellow-200 m-1'>/</button>



                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-gray-300 m-1'>7</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-gray-300 m-1'>8</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-gray-300 m-1'>9</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-yellow-200 m-1'>*</button>


                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-gray-300 m-1'>4</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-gray-300 m-1'>5</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-gray-300 m-1'>6</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-yellow-200 m-1'>-</button>


                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-gray-300 m-1'>1</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-gray-300 m-1'>2</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-gray-300 m-1'>3</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-yellow-200 m-1'>+</button>



                <button onClick={NumBtnHandler} className=' col-span-2 h-15 w-33 rounded-4xl bg-gray-300 m-1'>0</button>
                <button onClick={NumBtnHandler} className=' h-15 w-15 rounded-4xl bg-gray-300 m-1'>.</button>
                <button onClick={EqualBtnHandler} className=' h-15 w-15 rounded-4xl bg-yellow-200 m-1'>=</button>
            </div>

        </div>
    )
}

export default Calculator