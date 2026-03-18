import SideBar from "./components/SideBar";
import TitleBar from "./components/TitleBar";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Members from "./Pages/Members";
import MembershipPlans from "./Pages/MembershipPlans";
import CheckIn from "./Pages/CheckIn";
import AddMemberModal from "./components/modals/AddMember";
import LoginPage from "./Pages/Auth/Login";
import Settings from "./Pages/Settings";

// const App = () => {
//   return (
//     <Router>
//       <main className="flex w-screen h-screen bg-base-300">
//         <SideBar />
//         <div className="flex flex-col w-screen bg-base-200">
//           <TitleBar />

//           <div className="flex-1 overflow-auto">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/members" element={<Members />} />
//               <Route path="/plans" element={<MembershipPlans />} />
//               <Route path="/checkin" element={<CheckIn />} />
//             </Routes>
//           </div>
//         </div>
//       </main>
//       <AddMemberModal onSubmit={(data) => console.log(data)} />
//     </Router>
//   );
// };

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/*"
          element={
            <main className="flex w-screen h-screen bg-base-300">
              <SideBar />

              <div className="flex flex-col w-screen bg-base-200">
                <TitleBar />

                <div className="flex-1 overflow-auto custom-scroll">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/plans" element={<MembershipPlans />} />
                    <Route path="/checkin" element={<CheckIn />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>

              <AddMemberModal onSubmit={(data) => console.log(data)} />
            </main>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
