import React from 'react'
import Accordions from './Accordions'

const NestedUI = ({title,data}) => {
    
    
  return (
    <div className=''>
        <p className='text-[18px] font-bold ml-3 font-gilroy'>{title}</p>
        <div>
            {data.map((item ,index)=>{
                
                    
                return(
                
                        <div className='' key={index}>

                    <Accordions isLast={index == data.length-1} nested={true} key={item.categoryId} title={item.title} data={item.itemCards} />
                        </div>
                    
                )
            })}
        </div>
    </div>
  )
}

export default NestedUI