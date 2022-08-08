import React, { Children } from 'react'

type Props = {
    variant : 'primary' | 'secondary'
} & React.ComponentProps<'button'>

function Omit({variant,children, ...rest }: Props) {
  return (
    <div>
        {/* here we have type of children i.e, React.ReactNode , but if we only need to pass string we can do so by using omit */}

        
        <button className={variant} {...rest}>{children}</button>
    </div>
  )
}

export default Omit