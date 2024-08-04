import React from 'react'

export default function SearchBox() {
  return (
    <form>
      <input type="text" placeholder='Search...'
      className='placeholder:text-sm pl-3 py-1 rounded-lg outline-none
      bg-my2ndBlue placeholder:text-my2ndGrey text-sm' />
    </form>
  )
}
