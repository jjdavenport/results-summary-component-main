const Results = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-4 rounded-b-3xl bg-gradient-light-slate-blue p-6 font-hanken text-white md:gap-8 md:rounded-3xl md:p-8">
      <h2 className="text-xl opacity-80">Your Result</h2>
      <div>
        <h1 className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-gradient-violet-blue text-center text-6xl font-bold">
          76
          <span className="text-xl font-semibold opacity-70">of 100</span>
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
