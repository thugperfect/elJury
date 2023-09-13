import React from 'react'
import { useParams } from 'react-router-dom';

const Bookpage = () => {
    const {id} = useParams()
    
   const params = Number(id)
      return (
   
    <div>
        <div className='text-xl text-white'>BookPage</div>
     <h1 className='text-white'>{params}</h1>
    </div>
  )
}

export default Bookpage
