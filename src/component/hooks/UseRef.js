import React, {useState, useRef}from 'react'

function UseRef() {

    let handleRef = useRef(null);
    let [data, setData] = useState('');
    let [val, setVal] = useState(' ');

    function inputHandler (){
       
        handleRef.current.style.outline = "none"
        if(handleRef.current.value === ''){
           
            handleRef.current.style.border = '2px solid red';
            setData("please! Enter some value");  
             handleRef.current.focus();

        }else if(handleRef.current.value){

            setData(handleRef.current.value);
            handleRef.current.style.border = '2px solid green';
        }
        
    }

    function getInputValue(inputVal){
      // console.log(inputVal.target.value)
      setVal(inputVal.target.value)
    }

  return (
    <>
    <h2>useRef</h2>
        <input  ref ={handleRef} onChange={getInputValue}/>
        <h2>How are you {val}</h2>
        <div>{data}</div>
        <button onClick={inputHandler}>handle value</button>
    </>
  )
}
export default UseRef;