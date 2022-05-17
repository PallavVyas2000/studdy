import * as React from 'react';
import 'react-circular-progressbar/dist/styles.css';

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 56;
const subject = "Security in IOT Lab"

const Attendance = () => {

    return (
        <>
        <div className="container-attendance">
            <div className="card attendance">
                <div className="card attendance-parent">
                    <div className="card-body attendance-item">
                        <ul>
                            <li>
                                <div className="attendance-item-content">
                                    <p>{subject}</p>
                                    <span>Attend 7 more lectures to fullfil eligibility criteria.</span>
                                </div>
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            </li>
                            <li>
                                <div className="attendance-item-content">
                                    <p>{subject}</p>
                                    <span>Attend 7 more lectures to fullfil eligibility criteria.</span>
                                </div>
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            </li>
                            <li>
                                <div className="attendance-item-content">
                                    <p>{subject}</p>
                                    <span>Attend 7 more lectures to fullfil eligibility criteria.</span>
                                </div>
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
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
