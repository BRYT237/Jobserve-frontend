import "../../CSS/media.css"
import "../../CSS/auth.css"
import * as yup from "yup"
import { useContext } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

    const loginSchema = yup.object({
      email: yup.string().email("Enter a valid email").required("Email is required"),
      password: yup.string().required("Password is required").min(6, "Password cannot be less than 6 characters"),
      })

const EmployerLogin = () => {

     const { register, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(loginSchema),
            defaultValues: {
              email: "",
              password: ""
            }
          })


    const { loginEmployer, loginin } = useContext(AuthContext);

    const onSubmit = (data) => {
      loginEmployer(data)
    }

  return (
    <div>
      <div className='contS'>
      <div className='wrapS'>
       <h2>Employer Login</h2> 
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

            <p>Don't have an Account? <a href="/sign">Create one</a></p>

          <button className='but'>{loginin? ("Loging in..."): ("Login")}</button>

      </form>
      </div>
    </div>
    </div>
  )
}

export default EmployerLogin
