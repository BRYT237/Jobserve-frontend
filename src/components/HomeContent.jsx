import React from 'react'
import office from "../assets/office.jpg";
import engineering from "../assets/engineering.jpg"
import doctor from "../assets/doctor.jpg"
import "bootstrap/dist/css/bootstrap.min.css"


const HomeContent = () => {
  return (
    
        <div className='main'>
             
          {/* <div className='big'>
          <div className='box1'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Job title' list='jobs'/>
            <datalist id='jobs'>
                <option value="Data Analyst"></option>
                <option value="UI/UX Designer"></option>
                <option value="Dentist"></option>
                <option value="Farmer"></option>
                <option value="Gardener"></option>
            </datalist>
          </div>

          <div className='box2'>
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" placeholder='City or State' list='location'/>
            <datalist id='location'>
                    <option value="Lagos"></option>
                    <option value="Abuja"></option>
                    <option value="Ibadan"></option>
                    <option value="Kano"></option>
                    <option value="Port-Harcourt"></option>
            </datalist>
          </div>

          <button className='findB'>Find Job</button>
          </div> */}


        <div className='imgs'>
            <img src={office} alt="" width="32%" />
            <img src={engineering} alt="" width="32%"/>
            <img src={doctor} alt="" width="32%"/>
        </div>



        <div className='par'>
            <h2>
                    Welcome to JOBSERVE.
            </h2>

            <div>
                    Create an account or sign in to see your personalized job recommendations.
            </div>

            <button className='btn'>
                <a href="/signup">Get Started</a>
                <i class="fa-solid fa-arrow-right"></i>  
            </button>

        </div>

      </div>


  )
}

export default HomeContent
