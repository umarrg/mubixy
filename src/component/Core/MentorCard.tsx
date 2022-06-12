import github from "../../assets/github.svg";
import linkdin from "../../assets/in.svg";
import twitter from "../../assets/twitter.svg";
const icons = [
  {
    img: github,
  },
  { img: twitter },
  { img: linkdin },
];

interface Mentor {
    fName: string;
    lName: string;
    about: string;
    role: string
}

export const MentorCard = ({fName, lName, about, role,}: Mentor)=> {
    return (
        <div className="bg-silver rounded-xl px-4  py-2 custom_shadow w-72 ">
        <div className="mb-5 text-black font-semibold  text-xl ">
          {fName} <br />
          {lName}
        </div>

        <div className="font-semibold text-xs">
          {about}
        </div>

        <div className="flex justify-between mt-3">
          <div>{role}</div>

          <div className="flex">
            {icons.map((item) => (
              <a className="mx-2">
                <img src={item.img} width="20px" />
              </a>
            ))}
          </div>
        </div>
      </div>

    )

}