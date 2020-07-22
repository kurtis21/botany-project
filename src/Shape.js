import React , {useState} from 'react';

export default function SelectShape (props) {

    const [shape, setShape] = useState(); 

    const handleSubmit = (event) => {
        
        alert("shape submitted")
        event.preventDefault()
        props.onSubmit()
    }


    return (
        <div>
        <h1> Enter the Shape</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={shape} onChange={event =>
            setShape(event.target.value)} 
            />
            <input type="submit" value="Submit" />
        
        </form>
        <div>you typed: {shape}</div>
   
        </div>
    )
}