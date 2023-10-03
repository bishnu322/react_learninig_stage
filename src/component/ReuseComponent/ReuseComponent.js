import React from 'react';
import User from './User';


function ReuseComponent() {
    const students = [
        {
            name: "Bishnu",
            email: 'bishnu@13.com',
            contact: 2323876
        },
        {
            name: "Gautam",
            email: 'gautam@1453.com',
            contact: 23334567
        },
        {
            name: "Laljee",
            email: 'laljee@1093.com',
            contact: 2345567
        },
        {
            name: "Lavkush",
            email: 'lavkush@10993.com',
            contact: 23567895
        },
        {
            name: "GhanShyam",
            email: 'GhanShyam@18893.com',
            contact: 236665
        },
    ]
    return (
        <>
            <h1>ReuseComponent with list</h1>

            {
                students.map((item, i) =>
                    <User data={item} key ={i}/>
                )
            }


        </>
    )
}
export default ReuseComponent;