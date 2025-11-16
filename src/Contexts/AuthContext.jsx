import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [signingUp, setSigningUp] = useState(false);
    const [logingIn, setLogingIn] = useState(false);
    const baseUrl = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate();
    const[posted, setPosted] = useState()
    const [user, setUser] = useState();
    const [employer, setEmployer] = useState();


    const signup = async (data) => {
        if (data.confirmPassword !== data.password) {
            console.log(data.confirmPassword);
            console.log(data.password);
            toast.error("Passwords do not Match!!!")

            return
        }
        setSigningUp(false)

        try {
            const res = await fetch(`${baseUrl}/auth/`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const resData = await res.json()
            console.log(resData)
            setSigningUp(true)
            if (res.ok) {
                alert("Welcome to JOBSERVE . Redirecting...")
                navigate("/dash")
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message || "Unable to signup!!")
        } finally {
            setSigningUp(false)
        }




    }

    const signupEmployer = async (data) => {
        try {
            setSigningUp(true);

            const res = await fetch(`${baseUrl}/employ/`,{
                method: "POST",
                body: JSON.stringify(data),
                headers:{
                    "Content-Type": "application/json"
                }
            })

            const resData = await res.json()
            console.log(resData)
            if (res.ok) {
                toast.success("Welcome to JOBSERVE . Redirecting...")
                navigate("/login2") 
            }


        } catch (error) {
            console.log(error);
            toast.error(error.message || "Unable to signup!!")
        }finally{
            setSigningUp(false)
        }
    }


    const login = async (data) => {
        setLogingIn(false)

        try {
            const res = await fetch(`${baseUrl}/auth/login`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const resData = await res.json();
            console.log(resData);
            
            localStorage.setItem("token", resData.token)
            setLogingIn(true)

            if (res.ok) {
                toast.success("Login successful.")
                // alert("Login successful.")
                navigate("/dash")
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message || "Unable to Login!!")
        } finally {
            setLogingIn(false)
        }

    }

    const loginEmployer = async (data) =>{
            setLogingIn(false)

        try {
            const res = await fetch(`${baseUrl}/employ/login`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const resData = await res.json();
            console.log(resData);
            setPosted(resData._id)
            localStorage.setItem("token2", resData.token)
            
            setLogingIn(true)
            if (res.ok) {
                toast.success("Login successful.")
                // alert("Login successful.")
                navigate("/employer")
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message || "Unable to Login!!")
        } finally {
            setLogingIn(false)
        }

    }

    const isAuth = async () => {
        const token = localStorage.getItem("token")
        if (!token) {
            return false
        }

        try {
            const res = await fetch(`${baseUrl}/auth/verify-auth`, {
                method: "POST",
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            const data = await res.json()
            setUser(data)
            console.log(data);
            if (data.Status == "Success") {
                return true
            }
            else {
                return false
            }

        } catch (error) {
            console.log(error);
        }
    }


    const value = {
        signingUp,
        user,
        posted,
        setLogingIn,
        signupEmployer,
        signup,
        login,
        isAuth,
        loginEmployer
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider