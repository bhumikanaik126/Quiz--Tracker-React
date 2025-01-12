import { useState } from "react";
import { QuizStart } from "./QuizStart";

export const QuizTracker=()=> {
const [started, Setstarted] = useState(false);
  return (
    <>
      {started ? (
       <>
         <QuizStart/>
       </>
      ) : (
        <>
          <div>
            <h1>QuizQuest</h1>
            <h5>Click here to begin the quiz. </h5>
            <button
              className="button"
              onClick={() => {
                Setstarted(true);
              }}
            >
              Start
            </button>
          </div>
        </>
      )}
    </>
  );
}