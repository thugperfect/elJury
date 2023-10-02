import React from 'react'
import SingleBook from '../components/SingleBook'
import AllSingleBook from '../components/AllSigleBook'
const All = () => {
  const imgs = ['https://www.indianbooksandperiodicals.com/images/11900/_Ayush_Pub_Ayurvedic_management_of_.jpg','https://www.indianbooksandperiodicals.com/images/11900/brain_ageing_ayurveda.jpg','https://www.indianbooksandperiodicals.com/images/11900/clinical_research_protocols_traditional_health_sciences.jpg','https://www.indianbooksandperiodicals.com/images/11900/clinical_evaluation_certain_ayurvedic_mental_retardation.jpg','https://www.indianbooksandperiodicals.com/images/11900/clinical_studies_certain_Ayurvedic_formulation.jpg','https://www.indianbooksandperiodicals.com/images/11900/_Ayush_Pub_Comprehensive_Technical_4.jpg','https://www.indianbooksandperiodicals.com/images/11900/atlas_macroscopic_microscopic_character.jpg','https://www.indianbooksandperiodicals.com/images/sdf/_Ayush_Pub_A_Practical_Handbook_of_.jpg','https://www.indianbooksandperiodicals.com/images/11900/_Ayush_Pub_Exploration_of_Veterinar1.jpg','https://www.indianbooksandperiodicals.com/images/11900/himalaya_arogya_vanaspatiyan.jpg']
  return (<>
  <div className='w-full'>
     <div className="name text-4xl mb-3 mt-3">Ayurvedha</div>
            <div className="flex overflow-x-scroll horizontal">
              <div className="flex">
                {imgs.map(k=>(
                  <SingleBook img={k}/>
                ))}
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
     <div className="name text-4xl mb-3 mt-3">Unani</div>
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

export default All
//md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 