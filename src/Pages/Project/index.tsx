import "./style.css";
import { ProjectCard } from "../../component/Core/ProjectCard";
import jangu from "../../assets/jangu.svg";
import flutter from "../../assets/flutter.svg";

const project = [
  {
    name: "JanguAsk",
    logo: jangu,
    about:
      "The Social Education App, lorem ipsun blah blah blah for the sake  of testing here we go...",
    technologies: [
      {
        name: "flutter",
        logo: flutter,
      },
    ],
  },
  {
    name: "Gyara",
    logo: jangu,
    about:
      "The Social Education App, lorem ipsun blah blah blah for the sake  of testing here we go...",
    technologies: [
      {
        name: "flutter",
        logo: flutter,
      },
    ],
  },
  {
    name: "Palgo",
    logo: jangu,
    about:
      "The Social Education App, lorem ipsun blah blah blah for the sake  of testing here we go...",
    technologies: [
      {
        name: "flutter",
        logo: flutter,
      },
    ],
  },
  {
    name: "Palace",
    logo: jangu,
    about:
      "The Social Education App, lorem ipsun blah blah blah for the sake  of testing here we go...",
    technologies: [
      {
        name: "flutter",
        logo: flutter,
      },
    ],
  },
  {
    name: "Clock ",
    logo: jangu,
    about:
      "The Social Education App, lorem ipsun blah blah blah for the sake  of testing here we go...",
    technologies: [
      {
        name: "flutter",
        logo: flutter,
      },
    ],
  },
];

export const ProjectScreen = () => {
  return (
    <div className=" ">
      <div className=" mb-16">
        <div className="text-3xl text-primary ">
          {">"}03 <span className="text-white">Project</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-16 ">
        {
            project.map((item, idx)=> (
                <ProjectCard name={item.name} logo={item.logo} about={item.about} technologies={item.technologies} />
            ))
        }
      </div>
    </div>
  );
};
