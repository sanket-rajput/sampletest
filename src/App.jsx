import { Routes, Route } from "react-router-dom"
import { About, Navbar, Sponsors } from './components';
import Hero from "./components/HeroParallax";
import Events from "./components/Events";
import Notification from './components/Modal';
import useDimension from "./hooks/useDimension";
import MobileContext from './hooks/MobileContext'
import RegisterHome from "./components/RegisterHome";
import Test from "./components/Test";
import AnimatedCounter from "./components/AnimatedCounter";
import { ToastContainer, Zoom } from "react-toastify";
import PageNotFound from "./components/PageNotFound";
import Footer from './components/footer'
import { Suspense, lazy } from "react";
import Admin from "./components/admin/AdminRoot";
import AdminLogin from "./components/admin/AdminLogin";
import JudgeRegister from "./components/forms/JudgeRegister";
import Judge from "./components/judge/JudgeRoot";
import GenerateSynopsis from "./components/GenerateSynopsis";

import Countdown from "./components/ui/countdown";


const Register = lazy(() => import("./components/Register"));
const Committee = lazy(() => import("./components/committee"));
const EventDetails = lazy(() => import("./components/EventDetails"));
const Results = lazy(() => import("./components/Results"));

const App = () => {
  
  const isMobile = useDimension();

  return (
    <MobileContext.Provider value={isMobile}>
      <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Zoom}
      />
      <Navbar />
      <div className="relative z-0 bg-primary min-h-full">
      <Routes>
        {/* public routes */}


      <Route path="/here" element={<Hero />} />



        <Route index element={<><Hero /><About /><Events /><AnimatedCounter /><Sponsors /><Notification /></>} />
        <Route path="/register" element={<RegisterHome />} />
        <Route path="/register/judge/:event_name" element={<JudgeRegister />} />
        <Route path={`/register/:event`} element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><Register /></Suspense>} />
        <Route path="/events/:id" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><EventDetails /></Suspense>} />
        <Route path="/committee/:id" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><Committee /></Suspense>} />
        <Route path="/generate-synopsis/:event_name" element={<GenerateSynopsis />} />
        <Route path="/results/:event_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><Results /></Suspense>} />
        <Route path="/test/" element={<Test />} />

        {/* admin routes */}
        <Route path="/auth/login" element={<AdminLogin />} />
        <Route path="/admin/*" element={<Admin />} />

        {/* judge routes */}
        <Route path="/judge/*" element={<Judge />} />

        {/* page not found */}
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />
      </div>
    </MobileContext.Provider>
  )
}

export default App
