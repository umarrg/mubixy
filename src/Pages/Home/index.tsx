import github from "../../assets/github.svg";
import linkdin from "../../assets/in.svg";
import twitter from "../../assets/twitter.svg";
import vector from "../../assets/Vector.svg";
import hash from "../../assets/hash.svg"

const icons = [
  {
    img: github,
  },
  { img: twitter },
  { img: linkdin },
];

import { IntroWindow } from "../../component/Core/Intro";
export const Home = () => {
  return (
    <div className="text-white grid md:grid-cols-2 place-items-center">
      <div className="flex items-start">
        <IntroWindow />
      </div>
      <div className="hidden md:block fixed top-24 right-0">
        <img src={vector} />
      </div>
      <div className="hidden md:block fixed top-24 right-8">
        <a
        href="mailto:mubarak@codeswot.io"
          className="rotate-180 font-bold"
          style={{ writingMode: "vertical-lr" }}
        >
          mubarak@codeswot.io
        </a>
      </div>
      <div className="fixed w-full bottom-0 left-0 hidden md:block">
      <img src={hash} width="130px" height="300px" />
      </div>
      <div className="fixed w-full bottom-1 left-10 hidden md:block">
        {icons.map((item, idx) => (
          <a href="#" key={idx}>
            <div className="rounded-3xl bg-gray w-6 my-5">
              <img
                src={item.img}
                className="inline-block h-5 w-5 rounded-full ring-8 ring-gray"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
