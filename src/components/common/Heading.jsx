import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h2 style={{ color: 'white' }}>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
