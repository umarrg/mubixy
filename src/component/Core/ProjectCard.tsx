import v1 from "../../assets/v1.svg"
import v2 from "../../assets/v2.svg"
import v3 from "../../assets/v3.svg"
import flutter from "../../assets/flutter.svg"
import jangu from "../../assets/jangu.svg"
import './style.css'
const icons = [{
    img: v1
}, { img: v2 }, { img: v3 }]


export const ProjectCard = () => {
    return (

        
            

         
                <div className="relative">
                    <div className='bg-silver rounded-xl px-4 py-2 custom_shadow '>
                        <div className='mb-5 text-black flex items-center justify-between'>
                            <div>JanguAsk</div>
                            <div className="rounded-full bg-white p-4 absolute top-[-45px] right-[-25px] border-8 border-[#353353]
                        " >
                                <img src={jangu} />
                            </div>


                        </div>

                        <div className="mt-10 text-xs">The Social Education App, lorem
                            ipsun blah blah blah for the sake
                            of testing here we go...</div>

                        <div className='flex justify-between mt-3'>
                           <div className="flex flex-wrap">
                           <div className="bg-[#C4C4C4] rounded-full w-20 flex items-center space-x-2 justify-center mx-1 mb-1">
                                <img src={flutter} width="20px" />
                                <div className="text-xs">Flutter</div>

                            </div>
                            <div className="bg-[#C4C4C4] rounded-full w-20 flex items-center space-x-2 justify-center mx-1 mb-1">
                                <img src={flutter} width="20px" />
                                <div className="text-xs">Flutter</div>

                            </div>
                            <div className="bg-[#C4C4C4] rounded-full w-20 flex items-center space-x-2 justify-center mx-1 mb-1">
                                <img src={flutter} width="20px" />
                                <div className="text-xs" >Flutter</div>

                            </div>
                            
                           
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