import React from 'react'
import PropTypes from 'prop-types'
export default function Naavabar(props) {
  return (
    <div>
      abe ye nava bar h with title={props.title} and in vill={props.vill}
    </div>
  )
}
Naavabar.defaultProps={
  title:"TITLE",
  vill:"ji"
}
Naavabar.propTypes={title:PropTypes.string.isRequired,
vill:PropTypes.number.isRequired
}
