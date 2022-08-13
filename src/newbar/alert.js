import React from 'react'

function Alert(props) {
  return (
    <div style={{height:"60px"}}>
      {props.givingalert &&<div className="alert alert-success" role="alert">
      {props.givingalert.message}: {props.givingalert.type}
      </div>
}
    </div>
  )
}
export default Alert
