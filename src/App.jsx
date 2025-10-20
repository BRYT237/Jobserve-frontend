import { useState } from 'react'
import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/Pages/LandingPage'
import Signup from './components/Pages/Signup'
import Login from './components/Pages/Login'
import AuthProvider from './Contexts/AuthContext'
import ProtectedRoute from './components/protectedRoute'
import Dashboard from './components/Pages/Dashboard'
import JobProvider from './Contexts/JobContext'
import SingleJobs from './components/SingleJobs'
import PostJob from './components/Pages/PostJob'
import MyJobs from './components/Pages/MyJobs'
import Notifications from './components/Pages/Notifications'
import EmployerDash from './components/Pages/EmployerDash'
import Signup2 from './components/Pages/EmployerSignup'
import EmployerLogin from './components/Pages/EmployerLogin'
function App() {


  
  return (
    <>

      <BrowserRouter>
      <AuthProvider>
        <JobProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          <Route element={<ProtectedRoute />}>
              <Route path="/dash" element={<Dashboard />}/>
          </Route>
          
           <Route path='/sign' element={<Signup2 />}/>
           <Route path='/login2' element={<EmployerLogin />}/>
          <Route path="/job"  element={<PostJob />}/>
          <Route path="employer" element={<EmployerDash />}/>
          <Route path='/myjobs' element={<MyJobs />}/>
          <Route path='/notification' element={<Notifications />}/>
          <Route path='/dash/:id' element={<Dashboard />}/>
          <Route path="/" element={<LandingPage />} />
          
        </Routes>
        </JobProvider>
        </AuthProvider>
      </BrowserRouter>
        
    </>
  )
}

export default App
 