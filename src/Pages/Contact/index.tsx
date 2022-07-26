import star from "../../assets/Star 1.svg";
import fork from "../../assets/forks.jpg";

export const Contact = () => {
 
  return (
    <div className="grid grid-cols-1 place-items-center relative">
      <div className="text-3xl text-primary text-center">
        {">"}05 <span className="text-white">Contact</span>
      </div>
      <div className="text-4xl font-bold text-center text-white mt-5">
        Get in Touch
      </div>
      <div className="font-extralight mt-5 text-center  text-white  text-xl">
        Want to say hello? you can easily reach me 
      </div>
      <div className="font-extralight mt-1 text-center mb-5 text-white  text-xl">
         with these hot coners
      </div>
      <div className="font-extralight my-2 text-lg text-white hidden md:block ">
        <span className="text-[#64FFDA]">. </span>
        Top right (email)
      </div>
      <div className="font-extralight my-2 text-lg text-white  hidden md:block">
        <span className="text-[#64FFDA]">. </span>
        Bottom left (socials)
      </div>
      <div className="font-extralight my-2 text-lg text-white md:hidden ">
        <span className="text-[#64FFDA]">. </span>
        Bottom (socials)
      </div>
      <div className="font-extralight my-2 text-lg text-white ">
        <span className="text-[#64FFDA]">. </span>
        Bottom right (chat)
      </div>


      <div className="md:hidden">
        <div className="text-center mb-4 text-white">or</div>

        <div className="flex justify-center place-items-center">
         <a href="mailto:mubarak@codeswot.io">
         <button>Email me_</button>
         </a>

        </div>

      </div>
      

      <div className="font-extralight text-white text-body-2 text-center mt-24 relative bottom-5">
        <div className=" w-80">
          Built with coffee ☕, ReactJs and fun stuff by codeswot
        </div>

        <div className="flex space-x-8 justify-center mt-5">
          <div className="flex space-x-2 ">
            <img src={star} alt="image" />
            <div className="text-sm">500+</div>
          </div>
          <div className="flex space-x-2 justify-center ">
            <img src={fork} alt="image" />
            <div className="text-sm">15+</div>
          </div>
        </div>
      </div>
    </div>
  );
};
