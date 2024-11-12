'use client';
import React from 'react'

const AddToCart = () => {
  const isServer = typeof window === 'undefined';
  let origin:string = "";
  if (isServer) {
    origin = "Server-side rendered, or statically generated. typeof window: " + typeof window;
  } else {
    origin = "Client rendered. typeof window: " + typeof window;
  }

  return (
    <div>
      <h2>{ origin }</h2>
        <button className='btn btn-primary' onClick={() => {alert("Clicked")}}>Add to cart</button>
    </div>
  )
}

export default AddToCart