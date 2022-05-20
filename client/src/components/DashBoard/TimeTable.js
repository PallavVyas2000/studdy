import React from 'react'

const TimeTable = () => {
  return (
    <div className="container-tt">
      <div className="card-tt">
        <div className="card-body tt-heading">
          <h5 className="card-title" style={{textAlign : "center"}}>Class Schedule</h5>
        </div>
        <div className="card tt-items">
          <tr className="timetable">
            <td>
              <p>Security in IOT (CSB-481)</p>
              <p>Ashima Shahhi(E5705)</p>
              <p>Theory</p>
            </td>
          </tr>
        </div>
      </div>
    </div>
  )
}

export default TimeTable
