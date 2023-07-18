import React from 'react'

export default function Card(props) {
  return (
     <div className="card p-0 w-full">
      <div className="p-0 md:px-8 mb-2 image-wrapper pointer-events-none">
        <img src={props.imageUrl} alt="" className="w-full rounded-lg" />
      </div>
      <div className="title text-center md:px-10">
        <p className="title-text inline text-center text-black font-semibold md:text-xs">{props.name}</p>
      </div>
    </div>
  )
}
