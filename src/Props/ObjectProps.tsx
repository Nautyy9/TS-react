import React from 'react'
import {Names} from './Types'


function ObjectProps(props: Names) {
  return (
    <div>{props.names.firstName} {props.names.lastName}</div>
  )
}

export default ObjectProps