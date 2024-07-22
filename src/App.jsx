import "./App.css";
import iconReaction from "./assets/images/icon-reaction.svg";
import iconMemory from "./assets/images/icon-memory.svg";
import iconVerbal from "./assets/images/icon-verbal.svg";
import iconVisual from "./assets/images/icon-visual.svg";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col">
          <div className="result bg-gradient-light-slate-blue text-white font-hanken flex flex-col items-center flex-1 gap-4 rounded-b-3xl p-6 justify-between">
            <h2 className="opacity-80">Your Result</h2>
            <div className="result-div">
              <h1 className="flex flex-col text-center text-8xl bg-gradient-violet-blue rounded-full h-52 w-52 justify-center items-center">
                76
                <span className="text-xl opacity-80">of 100</span>
              </h1>
            </div>
            <h3 className="text-4xl font-bold">Great</h3>
            <p className="text-center">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          <div className="summary flex-1 text-center p-8 flex flex-col gap-4 justify-between">
            <div className="h1-div">
              <h2 className="text-start text-darkGrayBlue font-semibold">
                Summary
              </h2>
            </div>
            <div className="flex justify-between" id="react">
              <div className="flex gap-2">
                <img src={iconReaction} alt="" />
                <p className="text-lightRed font-bold">Reaction</p>
              </div>
              <div className="right-col">
                <p>
                  80
                  <span> / 100</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between" id="memory">
              <div className="flex gap-2">
                <img src={iconMemory} alt="" />
                <p className="text-orangeyYellow font-bold">Memory</p>
              </div>
              <div className="right-col">
                <p>
                  92
                  <span> / 100</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between" id="verbal">
              <div className="flex gap-2">
                <img src={iconVerbal} alt="" />
                <p className="text-greenTeal font-bold">Verbal</p>
              </div>
              <div className="right-col">
                <p>
                  61
                  <span> / 100</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between" id="visual">
              <div className="flex gap-2">
                <img src={iconVisual} alt="" />
                <p className="text-cobaltBlue font-bold">Visual</p>
              </div>
              <div className="right-col">
                <p>
                  72
                  <span> / 100</span>
                </p>
              </div>
            </div>
            <button className="bg-darkGrayBlue text-white rounded-full h-14 hover:bg-gradient-light-slate-blue">
              Continue
            </button>
          </div>
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
