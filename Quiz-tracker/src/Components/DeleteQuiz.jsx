import { useState } from "react"
export const DeleteQuiz = ({questions,setQuestions})=>{
    const [id,setId]= useState(-1);
    function handlesubmit()
    {
        const questionIndex=parseInt(id);
        const updatedQuestions= questions.filter((_,index)=>index!=questionIndex)
        setQuestions(updatedQuestions)
        setId(-1)
        alert("question delted")
    }
    return(
        <>
        <h4>delete quiz</h4>
        <h6>enter the question no of quiz to be deleted</h6>
        <input type="text" onChange={(e)=>{
            setId(e.target.value);
        }} />
        <input type="submit" name="submit" onClick={()=>{
            handlesubmit();
        }}/>
        </>
    )
}