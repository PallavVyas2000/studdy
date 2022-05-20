import React from 'react'
import { NavBar } from './components'
import videoBG from './Images/videoBG.mp4'
import profp from './Images/profp.jpg'
import culogo from './Images/cu-logo.png'
import culogoB from './Images/cu-logo.png'

const uid = "18BCS3551"
const Name = "PALLAV VYAS"
const Contact = "9407450823"
const Course = "BE(CSE) IBM INFO. SECURITY"

const Profile = () => {
    return (
        <>
            <NavBar />
            <div className="container-profile">
                <video className="backVid" src={videoBG} autoPlay loop muted />
                <div className="card-profile">
                    <img src="" alt="" />
                    <div className="row pr">
                        <div className="col" style={{ flexGrow: "0" }}>
                            <img src={culogo} id="cu-profile-logo" alt="CU" />
                        </div>
                        <div className="col">
                            <p className="uid">{uid}</p>
                        </div>
                    </div>
                    <div className="row pr">
                        <div className="col" style={{ flexGrow: "0" }}>
                            <img src={profp} alt="" className="d-inline-flex pfp" />
                        </div>
                        <div className="col pd" style={{ marginTop: "20px" }}>
                            <tr>
                                <td><p className="d-inline-flex">Name </p></td><td><p>: {Name}</p><br /></td>
                            </tr>
                            <tr>
                                <td><p className="d-inline-flex">Course </p></td><td><p>: {Course}</p><br /></td>
                            </tr>
                            <tr>
                                <td><p className="d-inline-flex">Contact           </p></td><td><p>: {Contact}</p><br /></td>
                            </tr>
                        </div>
                        <div className="col sb">
                            <p>    Student    </p>
                        </div>
                    </div>
                    <div className="row br" style={{ marginTop: "90px" }}>
                        <div className="col tc">
                            <p>VALID TILL : JUN 2022</p>
                        </div>
                        <hr />
                        <div className="brt" style={{ marginTop: "20px", marginLeft: "10px" }}>
                            <p><i>Certified that the above mentioned student is registered under Chandigarh University.</i></p>
                        </div>
                    </div>
                    <div className="row lr">
                        <div className="col lrfc">
                            This page is merely graphical demonstration and does not serve as a valid identification inside college campus.
                        </div>
                        <div className="col lrlc">
                            www.cuchd.in
                            <br />
                            1800 200 0025
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
