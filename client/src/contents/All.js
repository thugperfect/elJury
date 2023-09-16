import React from 'react'
import SingleBook from '../components/SingleBook'
const All = () => {
  return (<>
  <div className='w-full'>
     <div className="name text-4xl mb-3">Ayurvedha</div>
            <div className="flex overflow-x-scroll horizontal">
              <div className="flex">
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
              </div>
            </div> 
    </div>
    <div className='w-full'>
     <div className="name text-4xl mb-3">Siddha</div>
            <div className="flex overflow-x-scroll horizontal">
              <div className="flex">
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
              </div>
            </div> 
    </div>
    <div className='w-full'>
     <div className="name text-4xl mb-3">Unani</div>
            <div className="flex overflow-x-scroll horizontal">
              <div className="flex">
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
              </div>
            </div> 
    </div>
    <div className='w-full'>
     <div className="name text-4xl mb-3">All Books</div>
            <div className="flex overflow-x-scroll horizontal">
              <div className="flex">
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
              </div>
            </div> 
    </div>
  </>
    
  )
}

export default All
