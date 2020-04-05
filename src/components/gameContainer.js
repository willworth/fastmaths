import React, {useEffect, useState} from 'react'
import './gameContainer.css'
const GameContainer = () => {
    const [answer, setanswer] = useState(null)


const getRandomInt= (max)=> {
    return Math.floor(Math.random() * Math.floor(max));
}



    
useEffect(() => {
    let firstMultiplier = getRandomInt(9)
    let secondMultiplier = getRandomInt(9)
    return () => {
        cleanup
    }
}, [])


    return (
        <div className='gamecontainer'>
            <h1>gameContainer</h1>
            <form>
                <h1>maths</h1>
                <hr />
                <p>what is {firstMultiplier} * {secondMultiplier}?</p>
                <input type="number"/>
        </form>


        </div>
    )
}

export default GameContainer;
