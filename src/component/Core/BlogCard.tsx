import './style.css'
import code from '../../assets/code.svg'
import v3 from '../../assets/v3.svg'


export const BlogCard = () => {

    return (
     
                <div className="blogcard bg-silver rounded-3xl">
                    <div>
                        <img src={code} className="rounded-t-3xl rounded-r-3xl" />
                    </div>
                    <div className='px-5 py-5'>
                        <div className='flex justify-between items-center'>
                            <div className='text-xs'>
                                How to use the canvas in Flutter
                            </div>
                            <div className='bg-[#C4C4C4] p-1 rounded-full text-xs'>
                                written
                            </div>
                            

                        </div>
                        <div className='text-sm mt-4'>
                                Follow up to see how easy it is to build a simple
                                canvas in flutter with details of how to run a lorem
                                ipsum script for the normal people hehe, am i lossing
                                it ? i think not ...
                        </div>
                        <div className='flex justify-end mt-4'>
                        <img src={v3} width="20px" />

                        </div>
                    </div>


                </div>

           
    )
}