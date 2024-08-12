import data from "./assets/data.json";

const Summary = () => {
  return (
    <div className="flex flex-1 flex-col justify-between gap-4 p-8 text-center md:gap-6">
      <div>
        <h2 className="text-start font-hanken text-xl font-bold text-darkGrayBlue">
          Summary
        </h2>
      </div>
      {data.map((i) => (
        <div
          key={i.category}
          className={`flex items-center justify-between rounded-md p-2 ${
            i.category === "Reaction"
              ? "bg-reactBackground"
              : i.category === "Memory"
                ? "bg-memoryBackground"
                : i.category === "Verbal"
                  ? "bg-verbalBackground"
                  : "bg-visualBackground"
          }`}
        >
          <div className="flex gap-2">
            <img src={i.icon} alt={`${i.category} icon`} />
            <p
              className={`font-semibold ${
                i.category === "Reaction"
                  ? "text-lightRed"
                  : i.category === "Memory"
                    ? "text-orangeyYellow"
                    : i.category === "Verbal"
                      ? "text-greenTeal"
                      : "text-cobaltBlue"
              }`}
            >
              {i.category}
            </p>
          </div>
          <div>
            <p className="font-bold text-darkGrayBlue">
              {i.score}
              <span className="opacity-50"> / 100</span>
            </p>
          </div>
        </div>
      ))}
      <button className="h-12 rounded-full bg-darkGrayBlue font-semibold text-white hover:bg-gradient-light-slate-blue">
        Continue
      </button>
    </div>
  );
};

export default Summary;
