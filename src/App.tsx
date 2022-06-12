import "./App.css";
import Zoom from "react-reveal/Zoom";
import { NavBar } from "./component/Navbar";
import { Home } from "./Pages/Home";
import { AboutScreen } from "./Pages/About";
import { ExperienceScreen } from "./Pages/Experience";
import { ProjectScreen } from "./Pages/Project";
import { BlogScreen } from "./Pages/Blog";
import { Contact } from "./Pages/Contact";
import { Chat } from "./component/Core/Chat";
import img from "../src/assets/down.svg";


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
      
          <div className="h-full">
            <Home />

        {/* <div className="sticky left-full top-[70vh] left-full z-20">
        <img src={img} width="40px" />
      </div>
      */}
     
           
          </div>
       
        <Zoom>
          <div id="about" className="h-full">
            <AboutScreen />
          </div>
        </Zoom>
        <Zoom>
          <div id="experience" className="h-full">
            <ExperienceScreen />
          </div>
        </Zoom>
        <Zoom>
          <div id="project" className="h-full">
            <ProjectScreen />
          </div>
        </Zoom>
        <Zoom>
          <div id="blog" className="">
            <BlogScreen />

          </div>
        </Zoom>
        <Zoom>
          <div id="contact" className=" mt-36">
            <Contact />
          </div>
        </Zoom>
        <Chat />

      </div>
    </div>
  );
}

export default App;
