import { Route, Routes } from 'react-router-dom';
import './App.css';
import CompletedTasks from './Components/CompletedTasks';
import Home from './Components/Home';
import Navbar from './Components/Shared/Navbar';
import Tasks from './Components/Tasks/Tasks';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/completedTasks' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='/todo' element={<Tasks></Tasks>}></Route>
      </Routes>
    </div>
  );
}

export default App;
