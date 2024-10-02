import "./App.css";
import NavBar from "../NavBar/NavBar";
import Button from "../UI/Button/Button";
import Header from "../Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="content-container">
        <div className="left-content">
          <NavBar />
          <img
            src="/puppet.webp"
            alt="mascot of boored"
            width="167px"
            height="181px"
          />
          <div className="text-container">
            <h2 className="title">Trova alguna cosa a fer</h2>
            <Button variant="dark">Generate</Button>
          </div>
        </div>

        <div className="right-content">
          <h2 className="title">Activity:</h2>
          <p className="description">
            Text a friend you haven't talked to in a long time
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
