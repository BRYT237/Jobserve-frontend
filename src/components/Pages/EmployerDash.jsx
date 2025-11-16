import NewHeader from '../../Common/NewHeader'
import "../../CSS/employer.css"
import { useContext, useEffect } from 'react'
import { JobContext } from '../../Contexts/JobContext'


const EmployerDash = () => {

  const { displayJobs2, jobs, displaySingleJobs, showSingle, getApp, jobApp, deleteJobs } = useContext(JobContext)

    useEffect(()=> {
      displayJobs2(),
      displaySingleJobs(),
      getApp()
    }, [])

  console.log(jobs)


  return (
    <div>
        <NewHeader />

      <h1 className='h1'>Manage Your Jobs...</h1>
      <div className='mE'>
          <div className='sE1'>
            <a href="/job">Post a Job...</a>

            <h3>No. of Applicant:</h3>
              <h4>{jobApp.length}</h4>
            <h3>No. of Jobs Added:</h3>
              <h4>{jobs.length}</h4>
            <h3>Delete Jobs...</h3>
              <h4><button onClick={deleteJobs} id='bu'>Delete</button></h4>
          </div>
       
      </div>
        
      
    </div>
  )
}

export default EmployerDash
