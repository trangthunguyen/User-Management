import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import HeaderContent from "./components/HeaderContent/HeaderContent";
import MainContent from "./components/MainContent/MainContent";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">
          <div className="wrap-content">
            <HeaderContent />
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
