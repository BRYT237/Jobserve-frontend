import NewHeader from "../../Common/NewHeader"
import { useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
import { JobContext } from "../../Contexts/JobContext";

const MyJobs = () => {

  const { saveJobs, save } = useContext(JobContext);
  const id = localStorage.getItem("id");


  useEffect(()=>{
    saveJobs(id)
  }, [])


  
  console.log(save)
  return (
    <div>
      <NewHeader />

      <h1>My Jobs Page.</h1>

      <div>
        <a href="">
        <h1>{save?.title}</h1>
        <h2>{save?.companyName}</h2>
        <p>{save?.location}</p>
        </a>
      </div>
    </div>
  )
}

export default MyJobs
