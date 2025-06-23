import './App.css';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';
import Profile from './Profile/ProfileComponent';
import ProfilePage from './Pages/ProfilePage';


function App() {
  const theme = createTheme({
    focusRing:"never",
    fontFamily:"Poppins,sans-serief",
    primaryColor:"bright-sun",
    primaryShade:4,
    colors: {
      'bright-sun': [
        '#fffbeb', // 50
        '#fff3c6', // 100
        '#ffe588', // 200
        '#ffd149', // 300
        '#ffbd20', // 400
        '#f99b07', // 500
        '#dd7302', // 600
        '#b75006', // 700
        '#943c0c', // 800
        '#7a330d', // 900
        '#461902'  // 950
      ],
      'mine-shaft': [
        '#f6f6f6', // 50
        '#e7e7e7', // 100
        '#d1d1d1', // 200
        '#b0b0b0', // 300
        '#888888', // 400
        '#6d6d6d', // 500
        '#5d5d5d', // 600
        '#4f4f4f', // 700
        '#454545', // 800
        '#3d3d3d', // 900
        '#2d2d2d'  // 950
      ],
    },
  })
  return (
   <MantineProvider defaultColorScheme='dark' theme={theme}>
    <BrowserRouter>
    <div>
     <Header/>
     <Divider  size={"xs"} mx={"md"}/> 
    <Routes>
      <Route path='/find-jobs' element={<FindJobs/>}/>
      <Route path='/find-talent' element={<FindTalentPage/>}/>
       <Route path='/company' element={<CompanyPage/>}/>
       <Route path='/posted-job' element={<PostedJobPage/>} />
       <Route path='/job-history' element={<JobHistoryPage/>} />
      <Route path='/post-job' element={<PostJobPage/>}/>
       <Route path='/signup' element={<SignUpPage/>}/>
       <Route path='/login' element={<SignUpPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/jobs' element={<JobDescPage/>} />
      <Route path='/apply-job' element={<ApplyJobPage/>} />
      <Route path='/talent-profile' element={<TalentProfilePage/>}/>
      <Route path='*' element={<HomePage/>} />
    </Routes>
      <Footer/>
      </div>
    </BrowserRouter>   
   </MantineProvider>
  );
}
export default App; 
