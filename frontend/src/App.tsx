import SideBar from "./components/SideBar";
import TitleBar from "./components/TitleBar";
import ClassSchedule from "./Pages/ClassSchedule";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <main className="flex w-screen h-screen bg-base-300">
        <SideBar />
        <div className="flex flex-col w-screen bg-base-200">
          <TitleBar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schedule" element={<ClassSchedule />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
