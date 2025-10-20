import { useContext, useEffect } from "react";
import { JobContext } from "../Contexts/JobContext";
import "../CSS/featured.css"
import { useParams } from "react-router-dom";

const FeaturedJobs =  () => {
    const  { displayJobs , jobs, } = useContext(JobContext);
    
    useEffect(()=> {
        displayJobs()
        
    }, [])

    console.log(jobs);
    



    return(
        <div className="mainF"> 
            <h2 className="hF"> Jobs for you at JOBSERVE...</h2>
        

            
            {
              jobs && Array.isArray(jobs) && jobs.map((el, index)=>(
                 <a href={`/dash/${el._id}`} key={index} id="A">
                    <div className="jobF">
                    
                    <h3>{el.title}</h3>
                    <h2>{el.companyName}</h2>
                    <p>
                        <span>{el.minWage}</span>
                        <span className="sp">-</span>
                        <span>{el.maxWage}</span> 
                          <span className="sp2">a Month</span>
                        
                    </p> 
                    <p><i class="fa-solid fa-arrow-right"></i>
                            <span className="aPP" href={`/dash/${el._id}`}>Easily Apply</span>
                        </p>  

                     
                    </div>
            </a>
             ))
            }
        </div>
    )
}


export default FeaturedJobs