import "./App.css";
import Results from "./components/results";
import Summary from "./components/summary";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col">
          <Results />
          <Summary />
        </main>
        <footer className="text-center text-xs h-min">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/jjdavenport">jjdavenport</a>.
        </footer>
      </div>
    </>
  );
}

export default App;
