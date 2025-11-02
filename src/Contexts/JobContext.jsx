import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";



export const JobContext = createContext()




const JobProvider = ({ children }) => {
    const baseUrl = import.meta.env.VITE_BASE_URL
    const [jobs, setJobs] = useState([])
    const [apply, setApply] = useState(false)
    // const [confirm, setConfirm] = useState(false)
    const [jobApp, SetJobApp] = useState([])
    const [showSingle, setShowSingle] = useState({});

    const [save, setSave] = useState({});


    const displayJobs = async () => {
        try {
            const res = await fetch(`${baseUrl}/employ/get`,
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                })

            const resData = await res.json()
            
            setJobs(resData.recieve || [])
            
        } catch (error) {
            console.log(error)
        }
    }

    const displaySingleJobs = async (id) => {

        try {
            const res = await fetch(`${baseUrl}/employ/find/${id}`);
            const resData = await res.json();
            console.log(resData);

            setShowSingle(resData.recieve)

        } catch (error) {
            console.log(error);
        }
    }


     const saveJobs = async(id) => {
        try {
           const res = await fetch(`${baseUrl}/user/save`, {
            method: "POST",
            headers: {
                 "Content-Type": "application/json"
            }
           })

           const resData = await res.json()
           console.log(resData)

           if (res.ok) {
                alert("Job Applied Successfully!!");
           }

        } catch (error) {
            console.log(error)
        }
    }


    const PostJob = async (data) => {
        try {

            const render = new FormData();
            render.append("title", data.title);
            render.append("description", data.description)
            render.append("companyName", data.companyName)
            render.append("companyWebsite", data.companyWebsite)
            render.append("location", data.location);
            render.append("jobType", data.jobType)
            render.append("minWage", data.minWage)
            render.append("maxWage", data.maxWage)
            render.append("currency", data.currency)
            render.append("requirements", data.requirements)
            render.append("responsibilities", data.responsibilities)
            if (data.companyLogo && data.companyLogo[0]) {

                    render.append("companyLogo", data.companyLogo[0]);
                }


            const res = await fetch(`${baseUrl}/employ/job`, {
                method: "POST",
                body: render,
            })

            const resData = await res.json();
            console.log(resData);
            

            if (resData.status == "Success") {
                toast.success("Job Created Successfully.")
                alert("successful!!");
                localStorage.setItem("val", true)    

            }

        } catch (error) {
            console.log(error);
        }
    }

    const postApp = async (app) => {
            setApply(false)
        try {
            const sendApp = new FormData();

            sendApp.append("applicantName", app.applicantName);
            sendApp.append("applicantEmail", app.applicantEmail);

            if (app.resumeUrl && app.resumeUrl[0] ) {
                
                sendApp.append("resumeUrl", app.resumeUrl[0]);
            }

            const res = await fetch(`${baseUrl}/user/`, {
                method: "POST",
                body: sendApp,
            })

            const resData = await res.json();
            console.log(resData);
            setApply(true)
              if (resData.status == "Success") {

                toast.success("Job Created Successfully.")
                alert("Job Applied successfully!!")
                localStorage.setItem("status", apply)

                }
        } catch (error) {
            console.log(error);
        }

    }

    const getApp = async () => {
        try {
            const res = await fetch(`${baseUrl}/user/get`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })    

            const resData = await res.json()
            SetJobApp(resData.Get)

        } catch (error) {
            console.log(error);
        }

    }
   
   
    const value = {
        displayJobs,
        displaySingleJobs,
        PostJob,
        saveJobs,
        postApp,
        getApp,
        confirm,
        apply,
        jobApp,
        save,
        jobs,
        showSingle
    }


    return <JobContext.Provider value={value}>
        {children}
    </JobContext.Provider>

}


export default JobProvider 