export default function Hero() {
  return (
    <div className="py-4 px-2 flex items-center flex-col w-full my-20">
      <button className="border px-4 py-2 rounded-full border-gray-200 hover:bg-gray-200 transition duration-200 bg-gray-100 cursor-pointer text-gray-600">
        What are early stage tax requirements?
      </button>

      <div>
        <h1 className="font-medium mt-10 text-7xl text-black tracking-tighter text-center">
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className="max-w-2xl text-center mt-4 mx-auto text-lg text-neutral-700">
          Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 1:24am.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-10">
        <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-white font-medium shadow-lg text-shadow-,md cursor-pointer tracking-wide">Start free trial
        </button>
        <button className="px-4 py-2 rounded-lg text-black font-medium text-shadow-,md cursor-pointer tracking-wide">Pricing &rarr;
        </button>
      </div>
      <p className="mt-7 font-sm px-4 py-2 text-neutral-500/50">
        For US-based startups.
      </p>
    </div>
  );
}
