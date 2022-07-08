import React from 'react'

export default function User({nom, getmessage}) {
  return (
    <div className='user' onClick={getmessage}>
      <p>
        {nom}
      </p>
    </div>
  )
}
