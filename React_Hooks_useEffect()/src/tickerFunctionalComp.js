import React,{useState, useEffect} from 'react';

const TickerFunctionalComp = () => {

    const [count, setcount] = useState(0);

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count]);

    const tick = ()=>
    {
        setcount(count + 1)
    }
    return (

        <div style={{ textAlign: 'center' }}>
            <h3>Functional Component Timer</h3>
            <h3>{count}</h3>
            <button onClick ={() => setcount(0)}>RESET TIMER</button>
        </div>

    );
}

export default TickerFunctionalComp;
