import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Task from './Task/Task';
import AddNewTaskPage from './Add Task/AddNewTaskPage';
import TaskDetails from './TaskDetails/TaskDetails';
import Notification from './Notification/Notification';
import Report from './Report/Report';
import Resource from './Resource/Resource';
import Dashboard from './Dashboard/Dashboard';



function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/task" element={<Task />} />
          <Route path="/Addtask" element={<AddNewTaskPage />} />
          <Route path="/taskdetail" element={<TaskDetails />} />
          <Route path="/notify" element={<Notification />} />
          <Route path="/report" element={<Report />} />
          <Route path="/team" element={<Resource/>} />
          <Route path="/" element={<Dashboard/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
