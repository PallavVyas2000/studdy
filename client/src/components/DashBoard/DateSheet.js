import React from 'react'

const datesheet = () => {
  return (
    <div className="container-ds">
      <div className="card-ds">
        <div className="card-body ds-heading">
          <h5 className="card-title" style={{ textAlign: "center" }}>Date Sheet</h5>
        </div>
        <div className="card ds-items">
          <ul className="datesheet">
            <li className="detailsColumn">
              <p className="sub-name-ds">Security in IOT (CSB-481)</p>
              <p>Ashima Shahhi(E5705)</p>
              <p>Theory</p>
              <p className="ds-time">12:00 - 12:50 PM</p>
            </li>
            <li>
              <p className="ds-group">GP-All</p>
            </li>
          </ul>
          <br /><hr />
          <ul className="datesheet">
            <li className="detailsColumn">
              <p className="sub-name-ds">Renewable Energy Sources (SHO-441)</p>
              <p>Jasdeep Kaur(E9012)</p>
              <p>Theory</p>
              <p className="ds-time">2:00 - 2:40 PM</p>
            </li>
            <li>
              <p className="ds-group">GP-All</p>
            </li>
          </ul>
          <br /><hr />
          <ul className="datesheet">
            <li className="detailsColumn">
              <p className="sub-name-ds">Digital Forensics (CST-484)</p>
              <p>Dilpreet Kaur Arora(E11004)</p>
              <p>Theory</p>
              <p className="ds-time">2:40 - 3:30 PM</p>
            </li>
            <li>
              <p className="ds-group">GP-All</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default datesheet
