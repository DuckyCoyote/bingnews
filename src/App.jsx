import LandingPage from "./LandingPage";
import "./App.css";
import { DataProvider } from "./context/RequestContext";

function App() {
  return (
    <>
      <a href="/" style={{ textDecoration: "none" }}>
        <h1>Bing News</h1>
      </a>
      <div className="container">
        <DataProvider>
          <LandingPage />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
