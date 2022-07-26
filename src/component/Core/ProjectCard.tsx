import v1 from "../../assets/v1.svg"
import v2 from "../../assets/v2.svg"
import v3 from "../../assets/v3.svg"
import flutter from "../../assets/flutter.svg"
import jangu from "../../assets/jangu.svg"
import './style.css'
const icons = [{
    img: v1
}, { img: v2 }, { img: v3 }]

type tech = {
    name: string;
    logo: string;
  };
interface Project {
    logo: string;
    name: string;
    about: string;
    technologies: Array<tech>;
    
   
}



export const ProjectCard = ({name, about, technologies, logo}: Project) => {
    return (

        
            

         
                <div className="relative">
                    <div className='bg-silver rounded-xl px-4 py-2 custom_shadow '>
                        <div className='mb-5 text-black flex items-center justify-between'>
                            <div>{name}</div>
                            <div className="rounded-full bg-white p-4 absolute top-[-45px] right-[-25px] border-8 border-[#353353]
                        " >
                                <img src={logo} />
                            </div>


                        </div>

                        <div className="mt-10 text-xs">{about}</div>

                        <div className='flex justify-between mt-3'>
                        <div className="flex flex-wrap">
                          {
                            technologies.map((tech, idx) => (
                                <div className="bg-[#C4C4C4] rounded-full w-20 flex items-center space-x-2 justify-center mx-1 mb-1">
                                <img src={tech.logo} width="20px" />
                                <div className="text-xs">{tech.name}</div>

                            </div>
                            ))
                          }
                            
                            
                           
                           </div>

                            <div className='flex' >
                                {
                                    icons.map((item) => (
                                        <a className='mx-2'>
                                            <img src={item.img} width="20px" />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
           

    



    )

}