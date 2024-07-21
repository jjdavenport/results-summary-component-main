import "./App.css";
import iconReaction from "./assets/images/icon-reaction.svg";
import iconMemory from "./assets/images/icon-memory.svg";
import iconVerbal from "./assets/images/icon-verbal.svg";
import iconVisual from "./assets/images/icon-visual.svg";

function App() {
  return (
    <>
      <main>
        <div className="left">
          <h2>Your Result</h2>
          <div className="result-div">
            <h1>
              76
              <span>of 100</span>
            </h1>
          </div>
          <h3>Great</h3>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="right">
          <div className="h1-div">
            <h2>Summary</h2>
          </div>
          <div className="catagories" id="react">
            <div className="left-col">
              <img src={iconReaction} alt="" />
              <p>Reaction</p>
            </div>
            <div className="right-col">
              <p>
                80
                <span>/ 100</span>
              </p>
            </div>
          </div>
          <div className="catagories" id="memory">
            <div className="left-col">
              <img src={iconMemory} alt="" />
              <p>Memory</p>
            </div>
            <div className="right-col">
              <p>
                92
                <span>/ 100</span>
              </p>
            </div>
          </div>
          <div className="catagories" id="verbal">
            <div className="left-col">
              <img src={iconVerbal} alt="" />
              <p>Verbal</p>
            </div>
            <div className="right-col">
              <p>
                61
                <span>/ 100</span>
              </p>
            </div>
          </div>
          <div className="catagories" id="visual">
            <div className="left-col">
              <img src={iconVisual} alt="" />
              <p>Visual</p>
            </div>
            <div className="right-col">
              <p>
                72
                <span>/ 100</span>
              </p>
            </div>
          </div>
          <a>Continue</a>
        </div>
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/jjdavenport">jjdavenport</a>.
      </div>
    </>
  );
}

export default App;
