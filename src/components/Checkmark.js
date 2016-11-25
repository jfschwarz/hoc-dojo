import React from 'react'

export default function Checkmark() {
  return (
    <div className="icon icon--order-success svg">
      <svg viewBox="0 0 72 72">
        <g fill="none" stroke="#8EC343" strokeWidth="2">
          <circle cx="36" cy="36" r="35" style={{strokeDasharray: '240px, 240px', strokeDashoffset: '480px' }}></circle>
          <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style={{ strokeDasharray: '50px, 50px', strokeDashoffset: '0px' }}></path>
        </g>
      </svg>
    </div>
  )
}
