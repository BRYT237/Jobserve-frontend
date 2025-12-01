import React from 'react'
import NewHeader from '../../Common/NewHeader'
import DashboardContents from '../DashboardContents'
import FeaturedJobs from '../FeaturedJobs'
import SingleJobs from '../SingleJobs'
import"../../CSS/featured.css"


const Dashboard = () => {
  return (
    <div className='flex flex-col'>
      <NewHeader />

    
      <DashboardContents />
    <div className='block justify-around my-[3em] items-center sm:flex'>
        <div className=''><SingleJobs /></div>

        <div className='mt-[2em]'><FeaturedJobs /></div>


      </div>

      
      {/*  */}
    </div>
  )
}

export default Dashboard
