import { useState } from "react";
import { MobileExperienceScreen } from "./Mobile";
import "./style.css";

export const ExperienceScreen = () => {
  const [janguClick, setJanguClick] = useState(true);
  const [geeksClick, setGeeksClick] = useState(false);
  const [palgoClick, setPalgoClick] = useState(false);
  const [lexClick, setLexClick] = useState(false);

  return (
    <div className="text-white">
      <div className="text-center mb-8">
        <div className="text-3xl text-primary ">
          {">"}02 <span className="text-white">Experience</span>
        </div>
      </div>

      <div className="md:hidden">
        <MobileExperienceScreen />
      </div>

      <div className="grid grid-cols-2 gap-4text-white place-items-center items-start mt-3    ">
        <div className="hidden md:block">
          <div className="bg-white w-[1px] h-96 relative">
            <div className="flex items-center absolute top-[2rem]">
              <div
                className="bg-gray-50 rounded-full p-4 custom_container ma-20 cursor-pointer"
                onClick={() => {
                  setGeeksClick(false),
                  setPalgoClick(false),
                  setLexClick(false);
                  setJanguClick(true);
                }}
              >
                <div
                  className={
                    janguClick
                      ? "bg-primary rotate-[-46.46deg] sheet"
                      : "bg-[#C4C4C4] rotate-[-46.46deg] sheet"
                  }
                >
                  <div className=" d_text rotate-[46.46deg] ">
                    <div
                      className={
                        janguClick
                          ? "rounded-full w-8 h-8 text-center bg-[#353353] absolute left-7 pt-1 text-sm  text-white"
                          : "rounded-full w-8 h-8 text-center bg-white absolute left-7 pt-1 text-sm  text-black"
                      }
                    >
                      3
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="ml-16">JanguAsk</h4>
            </div>
            <div className="flex items-center absolute top-[8rem]">
              <div
                className="bg-gray-50 rounded-full p-4 custom_container ma-20 cursor-pointer"
                onClick={() => {
                    setPalgoClick(false),
                    setLexClick(false);
                    setJanguClick(false);
                    setGeeksClick(true)

                }}
              >
                <div
                  className={
                    geeksClick
                      ? "bg-primary rotate-[-46.46deg] sheet"
                      : "bg-[#C4C4C4] rotate-[-46.46deg] sheet"
                  }
                >
                  <div className=" d_text rotate-[46.46deg] ">
                    <div
                      className={
                        geeksClick
                          ? "rounded-full w-8 h-8 text-center bg-[#353353] absolute left-7 pt-1 text-sm  text-white"
                          : "rounded-full w-8 h-8 text-center bg-white absolute left-7 pt-1 text-sm  text-black"
                      }
                    >
                      2
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="ml-16">GeeksAxis</h4>
            </div>

            <div className="flex items-center absolute top-[14rem]">
              <div
                className="bg-gray-50 rounded-full p-4 custom_container ma-20 cursor-pointer"
                onClick={() => {
                    setLexClick(false);
                    setJanguClick(false);
                    setGeeksClick(false);
                    setPalgoClick(true)

                }}
              >
                <div
                  className={
                    palgoClick
                      ? "bg-primary rotate-[-46.46deg] sheet"
                      : "bg-[#C4C4C4] rotate-[-46.46deg] sheet"
                  }
                >
                  <div className=" d_text rotate-[46.46deg] ">
                    <div
                      className={
                        palgoClick
                          ? "rounded-full w-8 h-8 text-center bg-[#353353] absolute left-7 pt-1 text-sm  text-white"
                          : "rounded-full w-8 h-8 text-center bg-white absolute left-7 pt-1 text-sm  text-black"
                      }
                    >
                      1
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="ml-16">Palgo</h4>
            </div>

            <div className="flex items-center absolute top-[20rem]">
              <div
                className="bg-gray-50 rounded-full p-4 custom_container ma-20 cursor-pointer"
                onClick={() => {
                    setJanguClick(false);
                    setGeeksClick(false);
                    setPalgoClick(false);
                    setLexClick(true)
                }}
              >
                <div
                  className={
                    lexClick
                      ? "bg-primary rotate-[-46.46deg] sheet"
                      : "bg-[#C4C4C4] rotate-[-46.46deg] sheet"
                  }
                >
                  <div className=" d_text rotate-[46.46deg] ">
                    <div
                      className={
                        lexClick
                          ? "rounded-full w-8 h-8 text-center bg-[#353353] absolute left-7 pt-1 text-sm  text-white"
                          : "rounded-full w-8 h-8 text-center bg-white absolute left-7 pt-1 text-sm  text-black"
                      }
                    >
                      0
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="ml-16">Lexington tech.</h4>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          {janguClick ? <Jangu /> : null}
          {geeksClick ? <Geeks /> : null}
          {palgoClick ? <Palgo /> : null}
          {lexClick ? <Lex /> : null}
        </div>
      </div>
    </div>
  );
};

function Jangu() {
  return (
    <div>
      <h2 className="text-[#E6F1FF] text-3xl mb-3">Mobile Developer</h2>
      <h6 className="text-[14px] font-[200]">May 12, 2019 -June 15 2021</h6>

      <div className="my-6 text-base md:w-57">
        <span className="text-primary ">. </span> Worked as lorem ipsum to make
        sure i am running
      </div>
      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span> Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>
      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span>Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>

      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span> Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>
    </div>
  );
}

function Geeks() {
  return (
    <div>
      <h2 className="text-[#E6F1FF] text-3xl mb-3">Geeks</h2>
      <h6 className="text-[14px] font-[200]">May 12, 2019 -June 15 2021</h6>

      <div className="my-6 text-base md:w-57">
        <span className="text-primary ">. </span> Worked as lorem ipsum to make
        sure i am running
      </div>
      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span> Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>
      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span>Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>

      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span> Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>
    </div>
  );
}

function Palgo() {
  return (
    <div>
      <h2 className="text-[#E6F1FF] text-3xl mb-3">Palgo</h2>
      <h6 className="text-[14px] font-[200]">May 12, 2019 -June 15 2021</h6>

      <div className="my-6 text-base md:w-57">
        <span className="text-primary ">. </span> Worked as lorem ipsum to make
        sure i am running
      </div>
      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span> Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>
      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span>Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>

      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span> Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>
    </div>
  );
}

function Lex() {
  return (
    <div>
      <h2 className="text-[#E6F1FF] text-3xl mb-3">Lex</h2>
      <h6 className="text-[14px] font-[200]">May 12, 2019 -June 15 2021</h6>

      <div className="my-6 text-base md:w-57">
        <span className="text-primary ">. </span> Worked as lorem ipsum to make
        sure i am running
      </div>
      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span> Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>
      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span>Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>

      <div className="my-6 text-base md:w-[400px]">
        <span className="text-primary ">. </span> Worked as the ninja to bring
        forth the front end live and who is i used Docer,Azure and CF
      </div>
    </div>
  );
}
