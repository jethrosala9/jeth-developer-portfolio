import SideHeader from "./components/side-header/SideHeader.jsx";
import MainContent from "./components/main-content/MainContent.jsx";
import "./App.css";

function App() {
  return (
    <div className="page-layout">
      <div className="head">
        <SideHeader />
      </div>
      <main className="page-content">
        <MainContent />
      </main>
    </div>
  );
}

export default App;
