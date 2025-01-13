import { useState } from "react";
export const AddQuiz=({questions,setQuestions})=>{
    // const [quiz, setQuiz]=useState({question:"",options:["","","",""],answer:""})
    const [question, setquestion]=useState("");
    const [options,setOptions]=useState(["","","",""]);
    const [answer, setAnswer]=useState("");

    function handleSubmit()
    {
        // setQuiz({question,options,answer});
        setQuestions([...questions,{question,options,answer}]);

        setquestion("");
        setOptions(["","","",""]);
        setAnswer("");
        return;
    }
    return (
        <div>
            <label htmlFor="question">enter question</label>
            <input type="text" id="question" onChange={(e)=>{
                setquestion(e.target.value);
            }} />
            <label htmlFor="options">enter 4 options</label>
            {
                options.map((option,index)=>(
                    <input key={index} value={option} onChange={(e)=>{
                        const updatedOptions=[...options];
                        updatedOptions[index]=e.target.value;
                        setOptions(updatedOptions)
                    }} placeholder={`option ${index+1}`} />
    
                ))
            }
            <input type="text" onChange={(e)=>{
                setAnswer(e.target.value)
            }} />
            <input type="submit" name="submit" onClick={()=>{
                handleSubmit();
            }}/>
        </div>
    )
}