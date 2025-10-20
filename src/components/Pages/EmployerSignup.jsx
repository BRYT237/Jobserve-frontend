import "../../CSS/auth.css"
import "../../CSS/media.css"
import * as yup from "yup";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react"
import {AuthContext} from "../../Contexts/AuthContext"
import { yupResolver } from "@hookform/resolvers/yup";
import { data } from "react-router-dom";

const signUpSchema = yup.object({
    companyName: yup.string().required("Company Name is required!!"),
    firstName: yup.string().required("First Name is Required"),
    lastName:  yup.string().required("First Name is Required"),
    phoneNumber: yup.string().required("Phone number is required").min(11, "Phone number must be 11 characters only"),
    email: yup.string().required("Email-address is required!!"),
    password: yup.string().required("Password is required!!").min(11, "Password must be 11 characters only")
})

const Signup2 = () => {
     const {handleSubmit, register, formState: { errors }} = useForm({
            resolver: yupResolver(signUpSchema),
            defaultValues: {
                companyName: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: "",
                password: ""
            }
        })


        const { signupEmployer, signinUp } = useContext(AuthContext);

        const onSubmit = (data) => {
            signupEmployer(data)
        }


        return (
             <div className='contS'>
      <div className='wrapS'>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
             <div className='inP'>
                <input type="email" {...register("email")} name="email" id="email" placeholder='Email-address'/>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            {/*  */}

             <div className='inP'>
                <input type="password" {...register("password")} name="password" id="pass" placeholder='Password'/>
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            {/*  */}

            <div className='inP'>
                <input type="text" {...register("companyName")} name="companyName" id="comp" placeholder='Company-Name'/>
                {errors.companyName && <p>{errors.companyName.message}</p>}
            </div>

            {/*  */}
            <div className='inP'>
                <input type="text" name="firstName" {...register("firstName")} id="name" placeholder='First Name'/>
                 {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            {/*  */}
            <div className='inP'>
                <input type="text" {...register("lastName")}  name="lastName" id="number" placeholder='Last Name'/>
                 {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            {/*  */}
            <div className='inP'>
                <input type="text" {...register("phoneNumber")} name="phoneNumber" id="password" placeholder='Phone-number'/>
                 {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </div>
            
            <p>Already have an account? <a href="/login2">Login</a></p>

            <button className='but'>{signinUp? ("signing up ...") : ("signup")}</button>
        </form>
        </div>
    </div>

        )

}

export default Signup2