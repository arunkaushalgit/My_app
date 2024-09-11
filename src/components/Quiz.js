// import React, { useEffect, useState } from "react";

// function Quiz() {
//   const [questions, setQuestions] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

//   // Replace with your API URL
//   const apiUrl = "http://127.0.0.1:8000/myapiquestions/";

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch questions");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Fetched data:", data); // Print data in console
        
//         setQuestions(data.questions);
//         // setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error); // Print error in console
//         // setError(error);
//         // setLoading(false);
//       });
//   }, []);



//   return (
    
//     <div>hey this is arun {questions}</div>
    
//     );
// }

// export default Quiz;



// import React, { useEffect, useState } from "react";

// function Quiz() {
//   const [questions, setQuestions] = useState([]);
//   const apiUrl = "http://127.0.0.1:8000/myapiquestions/";

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch questions");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Fetched data:", data); // Print data in console
//         setQuestions(data); // Assuming data is an array of questions
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error); // Print error in console
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Quiz Dashboard</h1>
//       {questions.length === 0 ? (
//         <p>Loading questions...</p>
//       ) : (
//         questions.map((question, index) => (
//           <div key={question.id} style={{ marginBottom: "20px" }}>
//             <h3>{index + 1}. {question.question_text}</h3>
//             <ul>
//               <li>{question.option_a}</li>
//               <li>{question.option_b}</li>
//               <li>{question.option_c}</li>
//               <li>{question.option_d}</li>
//             </ul>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }  

// export default Quiz;



// import React, { useEffect, useState } from "react";

// function Quiz() {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const apiUrl = "http://127.0.0.1:8000/myapiquestions/";

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch questions");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Fetched data:", data); // Print data in console
//         setQuestions(data); // Assuming data is an array of questions
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error); // Print error in console
//       });
//   }, []);

//   // Handle the next question
//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   // Handle the previous question
//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   return (
//     <div>
//       <h1>Quiz Dashboard</h1>
//       {questions.length === 0 ? (
//         <p>Loading questions...</p>
//       ) : (
//         <div>
//           <h3>
//             {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question_text}
//           </h3>
//           <ul>
//             <li>{questions[currentQuestionIndex].option_a}</li>
//             <li>{questions[currentQuestionIndex].option_b}</li>
//             <li>{questions[currentQuestionIndex].option_c}</li>
//             <li>{questions[currentQuestionIndex].option_d}</li>
//           </ul>
          
//           {/* Previous and Next Buttons */}
//           <button
//             onClick={handlePreviousQuestion}
//             disabled={currentQuestionIndex === 0}
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNextQuestion}
//             disabled={currentQuestionIndex === questions.length - 1}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Quiz;




// import React, { useEffect, useState } from "react";

// function Quiz() {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
//   const [feedback, setFeedback] = useState(""); // Track feedback for the answer
//   const [score, setScore] = useState(0); // Track the score
//   const apiUrl = "http://127.0.0.1:8000/myapiquestions/";

//   useEffect(() => {
//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch questions");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Fetched data:", data);
//         setQuestions(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   // Handle the next question
//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedAnswer(null); // Reset answer selection
//       setFeedback(""); // Reset feedback
//     }
//   };

//   // Handle the previous question
//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       setSelectedAnswer(null); // Reset answer selection
//       setFeedback(""); // Reset feedback
//     }
//   };

//   // Handle selecting an answer
//   const handleAnswerSelect = (option) => {
//     setSelectedAnswer(option);
//     const correctAnswer = questions[currentQuestionIndex].correct_option;
//     if (option === correctAnswer) {
//       setFeedback("Correct!");
//       setScore(score + 1); // Increment score
//     } else {
//       setFeedback("Wrong!");
//     }
//   };

//   return (
//     <div>
//       <h1>Quiz Dashboard</h1>
//       {questions.length === 0 ? (
//         <p>Loading questions...</p>
//       ) : (
//         <div>
//           <h3>
//             {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question_text}
//           </h3>
//           <ul>
//             <li
//               onClick={() => handleAnswerSelect("option_a")}
//               style={{
//                 backgroundColor:
//                   selectedAnswer === "option_a" ? "lightgray" : "white",
//                 cursor: "pointer",
//               }}
//             >
//               {questions[currentQuestionIndex].option_a}
//             </li>
//             <li
//               onClick={() => handleAnswerSelect("option_b")}
//               style={{
//                 backgroundColor:
//                   selectedAnswer === "option_b" ? "lightgray" : "white",
//                 cursor: "pointer",
//               }}
//             >
//               {questions[currentQuestionIndex].option_b}
//             </li>
//             <li
//               onClick={() => handleAnswerSelect("option_c")}
//               style={{
//                 backgroundColor:
//                   selectedAnswer === "option_c" ? "lightgray" : "white",
//                 cursor: "pointer",
//               }}
//             >
//               {questions[currentQuestionIndex].option_c}
//             </li>
//             <li
//               onClick={() => handleAnswerSelect("option_d")}
//               style={{
//                 backgroundColor:
//                   selectedAnswer === "option_d" ? "lightgray" : "white",
//                 cursor: "pointer",
//               }}
//             >
//               {questions[currentQuestionIndex].option_d}
//             </li>
//           </ul>

//           {/* Feedback */}
//           {feedback && <p>{feedback}</p>}

//           {/* Previous and Next Buttons */}
//           <button
//             onClick={handlePreviousQuestion}
//             disabled={currentQuestionIndex === 0}
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNextQuestion}
//             disabled={currentQuestionIndex === questions.length - 1}
//           >
//             Next
//           </button>
//         </div>
//       )}

//       {/* Display the score */}
//       <p>Your score: {score}</p>
//     </div>
//   );
// }

// export default Quiz;




import React, { useEffect, useState } from "react";
import './Quiz.css';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
  const [feedback, setFeedback] = useState(""); // Track feedback for the answer
  const [score, setScore] = useState(0); // Track the score
  const apiUrl = "http://127.0.0.1:8000/myapiquestions/";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        // Map the data to match the expected structure for your quiz
        const formattedQuestions = data.map(item => ({
          question_text: item.column1, // Assuming 'column1' is the question text
          option_a: item.column2,
          option_b: item.column3,
          option_c: item.column4,
          option_d: item.column5,
          correct_option: item.column6, // Assuming 'column6' contains the correct answer
        }));
        setQuestions(formattedQuestions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Handle the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null); // Reset answer selection
      setFeedback(""); // Reset feedback
    }
  };

  // Handle the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null); // Reset answer selection
      setFeedback(""); // Reset feedback
    }
  };

  // Handle selecting an answer
  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);

    const correctAnswer = questions[currentQuestionIndex].correct_option.toLowerCase(); // e.g., 'option_a', 'option_b', etc.
    if (option === correctAnswer) {
      setFeedback("Correct!");
      setScore(score + 1); // Increment score
    } else {
      setFeedback("Wrong!");
    }
  };

  return (
    <div>
      <h1>Quiz Dashboard</h1>
      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        <div>
          <h3>
            {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question_text}
          </h3>
          <ul>
            <li
              onClick={() => handleAnswerSelect("option_a")}
              style={{
                backgroundColor:
                  selectedAnswer === "option_a" ? "lightgray" : "white",
                cursor: "pointer",
              }}
            >
              {questions[currentQuestionIndex].option_a}
            </li>
            <li
              onClick={() => handleAnswerSelect("option_b")}
              style={{
                backgroundColor:
                  selectedAnswer === "option_b" ? "lightgray" : "white",
                cursor: "pointer",
              }}
            >
              {questions[currentQuestionIndex].option_b}
            </li>
            <li
              onClick={() => handleAnswerSelect("option_c")}
              style={{
                backgroundColor:
                  selectedAnswer === "option_c" ? "lightgray" : "white",
                cursor: "pointer",
              }}
            >
              {questions[currentQuestionIndex].option_c}
            </li>
            <li
              onClick={() => handleAnswerSelect("option_d")}
              style={{
                backgroundColor:
                  selectedAnswer === "option_d" ? "lightgray" : "white",
                cursor: "pointer",
              }}
            >
              {questions[currentQuestionIndex].option_d}
            </li>
          </ul>

          {/* Feedback */}
          {feedback && <p>{feedback}</p>}

          {/* Previous and Next Buttons */}
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>
        </div>
      )}

      {/* Display the score */}
      <p>Your score: {score}</p>
    </div>
  );
}

export default Quiz;








