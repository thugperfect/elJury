import React from 'react'
import SingleBook from '../components/SingleBook'
import AllSingleBook from '../components/AllSigleBook'

const Ayurvedha = () => {
  return (
    <>
    <div className='w-full'>
       <div className="name text-4xl mb-3 mt-3">Ayurvedha</div>
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
     <div className="name text-4xl mb-3 mt-3 ">All Books</div>
           
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
                <AllSingleBook />
                <AllSingleBook />
                <AllSingleBook />
                <AllSingleBook />
                <AllSingleBook />
                <AllSingleBook />
                <AllSingleBook />
                <AllSingleBook />
                <AllSingleBook />
                <AllSingleBook />
                <AllSingleBook />
                <AllSingleBook />
                <AllSingleBook />
              </div>
            </div> 
    
      </>
  )
}

export default Ayurvedha
