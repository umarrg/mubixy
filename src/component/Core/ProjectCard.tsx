import v1 from "../../assets/v1.svg";
import v2 from "../../assets/v2.svg";
import v3 from "../../assets/v3.svg";
import flutter from "../../assets/flutter.svg";
import jangu from "../../assets/jangu.svg";
import "./style.css";
import TextTruncate from "react-text-truncate";
import { useState } from "react";

const icons = [
  {
    img: v1,
  },
  { img: v2 },
  { img: v3 },
];

type tech = {
  name: string;
  logo: string;
};
interface Project {
  logo: string;
  name: string;
  about: string;
  technologies: Array<String>;
}

export const ProjectCard = ({ name, about, technologies, logo }: Project) => {
 const [showAllText, setShowAllText] = useState(false);

  return (
    <div className="relative">
      <div className="bg-silver rounded-xl px-2 py-2 custom_shadow ">
        <div className="mb-5 text-black flex items-center justify-between">
          <div>{name}</div>
          <div
            className="rounded-full bg-white p-2 absolute top-[-45px] right-[-25px] border-8 border-[#353353]
                        "
          >
            <img src={logo} width="30px" />
          </div>
        </div>

        <TextTruncate
          line={showAllText ? 9999 : 3}
          element="small"
          truncateText="…"
          text={about}
          textTruncateChild={
            <div className="">
              <div
              onClick={() => setShowAllText(true)}
              style={{
                textTransform: "capitalize",
                color: "green",
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              more
            </div>
            </div>
          }
        />

        {/* <div className="mt-10 text-xs">{about}</div> */}

        <div className="grid grid-cols-2 mt-3">
          <div className="flex flex-wrap">
            {technologies.map((tech, idx) => (
              <div className="bg-[#C4C4C4] rounded-full w-24  flex items-center space-x-1 justify-center  mb-1 h-5 p-2">
                <img src={""} width="20px" />
                <div className="text-xs">{tech}</div>
              </div>
            ))}
          </div>

          <div className="">
           <div className="flex">
           {icons.map((item) => (
              <a className="mx-2">
                <img src={item.img} width="17px" />
              </a>
            ))}
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};
