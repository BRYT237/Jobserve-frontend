import React from 'react'
import NewHeader from '../../Common/NewHeader'
import DashboardContents from '../DashboardContents'
import FeaturedJobs from '../FeaturedJobs'
import SingleJobs from '../SingleJobs'
import"../../CSS/featured.css"


const Dashboard = () => {
  return (
    <div>
      <NewHeader />

    
      <DashboardContents />
    <div className='block px-[10em] gap-[3em] my-[3em] items-center sm:flex sm:px-0'>
        <div><SingleJobs /></div>

        <div className='mt-[2em]'><FeaturedJobs /></div>


      </div>

      
      {/*  */}
    </div>
  )
}

export default Dashboard
