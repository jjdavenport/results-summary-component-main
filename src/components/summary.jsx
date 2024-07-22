import iconReaction from "./assets/images/icon-reaction.svg";
import iconMemory from "./assets/images/icon-memory.svg";
import iconVerbal from "./assets/images/icon-verbal.svg";
import iconVisual from "./assets/images/icon-visual.svg";

const summary = () => {
  return (
    <div className="flex-1 text-center p-8 flex flex-col gap-4 md:gap-6 justify-between">
      <div className="h1-div">
        <h2 className="text-start text-darkGrayBlue font-bold text-xl">
          Summary
        </h2>
      </div>
      <div
        className="flex justify-between bg-reactBackground items-center rounded-md p-2"
        id="react"
      >
        <div className="flex gap-2">
          <img src={iconReaction} alt="" />
          <p className="text-lightRed font-semibold">Reaction</p>
        </div>
        <div className="right-col">
          <p className="font-bold text-darkGrayBlue">
            80
            <span className="opacity-50"> / 100</span>
          </p>
        </div>
      </div>
      <div
        className="flex justify-between bg-memoryBackground items-center rounded-md p-2"
        id="memory"
      >
        <div className="flex gap-2">
          <img src={iconMemory} alt="" />
          <p className="text-orangeyYellow font-semibold">Memory</p>
        </div>
        <div className="right-col">
          <p className="font-bold text-darkGrayBlue">
            92
            <span className="opacity-50"> / 100</span>
          </p>
        </div>
      </div>
      <div
        className="flex justify-between bg-verbalBackground items-center rounded-md p-2"
        id="verbal"
      >
        <div className="flex gap-2">
          <img src={iconVerbal} alt="" />
          <p className="text-greenTeal font-semibold">Verbal</p>
        </div>
        <div className="right-col">
          <p className="font-bold text-darkGrayBlue">
            61
            <span className="opacity-50"> / 100</span>
          </p>
        </div>
      </div>
      <div
        className="flex justify-between bg-visualBackground items-center rounded-md p-2"
        id="visual"
      >
        <div className="flex gap-2">
          <img src={iconVisual} alt="" />
          <p className="text-cobaltBlue font-semibold">Visual</p>
        </div>
        <div className="right-col">
          <p className="font-bold text-darkGrayBlue">
            72
            <span className="opacity-50"> / 100</span>
          </p>
        </div>
      </div>
      <button className="bg-darkGrayBlue text-white rounded-full h-12 hover:bg-gradient-light-slate-blue font-semibold">
        Continue
      </button>
    </div>
  );
};

export default summary;
