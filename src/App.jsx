import React from 'react'
import Header from './Components/Elements/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import ReactLenis, { useLenis } from 'lenis/react';
import Login from './Components/Pages/Login';
import Dashboard from './Components/Pages/Dashboard';
import StudentDashboard from './Components/Pages/StudentDashboard';
import InterviewDashboard from './Components/Pages/InterviewDashboard';
import CourseDashboard from './Components/Pages/CourseDashboard';
import CompanyDashboard from './Components/Pages/CompanyDashboard';

const App = () => {

  const lenis = useLenis()

  return (
    <ReactLenis root>
      <div className='max-w-screen w-full overflow-hidden grid place-items-center'>
        <Header />

        <Routes>

          <Route index path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/student' element={<Dashboard> <StudentDashboard /> </Dashboard>} />
          <Route path='/dashboard/course' element={<Dashboard> <CourseDashboard /> </Dashboard>} />
          <Route path='/dashboard/company' element={<Dashboard> <CompanyDashboard /> </Dashboard>} />
          <Route path='/dashboard/interview' element={<Dashboard> <InterviewDashboard /> </Dashboard>} />

        </Routes>
      </div>
    </ReactLenis>
  )
}

export default App
