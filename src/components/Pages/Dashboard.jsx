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
    <div className='block px-[10em] gap-[3em] my-[3em] sm:flex'>
        <div><SingleJobs /></div>

        <div className='sm:h-[800px]'><FeaturedJobs /></div>


      </div>

      
      {/*  */}
    </div>
  )
}

export default Dashboard
