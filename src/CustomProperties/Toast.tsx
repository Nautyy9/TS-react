import React from 'react'

type Justify = 'left' | 'center' | 'right';
type  Align = 'top' | 'center' | 'bottom'


//position  has center-center which we don't want so we used Exlude thatexclude the 2nd parameter from first one
//and using or we included 'center' property
type ToastProps ={
    position: Exclude<`${Justify}-${Align}`, 'center-center'> | 'center'
}

function Toast({position}: ToastProps) {
  return (
    <div>Toast has current position:  {position}</div>
  )
}

export default Toast