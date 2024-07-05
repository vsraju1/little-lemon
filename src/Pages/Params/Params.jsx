import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const {userid} = useParams()
  return (
    <>
    <h1>You've entered: {userid}</h1>
    </>
  )
}

export default Params