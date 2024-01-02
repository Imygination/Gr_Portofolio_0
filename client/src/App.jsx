import "./App.css";
import AboutMeSect from "./views/components/AboutMeSect";
import HeaderSect from "./views/components/HeaderSect";
import MyProjectSect from "./views/components/MyProjectSect";
import NavBar from "./views/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <HeaderSect />
        <AboutMeSect />
        <MyProjectSect />
      </div>
    </>
  );
}

export default App;
