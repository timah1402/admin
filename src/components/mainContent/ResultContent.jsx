import React from 'react'

export default function ResultContent({content}) {
  return (
    <div className='mt-4 bg-myGrey ml-8  mr-[180px] p-5 rounded-3xl h-screen flex flex-col'>
        <>{content}</>
    </div>
  )
}
