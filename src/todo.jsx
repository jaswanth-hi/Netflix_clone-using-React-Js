// import React, { useState, useEffect } from 'react';
//  // Import CSS for microphone animation

// // Speech recognition and synthesis setup
// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = SpeechRecognition ? new SpeechRecognition() : null;
// const synth = window.speechSynthesis;

// function Ma() {
//   const [tasks, setTasks] = useState([]);
//   const [listening, setListening] = useState(false);

//   useEffect(() => {
//     if (recognition) {
//       recognition.continuous = true;
//       recognition.lang = 'en-US';

//       recognition.onresult = (event) => {
//         const transcript = event.results[event.results.length - 1][0].transcript.trim();
//         handleAddTask(transcript);
//       };

//       recognition.onend = () => {
//         if (listening) recognition.start(); // Restart if listening
//       };
//     }
//   }, [listening]);

//   // Add task and provide voice feedback
//   const handleAddTask = (task) => {
//     if (task) {
//       setTasks((prevTasks) => [...prevTasks, task]);
//       speak(`Added task: ${task}`);
//     }
//   };

//   // Delete task and provide voice feedback
//   const handleDeleteTask = (index) => {
//     const taskToDelete = tasks[index];
//     setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
//     speak(`Deleted task: ${taskToDelete}`);
//   };

//   // Toggle voice recognition
//   const toggleListening = () => {
//     if (listening) {
//       recognition.stop();
//     } else {
//       recognition.start();
//     }
//     setListening(!listening);
//   };

//   // Speak a message
//   const speak = (message) => {
//     const utterance = new SpeechSynthesisUtterance(message);
//     synth.speak(utterance);
//   };

//   return (
//     <div className="App">
//       <h1>Voice-Enabled To-Do List</h1>
//       <button onClick={toggleListening}>
//         {listening ? 'Stop Listening' : 'Start Listening'}
//       </button>
//       {/* Microphone icon with active animation when listening */}
//       <div className={`microphone-icon ${listening ? 'active' : ''}`}>
//         🎤
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Type a task or use voice"
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') handleAddTask(e.target.value);
//           }}
//         />
//         <ul>
//           {tasks.map((task, index) => (
//             <li key={index}>
//               {task}{' '}
//               <button onClick={() => handleDeleteTask(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Ma;
