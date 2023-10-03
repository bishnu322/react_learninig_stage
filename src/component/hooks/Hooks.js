import React,{useState, useEffect} from 'react'

function Hooks() {
    const [data, setData] = useState(0)
    let [num, setNum] = useState(1)

    // useEffect(() =>{
    //     console.log('this is unmount code in useEffect');

    //     return () =>{
    //         console.log('data is cleaned up unmount inside useeffect');
    //     }

    // },[data, num])
  return (
    <>
        <h2>useState, useEffect</h2>
        <h2>Data Value: {data} and Num Value: {num} </h2>
        <button onClick={()=> setData(data + 2)}>update data</button>
        <button onClick={()=> setNum(num + 2)}>update num</button>
      
    </>
  )
}   
export default Hooks;
