
import './style.css'
import { ProjectCard } from '../../component/Core/ProjectCard'


export const ProjectScreen = () => {
    return (

        <div className=" ">
            <div className=" mb-16">
                <div className="text-3xl text-primary ">
                    {">"}03 <span className="text-white">Project</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-16" >
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
               
           
            </div>

        </div>



    )

}