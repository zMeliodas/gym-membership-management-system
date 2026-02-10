import SideBar from "./components/Sidebar";
import TitleBar from "./components/TitleBar";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  return (
    <main className="flex w-screen h-screen bg-base-300">
      <SideBar />
      <div className="flex flex-col w-screen bg-base-200">
        <TitleBar />
        <Dashboard />
      </div>
    </main>
  );
};

export default App;
