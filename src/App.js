import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import AddNewTaskPage from './Add Task/AddNewTaskPage';
import TaskDetails from './TaskDetails/TaskDetails';
import Notification from './Notification/Notification';
import Report from './Report/Report';
import Resource from './Resource/Resource';
import Dashboard from './Dashboard/Dashboard';

import Works from './WorkPage/Works';
import Alltask from './alltasks/Alltask';
import Employeedetails from './Employee/Employeedetails';
import AllProjects from './All Projects/AllProjects';
import AllEmployees from './Employee/AllEmployees';


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/Allprojects" element={<AllProjects />} />
          <Route path="/Addtask" element={<AddNewTaskPage />} />
          <Route path="/taskdetail" element={<TaskDetails />} />
          <Route path="/notify" element={<Notification />} />
          <Route path="/report" element={<Report />} />
          <Route path="/team" element={<Resource/>} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Works" element={<Works/>} />
          <Route path="/alltask" element={<Alltask/>} />
          <Route path="/employee" element={<Employeedetails/>} />
          <Route path="/department" element={<AllEmployees/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
