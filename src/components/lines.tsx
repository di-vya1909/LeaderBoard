import React from 'react'
import './lines.css'


interface LineProps {
    bgColor: any;
    alignI: any;
    flexD?: "column" | "column-reverse";
}



const LinesComp = ({bgColor, alignI, flexD}: LineProps) => {
    const flexDirection = flexD ? flexD : 'column';
  return (
    <div style={{
        alignItems:`${alignI}`,
        flexDirection: `${flexDirection}`
    }} className='lines-container'>
        <div className='line first' style={{
            backgroundColor:`${bgColor}`,
        }}></div>
        <div className='line second' style={{
            backgroundColor:`${bgColor}`
        }}></div>
        <div className='line third' style={{
            backgroundColor:`${bgColor}`
        }}></div>
    </div>
  )
}

export default LinesComp