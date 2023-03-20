import React from 'react'

export default function Button({text, onClick, icon, btn_classes}) {
  return (
    <div>
      <button className={`btn ${btn_classes}`} onClick={onClick} >
      {icon}
      {!text ? "click" : text}
      </button>
    </div>
  )
}
