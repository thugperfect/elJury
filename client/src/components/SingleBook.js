import React from 'react'

const SingleBook = ({text}) => {
  return (
    <div className='w-[150px] h-[200px] lg:w-[200px] lg:h-[250px] border border-1 border-black  bg-green-300 m-2 rounded-lg'>{text}</div>
  )
}

export default SingleBook
