import React,{useState, useMemo} from 'react'

function UseMemo() {
    const [count, setCount] = useState(0);
    const [data , setData] = useState(10)

    const useMemoCount = useMemo(()=>{
        console.log('useMemoCount') 
        return count *2
    },[count])
    return (
        <>
        {/* useMemo used to boost the performace of the page.
         reason is that while using state and props at that time 
         our component unwantedly going on update although that 
         is nor necessary with same value without any change in 
         state */}
            <div>UseMemo</div>
            <h2>{data}</h2> 
            <h2>{count}</h2>

            <h2>{useMemoCount}</h2>
            <button onClick={() => setCount(count + 1)}>update count</button>
            <button onClick={() => setData(data * 10)}>update data</button>
        </>
    )
}
export default UseMemo;