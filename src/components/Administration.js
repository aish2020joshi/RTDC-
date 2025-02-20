import React from "react";
import './Administration.css'; // Ensure you have the CSS file for styling

const Administration = () => {
    const mergedData = [
        { designation: "Director - Volunteer Service", name: "Mrs. Ritu Chouhan" },
        { designation: "RDTC Project Coordinator", name: "Shri Vikram Singh Rathore" },
        { designation: "Accountant", name: "Shri Narendera Kumar Sharma" },
        { designation: "Instructor", name: "Shri Man Singh Rawat" },
        { designation: "President", name: "Shri Ummed Singh" },
        { designation: "Vice President", name: "Shri Virendra Agrawal" },
        { designation: "Secretary", name: "Shri Rajendra Singh Rathore" },
        { designation: "Dy. Secretary", name: "Smt. Shilpee Ranawat" },
        { designation: "Joint Secretary", name: "Shri Veerendra Singh Rathore" },
        { designation: "Treasurer", name: "Shri Nagendra Ranawat" },
        { designation: "PRO Secretary", name: "Shri Umrao Yadav" },
        { designation: "Executive Member", name: "Director CIRT, Pune" },
        { designation: "Executive Member", name: "Dy TC (P&D) Transport & Road Safety Dept. Rajasthan" },
        { designation: "Executive Member", name: "RTO, Ajmer" },
        { designation: "Executive Member", name: "Mrs. Ritu Chouhan" },
        { designation: "Executive Member", name: "Shri Roop Singh Ranawat" },
        { designation: "Member", name: "Shri Gopal Kanwar" },
        { designation: "Member", name: "Shri Rajendra Jain" },
    ];

    const feeStructure = [
        {
            course: "Fresher Driving Training - 2 Wheelers",
            duration: "21 days including 10 hours practical training",
            fee: "1,500.00",
            remarks: "Bikes safety, BLS, Simulator and track training"
        },
        {
            course: "Fresher Driver Training - LMV",
            duration: "21 days including 10 hours practical training",
            fee: "5,000.00",
            remarks: ""
        },
        {
            course: "Fresher Tractor Trolley Training",
            duration: "21 days including 10 hours practical training",
            fee: "5,000.00",
            remarks: ""
        },
        {
            course: "Fresher Driver Training - MMV, HMV (transport vehicle)",
            duration: "30 days including 15 hours practical training",
            fee: "8,500.00",
            remarks: ""
        },
        {
            course: "Fresher Tractor and Trailer",
            duration: "30 days including 15 hours practical training",
            fee: "12,000.00",
            remarks: ""
        },
        {
            course: "Refresher training for Commercial Transport vehicle driver (renewal of DL)",
            duration: "02 days",
            fee: "1,000.00",
            remarks: "Health checkup and eye testing"
        },
        {
            course: "Refresher training for Hazardous goods vehicle driver (renewal of DL)",
            duration: "03 days",
            fee: "2,000.00",
            remarks: "Lunch and tea at cafeteria on actual basis"
        },
        {
            course: "Driver Refresher Training (1, 2, 3 days)",
            duration: "1, 2, 3 days",
            fee: "500 / 1000 / 1500",
            remarks: ""
        },
        {
            course: "Refresher fuel saving course",
            duration: "01 day / 02 days",
            fee: "500.00 / 1000.00",
            remarks: ""
        },
        {
            course: "Refresher BS-VI Technology course",
            duration: "01 day",
            fee: "500.00",
            remarks: ""
        },
        {
            course: "Refresher Heavy refresher course",
            duration: "",
            fee: "",
            remarks: ""
        },
        {
            course: "Motor driving school Instructor Training",
            duration: "06 day",
            fee: "6,000.00",
            remarks: ""
        },
        {
            course: "Offenders Training after disqualified/suspend DL under section 206(4) of MV Act,1988",
            duration: "half day/01 day/02 days",
            fee: "300/500/1000",
            remarks: ""
        },
        {
            course: "Certified Road Saftey teacher training",
            duration: "5 days",
            fee: "5,000.00",
            remarks: ""
        },
        {
            course: "Fork lift and construction equipment Training",
            duration: "30 days",
            fee: "8,500.00",
            remarks: ""
        },
        {
            course: "One hour training on 2W Simulator",
            duration: "one hour",
            fee: "500.00",
            remarks: ""
        },
        {
            course: "One hour training on LMV Simulator",
            duration: "one hour",
            fee: "600.00",
            remarks: ""
        },
        {
            course: "One hour training on HMV Simulator",
            duration: "one hour",
            fee: "900.00",
            remarks: ""
        },
        {
            course: "First aid and BLS training",
            duration: "01 day",
            fee: "700.00",
            remarks: ""
        },
        {
            course: "Loadging/Boarding",
            duration: "01 day",
            fee: "500.00",
            remarks: "Including Breakfast, Lunch, Dinner and two times Tea"
        },
    ];

    return (
        <div className="administration-section" style={{ padding: "15px" }}>

            {/* Administrator Details Section */}
            <div className="administrator-details" style={{ marginBottom: "20px" }}>
                <h3>Administrator Details</h3>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>S.No</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Designation</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mergedData.map((item, index) => (
                            <tr key={index}>
                                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{index + 1}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.designation}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="fee-structure">
                <h3>Fee Structure</h3>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>S.No</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Type of Course/Training</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Duration</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Fee (in ₹)</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feeStructure.map((item, index) => (
                            <tr key={index}>
                                <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>{index + 1}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.course}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.duration}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.fee}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.remarks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Administration;
