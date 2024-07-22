import "./App.css";
import Results from "./components/results";
import Summary from "./components/summary";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex md:items-center justify-center">
        <main className="flex flex-col md:flex-row md:items-stretch md:justify-center md:w-2/4 md:mx-auto md:shadow-md md:rounded-3xl md:shadow-lightLavender md:min-w-[500px]">
          <Results />
          <Summary />
        </main>
      </div>
      <footer className="text-center text-xs">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/jjdavenport">jjdavenport</a>.
      </footer>
    </div>
  );
}

export default App;
