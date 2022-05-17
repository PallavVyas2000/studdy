import React from 'react'
import NavBar from './NavBar'
import Attendance from './DashBoard/Attendance'
import NoticeBoard from './DashBoard/NoticeBoard'
import TimeTable from './DashBoard/TimeTable'
import videoBG from '../Images/videoBG.mp4'

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
            </div>
          </div>
          <div style={{color: "white", fontSize: "23px"}}>
          Weather Widget
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage