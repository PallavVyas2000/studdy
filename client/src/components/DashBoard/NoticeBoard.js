import React from 'react'
import bullet from '../../Images/red-dot.png'

const NoticeBoard = () => {
  return (
    <div className="container-notice">
      <div className="card-notice">
        <div className="card-body notice-heading">
          <h5 className="card-title" style={{textAlign : "center"}}>Notice Board</h5>
        </div>
        <div className="card notice-items">
          <ul>
            <li>
              <p style={{marginTop: "16px"}}><img src={bullet} alt=""/>  Check your time slots for Final Lab Practicals on UIMS.</p>
              <hr />
              <p><img src={bullet} alt=""/>  Submit all your final reports of Capstone Projects.</p>
              <hr />
              <p><img src={bullet} alt=""/>  Semester end exams starting from 24th May.</p>
              <hr />
              <p><img src={bullet} alt=""/>  Students need to carry RT-PCR reports before entering campus.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard