import { BlogCard } from "../../component/Core/BlogCard"



export const BlogScreen = () => {

    return (
        <div className="grid grid-cols-1 place-item-center">
            <div className='mb-10'>
                <div className="text-white text-3xl font-bold">
                    All Blog & Posts
                </div>
                <div className="text-primary text-lg font-bold">A list of all my blogs and posts</div>
            </div>

            <div className="grid grid-cols-4 gap-10 ">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
               

            </div>

        </div>
    )
}