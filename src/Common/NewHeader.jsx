import React from 'react'
import "../CSS/NewHeader.css"
import "../CSS/media.css"
import logo from "../assets/logo.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'


const NewHeader = () => {
  const {user, isAuth} = useContext(AuthContext);
  const nav = useNavigate();

  useEffect(()=>{
    isAuth()
  }, [])

  const navi = () => {
    nav("/")
  }

  console.log(user);
  // console.log(user.user.email)
  

  return (
    <div>
       <header className='newH'>
        <nav className='flex flex-row justify-between py-[1em]' id='navH'>
            <div className='aH'>
                    <img src={logo} alt="" width={55}/>
                    <a href="/dash">Home</a>
                    <a href="/sign">Employers</a>
            </div>
            {/*  */}
            <div className='bH'>
                <p><a href="/myjobs"><i class="fa-solid fa-bookmark"></i></a></p>
                <p><a href="/notification"><i class="fa-solid fa-bell"></i></a></p>
                <p className='proF'><i class="fa-solid   fa-user" data-bs-toggle="modal"       data-bs-target="#profile"></i ></p>
                  

    {/*  */}
      <div class="modal fade" id="profile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p className='aB'>
                <button type="button" className='sO' onClick={navi}>Sign out</button>
              </p>
               
            </div>
            <div className="foot">
        
            </div>
          </div>
        </div>
      </div>
      {/*  */}
            </div>
        </nav>
       </header>
    </div>
  )
}

export default NewHeader
