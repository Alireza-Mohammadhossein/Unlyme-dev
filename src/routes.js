import React from 'react';
import { Route, Routes, Outlet, Navigate} from 'react-router-dom';
// import Bank from './components/bank/Bank';
import CalendarPage from './components/pages/calendar/CalendarPage';
import NotesPage from './components/pages/notes/NotesPage';
// import CopySites from './components/copy-sites/CopySites';
// import Domains from './components/domains/Domain';
import NotFound from './components/notfound/NotFound';
// import OnlineConsultant from './components/online-consultant/OnlineConsultant';
import MyServices from './components/pages/services/MyServices';
// import Settings from './components/settings/Settings';
import Signin from './components/signin/SignIn';
// import SiteBuilder from './components/site-builder/SiteBuilder';
import EmailPage from './components/pages/email/EmailPage';
import WorkDrivePage from './components/pages/work-drive/WorkDrivePage';
import TasksPage from './components/pages/tasks/TasksPage';
import VideoConferencingPage from './components/pages/video-conferencing/main-page/VideoConferencingPage';
import MeetingPage from './components/pages/video-conferencing/meeting-page/MeetingPage';
import Register from './components/pages/register/Register';



// This component is responsible for page routing
const Switcher = ({ screenSize }) => {
  return (
    <Routes> 
      <Route element={<PrivateRoutes />}>
        <Route 
          path="/"
          element={<MyServices screenSize={screenSize}/>}
        />
        <Route 
          path="/register"
          element={<Register />}
        />
        {/* <Route 
          path="/services/domains"
          element={<Domains />}
        />
        <Route 
          path="/services/site-builder"
          element={<SiteBuilder />}
        /> */}
        <Route 
          path="/services/work-drive"
          element={<WorkDrivePage />}
        />
        <Route 
          path="/services/tasks"
          element={<TasksPage />}
        />
        <Route 
          path="/services/video-conferencing"
          element={<VideoConferencingPage />}
        />
        <Route 
          path="/services/video-conferencing/meeting-page"
          element={<MeetingPage />}
        />
        {/* <Route 
          path="/services/copy-sites"
          element={<CopySites />}
        />
        <Route 
          path="/services/bank"
          element={<Bank />}
        />
        <Route 
          path="/settings"
          element={<Settings />}
        /> */}
        <Route 
          path="/services/calendar"
          element={<CalendarPage />}
        />
        {/* <Route 
          path="/services/online-consultant"
          element={<OnlineConsultant />}
        /> */}
        <Route 
          path="/services/notes"
          element={<NotesPage />}
        />
        <Route 
          path="/services/email"
          element={<EmailPage />}
        />
        <Route 
          path="*"
          element={<NotFound />}
        />
      </Route>
      
      <Route 
        path="/signin"
        element={<Signin />}
      />
    </Routes>
  );
};

const PrivateRoutes = () => {
  let auth = {'token': true}

  return (
    auth.token ? <Outlet /> : <Navigate to='/signin' />
  )
}


export default Switcher;
