import React from 'react'

const SingleBook = ({img}) => {
  return (
    <div className='w-[150px] h-[200px] lg:w-[199px] lg:h-[250px]   bg-green-300 m-2 rounded-lg'>

      <img className='rounded-lg w-full h-full' src={img} alt="" />
    </div>
  )
}

export default SingleBook
