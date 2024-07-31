import iconReaction from "./assets/images/icon-reaction.svg";
import iconMemory from "./assets/images/icon-memory.svg";
import iconVerbal from "./assets/images/icon-verbal.svg";
import iconVisual from "./assets/images/icon-visual.svg";

const Summary = () => {
  return (
    <div className="flex flex-1 flex-col justify-between gap-4 p-8 text-center md:gap-6">
      <div>
        <h2 className="text-start font-hanken text-xl font-bold text-darkGrayBlue">
          Summary
        </h2>
      </div>
      <div
        className="flex items-center justify-between rounded-md bg-reactBackground p-2"
        id="react"
      >
        <div className="flex gap-2">
          <img src={iconReaction} alt="Reaction icon" />
          <p className="font-semibold text-lightRed">Reaction</p>
        </div>
        <div>
          <p className="font-bold text-darkGrayBlue">
            80
            <span className="opacity-50"> / 100</span>
          </p>
        </div>
      </div>
      <div
        className="flex items-center justify-between rounded-md bg-memoryBackground p-2"
        id="memory"
      >
        <div className="flex gap-2">
          <img src={iconMemory} alt="Memory icon" />
          <p className="font-semibold text-orangeyYellow">Memory</p>
        </div>
        <div>
          <p className="font-bold text-darkGrayBlue">
            92
            <span className="opacity-50"> / 100</span>
          </p>
        </div>
      </div>
      <div
        className="flex items-center justify-between rounded-md bg-verbalBackground p-2"
        id="verbal"
      >
        <div className="flex gap-2">
          <img src={iconVerbal} alt="Verbal icon" />
          <p className="font-semibold text-greenTeal">Verbal</p>
        </div>
        <div>
          <p className="font-bold text-darkGrayBlue">
            61
            <span className="opacity-50"> / 100</span>
          </p>
        </div>
      </div>
      <div
        className="flex items-center justify-between rounded-md bg-visualBackground p-2"
        id="visual"
      >
        <div className="flex gap-2">
          <img src={iconVisual} alt="Visual icon" />
          <p className="font-semibold text-cobaltBlue">Visual</p>
        </div>
        <div>
          <p className="font-bold text-darkGrayBlue">
            72
            <span className="opacity-50"> / 100</span>
          </p>
        </div>
      </div>
      <button className="h-12 rounded-full bg-darkGrayBlue font-semibold text-white hover:bg-gradient-light-slate-blue">
        Continue
      </button>
    </div>
  );
};

export default Summary;
