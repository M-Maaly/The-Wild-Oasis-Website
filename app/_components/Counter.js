'use client'
import { useState } from "react"

function Counter({x, user}) {
    const [count, setcount] = useState(x)
    console.log(user)
    return (
        <div>
            <button onClick={() => setcount((c) => c - 1)}>-</button>  
            <span>{count}</span>      
            <button onClick={() => setcount((c) => c + 1)}>+</button>        
        </div>
    )
}

export default Counter
