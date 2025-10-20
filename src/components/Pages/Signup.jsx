import "../../CSS/auth.css"
import "../../CSS/media.css"
import * as yup from "yup";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react"
import {AuthContext} from "../../Contexts/AuthContext"
import { yupResolver } from "@hookform/resolvers/yup";


const signUpSchema = yup.object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required").min(6, "Password cannot be less than 6 characters"),
    confirmPassword: yup.string().required("Confirm password is required").min(6, "Confirm password cannot be less than 6 characters"),
    name: yup.string().required("Name is required"),
    phone: yup.string().required("Phone number is required").min(11, "Phone number must be 11 characters only")
})

const Signup = () => {

    const {handleSubmit, register, formState: { errors }} = useForm({
        resolver: yupResolver(signUpSchema),
        defaultValues: {
            email: "",
            name: "",
            phone: "",
            password: "",
            confirmPassword: ""
        }
    })

    const { signup,signinUp } = useContext(AuthContext)



    const onSubmit = (data) => {
        signup(data)
    }

  return (
    <div className='contS'>
      <div className='wrapS'>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='inP'>
                <input type="email" {...register("email")} name="email" id="email" placeholder='Email'/>
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            {/*  */}
            <div className='inP'>
                <input type="text" name="name" {...register("name")} id="name" placeholder='Username'/>
                 {errors.name && <p>{errors.name.message}</p>}
            </div>
            {/*  */}
            <div className='inP'>
                <input type="text" {...register("phone")}  name="phone" id="number" placeholder='Phone number'/>
                 {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            {/*  */}
            <div className='inP'>
                <input type="password" {...register("password")} name="password" id="password" placeholder='Password'/>
                 {errors.password && <p>{errors.password.message}</p>}
            </div>
            {/*  */}
            <div className='inP'>
                <input type="password" 
                {...register("confirmPassword")}
                name="confirmPassword" id="confirmpassword" placeholder='Confirm Password'/>
                 {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>

            <p>Already have an account? <a href="/login">Login</a></p>

            <button className='but'>{signinUp? ("signing up ...") : ("signup")}</button>
        </form>
        </div>
    </div>
  )
}

export default Signup
