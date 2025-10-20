import { useContext } from 'react'
import { useForm } from 'react-hook-form'
// import * as yup from "yup"
import { JobContext } from '../../Contexts/JobContext'
// import { yupResolver } from '@hookform/resolvers/yup'
import "../../CSS/job.css"



const PostJob = () => {

  const { handleSubmit, register, formState:{errors} } = useForm({
    defaultValues: {
      title: "",
      description:"",
      companyName: "",
      companyWebsite: "",
      companyLogo: "",
      location: "",
      jobType: "",
      minWage:"",
      maxWage: "",
      currency: "",
      requirements: "",
      responsibilities: ""
    }

  })


  const { PostJob } = useContext(JobContext)

  const onSubmit = (data) => {
        PostJob(data)
  }



  return (
    <div className='post'>

      <div className='postM'>

        <div className='backD'>
        <a href="/employer" className='backA'>
          <i class ="fa-solid fa-arrow-left"></i>
        </a>
        <span>Back to Dashboard</span>
        </div>

        <h2 className='H2P'>Post a Job....</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='cont'>
            <label>Job Title:</label>
             <input type="text" name="title" id="title" {...register("title")}/>

          </div>
          {/*  */}
          <div className='cont'>
            <label>Company Name:</label>
              <input type="text" name="companyName" id="comp" {...register("companyName")}/>

          </div>
          {/*  */}
          <div className='cont'>
            <label>Company Website:</label>
              <input type="text" name="companyWebsite" id="" {...register("companyWebsite")}/>

          </div>
          {/*  */}
          <div className='cont'>
            <label>Company Logo:</label>
              <input type="file" name="companyLogo" id="" {...register("companyLogo")}/>

          </div>
          {/*  */}
          <div className='cont'>
            <label>Location:</label>
              <input type="text" name="location" id="loc" {...register("location")}/>

          </div>
          {/*  */}
          <div className='cont'>
            <label>Job Description:</label>
                <textarea  rows={3} type="text" name="description" id="desc" {...register("description")}/>

          </div>
          {/*  */}  
          <div className='cont'>
            <label>Job Type:</label>
                <input type="text" name="jobType" id="" list='jobType'  {...register("jobType")}/>

                <datalist id='jobType'>
                      <option value="Full-time"></option>
                      <option value="Part-time"></option>
                      <option value="Contract"></option>
                      <option value="Internship"></option>
                      <option value="Remote"></option>
                </datalist>
          </div>
          {/*  */}
          <div className='cont'>
              <label>Min-Wage:</label>
              <input type="text" name="minWage" id="min" {...register("minWage")}/>

          </div>
          {/*  */}
          <div className='cont'>
             <label>Max-Wage:</label>
              <input type="text" name="maxWage" id="max" {...register("maxWage")}/>

          </div>
          {/*  */}
          <div className='cont'>
              <label>Currency:</label>
              <input type="text" name="currency" id="cur" list='curr' {...register("currency")}/>

              <datalist id='curr'>
                <option value="$"></option>
                <option value="&#8358"></option>
              </datalist>
          </div>
          {/*  */}
          <div className='cont'>
              <label>Job Requirements:</label>
              <textarea rows={4} type="text" name="requirements" id="reQ" {...register("requirements")}/>

          </div>
          {/*  */}
          <div className='cont'>
              <label>Employee Responsibilities:</label>
              <textarea rows={4} type="text" name="responsibilities" id="respon" {...register("responsibilities")}/>

          </div>
          {/*  */}


          <button className='postBut'>Add Job</button>
        </form>
      </div>
    </div>
  )
}

export default PostJob 
