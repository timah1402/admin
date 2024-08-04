import React from 'react'

export default function DRItem({title, subTitle, subRek}) {
  return (
    <div className='flex flex-col gap-2 mt-7 ml-8'>
      <h2 className=' text-20px font-bold'>{title}</h2>
      <p className='text-sm text-my2ndGrey'>{subTitle}
        <span className='text-sm font-bold text-black'>{subRek}
        </span></p>
    </div>
  )
}
