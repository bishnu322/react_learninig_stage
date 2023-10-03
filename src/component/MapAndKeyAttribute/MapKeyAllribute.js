/* eslint-disable array-callback-return */
import React from 'react'
import Table from 'react-bootstrap/Table';

function MapKeyAllribute() {
  // const oldArr = ["Bishnu", "Kohar", 122,233, 55];
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
  // eslint-disable-next-line array-callback-return
  // oldArr.map((item)=>{
  //   console.log("my name is" + item)
  // })
  return (
    <>
      <div className='mapandkey'>
        <h3>Playing with map and key in react</h3>
      {/* 1.this is way to use map in react
          2.how to use nasted list 
      */}
        {/* {
        oldArr.map((data)=> 
        <div>
        Name is:  {data}
        </div>
        )
      } */}
        <Table striped bordered hover variant='dark'>
          <tbody>
            <tr>
              <td>Name</td>
              <td>E-mail</td>
              <td>Contact</td>
            </tr>

            {
              students.map((item, i) =>
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}
export default MapKeyAllribute;