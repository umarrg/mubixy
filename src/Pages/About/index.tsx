import mub from "../../assets/mub.svg";
import { MentorCard } from "../../component/Core/MentorCard";

const mentors = [
    {
        fName: 'Johan',
        lName: 'Walhout',
        about: 'The live like counter is an awesome software engineer with a tremendous skilset he is super',
        role: 'CTO Palgo'
    },
    {
        fName: 'Chris',
        lName: 'Sells',
        about: 'The live like counter is an awesome software engineer with a tremendous skilset he is super',
        role: 'PM Meta'
    },
    {
        fName: 'Shams',
        lName: 'Khalil',
        about: 'The live like counter is an awesome software engineer with a tremendous skilset he is super',
        role: 'CTO Lexington'
    }
]


export const AboutScreen  = () => {
  return (
    <div className="grid grid-cols-1 place-items-center">
      <div
        className="
             flex   space-x-10   mt-3   "
      >
        <div className="max-w-[590px]">
          <div>
            <div className="text-3xl font-semibold mb-4 text-white">
              <span className="text-primary mr-2">{">"} 01.</span>
              About
            </div>
            <div className=" text-lg font-medium text-white">
              Hello, my name is Mubarak Ibrahim i enjoy writting sweet code and
              doing lorem ipsun for test flight and s0m3 course of running home
              free if you can go home free
            </div>

            <div className="mt-5 text-lg font-medium text-white">
              Basically i can be the best version of my self like i always say
              “Believe in your ability to achieve greatness”
            </div>

            <div className="mt-8 text-white">
              <div className="text-lg font-bold mb-2">
                {">"} <span className="text-primary">I love_</span>
              </div>

              <div className="w-72 flex justify-between text-white  text-sm">
                <div>
                  <div>
                    <span className="text-primary">.</span>Flutter
                  </div>
                  <div>
                    <span className="text-primary">.</span>Node
                  </div>
                </div>

                <div>
                  <div>
                    <span className="text-primary">.</span>Typescript
                  </div>
                  <div>
                    <span className="text-primary">.</span>React
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={mub} width="300px" />
        </div>
      </div>
      <div className="grid grid-cols-5 mb-4">
        <div className="text-xl my-5 text-white ">
          {">"} <span className="text-primary">Mentors_</span>
        </div>
      </div>

      <div className="flex flex-row space-x-10 ">
        
           {
               mentors.map((item) => (
                <MentorCard role={item.role} about={item.about} fName={item.fName} lName={item.lName}  />
               ))
           }

            
       
      </div>
    </div>
  );
};
