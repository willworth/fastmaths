import React, {useEffect, useState} from 'react'
import './gameContainer.css'
const GameContainer = () => {
    const [answer, setAnswer] = useState(null)
    const [response, setResponse] = useState('')

    const getRandomInt= (max)=> {
        return Math.floor(Math.random() * Math.floor(max));
        }
    

    const handleChange = e => {
        setResponse({
            response: e.target.value
        })
    }

    const generateNewQuestion = () => {
        let number1 = getRandomInt(9);
        let number2 = getRandomInt(9);
        return [number1,number2]

    }
    let firstMultiplier = getRandomInt(9)
    let secondMultiplier = getRandomInt(9)

  
    useEffect(() => {
      
        return () => {
            setAnswer(firstMultiplier * secondMultiplier)
            console.log("the answer",answer);
            console.log("the response",response);
        }
    }, [response])
    // const query = {   <p>what is {firstMultiplier} * {secondMultiplier}?</p>}
    
    useEffect(() => {
        console.log('response', response);
        if (response === answer)
        return () => {
           console.log("yes!");
           
        }
    }, [response])


    return (
        <div className='gamecontainer'>
            <h1>gameContainer</h1>
            <form>
                <h1>maths</h1>
                <hr />
                {/* {query} */}
                <div className="query">
                    <p>what is {firstMultiplier} * {secondMultiplier}?</p>
                </div>
                <input value={response.value}
                onChange={handleChange}
                     />
        </form>


        </div>
    )
}

export default GameContainer;
