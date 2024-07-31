import "./App.css";
import Results from "./components/results";
import Summary from "./components/summary";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-grow justify-center md:items-center">
        <main className="flex flex-col md:mx-auto md:w-2/4 md:min-w-[500px] md:flex-row md:items-stretch md:justify-center md:rounded-3xl md:shadow-md md:shadow-lightLavender">
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
