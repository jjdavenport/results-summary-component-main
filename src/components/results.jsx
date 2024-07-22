const Results = () => {
  return (
    <div className="bg-gradient-light-slate-blue text-white font-hanken flex flex-col items-center flex-1 gap-4 md:gap-8 p-6 md:p-8 rounded-b-3xl md:rounded-3xl">
      <h2 className="opacity-80 text-xl">Your Result</h2>
      <div className="result-div">
        <h1 className="flex flex-col text-center text-6xl bg-gradient-violet-blue rounded-full h-40 w-40 justify-center items-center font-bold">
          76
          <span className="text-xl opacity-70 font-semibold">of 100</span>
        </h1>
      </div>
      <h3 className="text-3xl font-bold">Great</h3>
      <p className="text-center opacity-60">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Results;
