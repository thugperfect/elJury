import React from 'react'

const SingleBook = ({text}) => {
  return (
    <div className='w-[150px] h-[200px] md:w-[200px] md:h-[250px]  bg-green-300 m-2 rounded-lg'>{text}</div>
  )
}

export default SingleBook
