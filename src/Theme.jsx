import React from 'react'

export default function Theme({children,theme}) {
  return (
    <div className={theme?"dark-mode":'light-mode'}>
      {children}
    </div>
  )
}
