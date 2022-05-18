import React from 'react'
import { NavBar } from './components'
import videoBG from './Images/videoBG.mp4'
import profp from './Images/profp.jpg'
import culogo from './Images/cu-logo.png'

const Name = "Pallav Vyas"

const Profile = () => {
    return (
        <>
            <NavBar />
            <div className="container-profile">
                <video className="backVid" src={videoBG} autoPlay loop muted />
                <div className="card-profile">
                    <div className="row pr">
                        <img src={culogo} id="cu-profile-logo" alt="CU" />
                    </div>
                    <div className="row pr">
                        <img src={profp} alt="" className="d-inline-flex pfp" />
                        <p className="d-inline-flex">{Name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
