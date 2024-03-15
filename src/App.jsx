import LandingPage from "./LandingPage";
import "./App.css";
import { DataProvider } from "./context/RequestContext";

function App() {
  return (
    <>
      <h1>Bing News</h1>
      <div className="container">
        <DataProvider>
          <LandingPage />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
