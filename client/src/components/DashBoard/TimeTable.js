import React from 'react'

const TimeTable = () => {
  return (
    <div className="container-tt">
      <div className="card-tt">
        <div className="card-body tt-heading">
          <h5 className="card-title" style={{ textAlign: "center" }}>Class Schedule</h5>
        </div>
        <div className="card tt-items">
          <ul className="timetable">
            <li className="detailsColumn">
              <p className="sub-name-tt">Security in IOT (CSB-481)</p>
              <p>Ashima Shahhi(E5705)</p>
              <p>Theory</p>
              <p className="tt-time">12:00 - 12:50 PM</p>
            </li>
            <li>
              <p className="tt-group">GP-All</p>
            </li>
          </ul>
          <br /><hr />
          <ul className="timetable">
            <li className="detailsColumn">
              <p className="sub-name-tt">Renewable Energy Sources (SHO-441)</p>
              <p>Jasdeep Kaur(E9012)</p>
              <p>Theory</p>
              <p className="tt-time">2:00 - 2:40 PM</p>
            </li>
            <li>
              <p className="tt-group">GP-All</p>
            </li>
          </ul>
          <br /><hr />
          <ul className="timetable">
            <li className="detailsColumn">
              <p className="sub-name-tt">Digital Forensics (CST-484)</p>
              <p>Dilpreet Kaur Arora(E11004)</p>
              <p>Theory</p>
              <p className="tt-time">2:40 - 3:30 PM</p>
            </li>
            <li>
              <p className="tt-group">GP-All</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TimeTable
