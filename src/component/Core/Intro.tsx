import "./style.css";
export const IntroWindow = () => {
  return (
    <div className="intro-container md:h-[500px] h-[600px]">
    <div className="intro-header">
      <div className="control" style={{ backgroundColor: "#FF0000" }}></div>
      <div className="control" style={{ backgroundColor: "#FAFF00" }}></div>
      <div className="control" style={{ backgroundColor: "#64FFDA" }}></div>
    </div>
    <div className="intro-body px-8 mt-8">
      <h1 className="text-2xl font-bold">
        $: Hi 👋, I am Codeswot <br /> <span className="ml-2">I Turn code into Stuff,</span>
      </h1>
      <h2 className="mt-10 md:text-xl font-semibold ">
        Your Friendly neighbourhood developer! <br /> With great power comes great <br />
        responsibilities. Hard work, studies and <br /> constant coding I have
        acquired the awesome <br /> power of developing
      </h2>

      <div className="absolute w-full bottom-10">
        <h4 className="text-sm pr-8">$: “Always believe in you ability to achieve greatness”   </h4>
        <div className="flex justify-end px-14 items-center mt-4">

          <h6 className="mr-10 text-xs  sm:text[8px]">__ Mubarak I.</h6>

          <div className="btn cursor-pointer md:font-bold text-sm sm:text-base ">
            {">"} <span className=""> Know me_
           </span>
         </div>
        </div>
      </div>
    </div>
  </div>
  );
};
