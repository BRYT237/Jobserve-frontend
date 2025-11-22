import { useEffect, useContext } from "react"
import { JobContext } from "../Contexts/JobContext"
import { useParams } from "react-router-dom";
import"../CSS/featured.css"
import { useForm } from "react-hook-form";


const SingleJobs = () => {
  
  const { handleSubmit, register } = useForm({
    defaultValues: {
      applicantEmail: "",
      applicantName: "",
      resumeUrl: ""
    }
  })


   


  const { showSingle, displaySingleJobs, postApp, apply } = useContext(JobContext);
  const { id } = useParams();

    const onSubmit = (app) =>{
      postApp(app)
    }

    const trans = (par) => {
      const check = localStorage.getItem("val");
      if (check == true) {
        par = true
      }
    }

  useEffect(() => {
    displaySingleJobs(id)
  }, [])
  console.log(showSingle)

  return (
    <div className="mainS">


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Applicant Info...</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
              <label>Email Address:</label>
              <input type="text" name="applicantEmail" id="" {...register("applicantEmail")}/>
              <label>Full-name:</label>
              <input type="text" name="applicantName" id="" {...register("applicantName")}/>
              <label>Upload your CV:</label>
              <input type="file" name="resumeUrl" id="" {...register("resumeUrl")}/>
              <button>Submit</button>
              </form>
            </div>
           
          </div>
        </div>
      </div>


{/*  */}
      <div className="subS">
        <div className="stickS">
        <h1>{showSingle?.title}</h1>
 
        <h2>{showSingle?.companyName}</h2>
        <p className="loc">{showSingle?.location}</p>

           <p className="parS">
          <span>{showSingle?.minWage}</span>
                -
          <span>{showSingle?.maxWage}</span>

          <span className="spS">a Month</span>
           </p>
        
           {/* <button className="butS">Apply now</button> */}
           <button type="button" className="btn butS" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Apply Now!!
        </button>

        </div>
        {/*  */}
        <div className="scrS">
            <h3 className="h1S">Full Job Description:</h3>
            <p className="disc" name="description">
            {showSingle?.description}
            </p>
            {/*  */}

          <p className="jT">
            <h3 className="h2S">Job-Type:</h3>
            <span name="jobType">{showSingle?.jobType}</span>
            </p>
        
          <p className="reqS">
            <h3>Requirements:</h3>

            <p name="requirements">{showSingle?.requirements}</p>
          </p>
          <p className="reS">
            <h3>Responsibilities:</h3>

            <p name="responsibilities" id="resP"> {showSingle?.responsibilities}</p>
            </p>


          <p>
            {showSingle._id}
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default SingleJobs
