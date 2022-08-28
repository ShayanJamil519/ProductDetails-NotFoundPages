import React from 'react'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <div className="bg"></div>

      <div className="BtnContainer">
        <h1>Oopsie! Something's missing...</h1>
        <p>
          It seems like we donot find what you searched. The page you were
          looking for doesn't exist, isn't available or was loading incorrectly
        </p>
        <button>Back To Home</button>
      </div>
    </div>
  )
}

export default PageNotFound
