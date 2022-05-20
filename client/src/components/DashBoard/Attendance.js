import * as React from 'react';
import 'react-circular-progressbar/dist/styles.css';

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage1 = 83;
const percentage2 = 76;
const percentage3 = 65;
const percentage4 = 73;
const percentage5 = 83;
const percentage6 = 78.5;
const subject1 = "Security in IOT LAB"
const subject2 = "Renewable Energy Sources"
const subject3 = "Digital Forensics"
const subject4 = "Security in IOT"
const subject5 = "Digital Forensics LAB"
const subject6 = "Capstone Project"

const Attendance = () => {

    const eligible = (number) => {
        if(number >= 75)
        {
            return true;
        }
        else {
            return false;
        }

    }
    return (
        <>
        <div className="container-attendance">
            <div className="card attendance">
                <div className="card attendance-parent">
                    <div className="card-body attendance-item">
                        <ul>
                            <li>
                                <div className="attendance-item-content">
                                    <p>{subject1}</p>
                                    <span style={{color : eligible(percentage1) ? "" : "red"}}>{eligible(percentage1) ? "Eligibility fulfilled" : `Attend 4 classes to fulfill eligibility criteria.`}</span>
                                </div>
                                <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
                            </li><hr/>
                            <li>
                                <div className="attendance-item-content">
                                    <p>{subject2}</p>
                                    <span style={{color : eligible(percentage2) ? "" : "red"}}>{eligible(percentage2) ? "Eligibility fulfilled" : `Attend 5 classes to fulfill eligibility criteria.`}</span>
                                </div>
                                <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
                            </li><hr/>
                            <li>
                                <div className="attendance-item-content">
                                    <p>{subject3}</p>
                                    <span style={{color : eligible(percentage3) ? "" : "red"}}>{eligible(percentage3) ? "Eligibility fulfilled" : `Attend 9 classes to fulfill eligibility criteria.`}</span>
                                </div>
                                <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
                            </li><hr/>
                            <li>
                                <div className="attendance-item-content">
                                    <p>{subject4}</p>
                                    <span style={{color : eligible(percentage4) ? "" : "red"}}>{eligible(percentage4) ? "Eligibility fulfilled" : `Attend 3 classes to fulfill eligibility criteria.`}</span>
                                </div>
                                <CircularProgressbar value={percentage4} text={`${percentage4}%`} />
                            </li><hr/>
                            <li>
                                <div className="attendance-item-content">
                                    <p>{subject5}</p>
                                    <span style={{color : eligible(percentage5) ? "" : "red"}}>{eligible(percentage5) ? "Eligibility fulfilled" : `Attend 6 classes to fulfill eligibility criteria.`}</span>
                                </div>
                                <CircularProgressbar value={percentage5} text={`${percentage5}%`} />
                            </li><hr/>
                            <li>
                                <div className="attendance-item-content">
                                    <p>{subject6}</p>
                                    <span style={{color : eligible(percentage6) ? "" : "red"}}>{eligible(percentage6) ? "Eligibility fulfilled" : `Attend 3 classes to fulfill eligibility criteria.`}</span>
                                </div>
                                <CircularProgressbar value={percentage6} text={`${percentage6}%`} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Attendance
