import React, {useState, useEffect} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const fnCounter = () => {

        setInterval(() => {

            setCount((currentCount) => currentCount + 1 )

        }, 1000)

    }

    useEffect(() => {

        fnCounter()

        return () => {

            clearInterval(fnCounter)
            
        }

    },[]);

    document.title = `Count : ${count}`

    return (
        <div>
        </div>
    )
}

export default Counter
