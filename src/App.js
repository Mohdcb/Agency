import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import AddNewTaskPage from './Add Task/AddProject';
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
import Mainsettings from './Settings/Mainsettings';
import Projectsettings from './Settings/Projectsettings';
import Worksettings from './Settings/Worksettings';
import Companysettings from './Settings/Companysettings';
import AddProject from './Add Task/AddProject';


function App() {
  return (
    <div className='min-h-screen bg-[#F2F2F2] pb-28'>
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/Allprojects" element={<AllProjects />} />
          <Route path="/AddProject" element={<AddProject />} />
          <Route path="/taskdetail" element={<TaskDetails />} />
          <Route path="/notify" element={<Notification />} />
          <Route path="/report" element={<Report />} />
          <Route path="/team" element={<Resource/>} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Works" element={<Works/>} />
          <Route path="/alltask" element={<Alltask/>} />
          <Route path="/employee" element={<Employeedetails/>} />
          <Route path="/department" element={<AllEmployees/>} />
          <Route path="/settings" element={<Mainsettings/>} />
          <Route path="/projects-settings" element={<Projectsettings />} />
        <Route path="/work-settings" element={<Worksettings />} />
        <Route path="/company-settings" element={<Companysettings />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
