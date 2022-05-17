import React from 'react'
import chalk from '../../Images/chalk-circle.png'

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
              <p><img src={chalk}/>  First notice</p>
              <hr />
              <p><img src={chalk}/>  Second notice</p>
              <hr />
              <p><img src={chalk}/>  Third notice</p>
              <hr />
              <p><img src={chalk}/>  Fourth notice</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard