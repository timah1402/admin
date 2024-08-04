import React from 'react'

export default function MyButton({text,Oncliked}) {
  return (
    <button className='bg-myBlue text-white py-1 px-3 rounded-xl mt-5
    '
    onClick={()=>Oncliked()}
    >{text}</button>
  )
}
