import React from 'react'
import './index.css'
import PropagateLoader from "react-spinners/PropagateLoader";

const LoadingPage = () => {
  return (
    <div className='Loading-container'>
         <PropagateLoader
          size={15}
          color={"#e86e5a"}
          speedMultiplier={1.5}
        />
    </div>
  )
}

export default LoadingPage
