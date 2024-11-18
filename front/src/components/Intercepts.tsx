import React from 'react'

interface Props{
    name: string
}

const Intercepts = (props:Props) => {
  return (
    <div>
      <p>intercept: {props.name}</p>
    </div>
  )
}

export default Intercepts
