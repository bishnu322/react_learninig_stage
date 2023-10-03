import React, { useState } from 'react'
/*hoc =>high order function
in this we can use one component to another on 
take component as an input and gives component as an output
*/

function Hoc() {
    return (
        <>
            <h3>HOC (High Order Function)</h3>
            <HocGreen comp={Counter} />
            <HocBlue comp={Counter} />
            <HocYello comp={Counter} />
        </>
    )
}

function HocGreen(props) {
    return (
        <>
            <h1 style={{backgroundColor:"green", width: "150px", border:"10px solid darkblue"}}><props.comp />
            <div>Green</div></h1>  
        </>
    )
}

function HocBlue(props) {
    return (
        <>
            <h1 style={{backgroundColor:"blue", width: "150px",border:"10px solid darkblue"}}><props.comp />
            <div>Blue</div></h1>
            
        </>
    )
}

function HocYello(props) {
    return (
        <>
            <h1 style={{backgroundColor:"yellow", width: "150px",border:"10px solid darkblue"}}><props.comp />
            <div>Yellow</div></h1>
            
        </>
    )
}

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>count</button>
        </>
    )
}
export default Hoc;
