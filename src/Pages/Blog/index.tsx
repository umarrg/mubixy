import { BlogCard } from "../../component/Core/BlogCard"
import code from '../../assets/code.svg'

const blog =[
    {
        title: "How to use the canvas in Flutter",
        description: "Follow up to see how easy it is to build a simple canvas in flutter with details of how to run a lorem ipsum script for the normal people hehe, am i lossing it ? i think not ...",
        category: "Written",
        image: code,

    },
    {
        title: "How to use the canvas in Flutter",
        description: "Follow up to see how easy it is to build a simple canvas in flutter with details of how to run a lorem ipsum script for the normal people hehe, am i lossing it ? i think not ...",
        category: "Written",
        image: code,

    },
    {
        title: "How to use the canvas in Flutter",
        description: "Follow up to see how easy it is to build a simple canvas in flutter with details of how to run a lorem ipsum script for the normal people hehe, am i lossing it ? i think not ...",
        category: "Written",
        image: code,

    },
    {
        title: "How to use the canvas in Flutter",
        description: "Follow up to see how easy it is to build a simple canvas in flutter with details of how to run a lorem ipsum script for the normal people hehe, am i lossing it ? i think not ...",
        category: "Written",
        image: code,

    },
    {
        title: "How to use the canvas in Flutter",
        description: "Follow up to see how easy it is to build a simple canvas in flutter with details of how to run a lorem ipsum script for the normal people hehe, am i lossing it ? i think not ...",
        category: "Written",
        image: code,

    },
    {
        title: "How to use the canvas in Flutter",
        description: "Follow up to see how easy it is to build a simple canvas in flutter with details of how to run a lorem ipsum script for the normal people hehe, am i lossing it ? i think not ...",
        category: "Written",
        image: code,

    },
    {
        title: "How to use the canvas in Flutter",
        description: "Follow up to see how easy it is to build a simple canvas in flutter with details of how to run a lorem ipsum script for the normal people hehe, am i lossing it ? i think not ...",
        category: "Written",
        image: code,

    },
    {
        title: "How to use the canvas in Flutter",
        description: "Follow up to see how easy it is to build a simple canvas in flutter with details of how to run a lorem ipsum script for the normal people hehe, am i lossing it ? i think not ...",
        category: "Written",
        image: code,

    },
]

export const BlogScreen = () => {

    return (
        <div className="grid grid-cols-1 place-item-center">
            <div className='mb-10'>
                <div className="text-white text-3xl font-bold">
                    All Blog & Posts
                </div>
                <div className="text-primary text-lg font-bold">A list of all my blogs and posts</div>
            </div>
            <div className="grid md:grid-cols-4 gap-10 ">
               {
                blog.map((item, idx) => (
                    <BlogCard title={item.title} category={item.category} description={item.description} image={item.image} />
                ))
               }
                
               

            </div>

        </div>
    )
}