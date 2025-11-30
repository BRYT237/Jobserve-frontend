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
    <div className='flex px-[10em] gap-[2em] my-[3em] sm:block'>
       <FeaturedJobs />

      <SingleJobs />

      </div>
      {/*  */}
    </div>
  )
}

export default Dashboard
