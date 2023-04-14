import { Component ,useState} from 'react';

function Test() {
    
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        if (count) {
            setCount(count-1)
        }
    }

    return (<div>
        <h1>Counters that update together</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>increment()}>
        Increment 
        </button>
        <button onClick={()=>decrement()} style={{margin : '10px'}}>
        Decrement 
        </button>
    </div> );
    
}

export default Test