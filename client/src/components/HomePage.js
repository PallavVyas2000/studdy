import React from 'react'
import NavBar from './NavBar'
import Attendance from './DashBoard/Attendance'
import NoticeBoard from './DashBoard/NoticeBoard'
import TimeTable from './DashBoard/TimeTable'
import videoBG from '../Images/videoBG.mp4'
import Weather from './DashBoard/Weather'

const HomePage = () => {

  return (
    <>
      <NavBar />
      <div className="container-home">
        <video className="backVid" src={videoBG} autoPlay loop muted />
        <div className="home-content">
          <div className="row">
            <div className="col">
              <NoticeBoard />
              <TimeTable />
            </div>
            <div className="col">
              <Attendance />
              <Weather/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage