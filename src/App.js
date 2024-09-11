
// import './App.css';
// // import FileUpload from './components/FileUpload';
// import Quiz from './components/Quiz';

// function App() {
//   return (
//   <div className="App">
//     <h1>Welcome to the Quiz App</h1>
//     <Quiz />
//   </div>
//   // <div className="App">
//   //   <h1>Upload your question  xl file here</h1>
//   //   <FileUpload/>
//   // </div>
  

//   );
// }

// export default App;

import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Quiz from './components/Quiz';
import FileUpload from './components/FileUpload';

function App() {
  const [isBaseUIVisible, setIsBaseUIVisible] = useState(true);

  const handleNavigationClick = () => {
    setIsBaseUIVisible(false);  // Hide the base UI when a button is clicked
  };

  return (
    <Router>
      <div className="App">
        {isBaseUIVisible && (
          <div>
            <h1>Welcome to the App</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/quiz" onClick={handleNavigationClick}>
                    <button>Quiz</button>
                  </Link>
                </li>
                <li>
                  <Link to="/upload" onClick={handleNavigationClick}>
                    <button>File Upload</button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/upload" element={<FileUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



