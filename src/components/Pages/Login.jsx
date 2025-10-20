import "../../CSS/media.css"
import "../../CSS/auth.css"
import * as yup from "yup"
import { useContext, useState } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

    const loginSchema = yup.object({
      email: yup.string().email("Enter a valid email").required("Email is required"),
      password: yup.string().required("Password is required").min(6, "Password cannot be less than 6 characters"),
      })


const Login = () => {
      const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
          email: "",
          password: ""
        }
      })

     const { login, loginin } = useContext(AuthContext);


     const onSubmit = (data) => {
      login(data);
     }

  return (
    <div className='contS'>
      <div className='wrapS'>
       <h2>Login</h2> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='inP'>
            <input type="email" {...register("email")} name="email" id="email" placeholder='Email'/>
             {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        {/*  */}
        <div className='inP'>
            <input type="password" {...register("password")} name="password" id="passwprd" placeholder='Password'/>
             {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

            <p>Don't have an Account? <a href="/signup">Create one</a></p>

          <button className='but'>{loginin? ("Loging in..."): ("Login")}</button>

      </form>
      </div>
    </div>
  )
}

export default Login
