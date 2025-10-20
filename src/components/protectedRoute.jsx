import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
// import { toast } from "sonner";
import { Outlet, useNavigate } from "react-router-dom";


const ProtectedRoute = () => {
    const { isAuth } = useContext(AuthContext)
    const navigate = useNavigate()


    useEffect(() => {
        const checkAuth = async () => {
            try {
                const userAuth = await isAuth()
                if (!userAuth) {
                    navigate("/login")
                }
                else {
                    navigate("/dash")
                }
            } catch (error) {
                console.log(error);

            }
        }

        checkAuth()

    }, [])

    return <Outlet />
}


export default ProtectedRoute 
