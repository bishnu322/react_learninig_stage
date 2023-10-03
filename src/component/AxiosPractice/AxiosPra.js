import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';


function AxiosPra() {
    const [mydata, setMyData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
            setMyData(res.data)
        }
        )
    },[])

    return (
        <>
            <Table  variant='dark' striped bordered hover>
                <thead>
                    <tr>
                        <td>UserId</td>
                        <td>Title</td>
                        <td>Photos</td>
                    </tr>
                </thead>
                <tbody>
                {
                    mydata.map((item, i) => {
                        console.log(item)
                      return  (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td ><img style={{width: "400px", height : "300px"}} src={item.url} alt={item.url} /></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </>
    )
}

export default AxiosPra;