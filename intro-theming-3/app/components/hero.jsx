export default function Hero() {
  return (
    <div className="font-display my-40 w-full flex flex-col items-center justify-center">
     <h1 className="max-w-2xl bg-gradient-to-b from-neutral-50 to-neutral-500 text-center text-7xl leading-tight font-bold tracking-tight bg-clip-text text-transparent">Unleash the power of intuitive finance
    </h1>
    <p className="mx-auto mt-10 max-w-3xl text-center text-xl text-neutral-500 selection:bg-white">
    Say goodbye to the <span className="text-primary">outdated</span> financial tools. Every small business owner, regardless of the background, can now manage their <span className="text-primary">business</span> like a pro. Simple. Intuitive. And never boring.
    </p>

    <div className="mt-8 w-full max-w-lg flex justify-center">
    <input 
    type="text" 
    className="mr-4 flex-1 rounded-xl border border-neutral-600 placeholder:text-neutral-500 text-white px-4 focus:outline-none focus:ring-1 focus:ring-primary transition duration-200" 
    placeholder="Enter your email"
    />
    <button className="relative rounded-xl border border-neutral-700 px-4 py-2 text-white cursor-pointer">
    <div className="absolute -bottom-px inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    Join the waitlist
    </button>
    </div>
    </div>
  );
}
