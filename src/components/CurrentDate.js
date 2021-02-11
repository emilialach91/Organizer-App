import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    const [date,setDate] = useState(new Date());
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
    
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div style={{marginBottom: '40px'}}>
            <p> {weekday.toLocaleString()}</p>
            <p> {date.toLocaleDateString()}</p>
            <p> {date.toLocaleTimeString()}</p>

        </div>
    )
}

export default DateTime
