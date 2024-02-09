import React from 'react';
import blogImg1 from "../assets/image18.png"
import blogImg2 from "../assets/image19.png"
import blogImg3 from "../assets/image20.png"

const Blog = () => {
    const blogs = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: blogImg1 },
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: blogImg2 },
        { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: blogImg3 },
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl my-12 mx-auto' id="faq">
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralGray font-semibold mb-4 '>Caring is the new marketing</h2>
                <p className='md:w-3/4 text-sm text-neutralGray mb-8 mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who is joining the community, read about how our community are increasing their membership income and lots more.</p>
            </div>

            {/* all blogs */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-center'>

                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300 w-full'/>
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md  mx-auto  '>
                            <h3 className='mb-3 font-semibold text-neutralGray'>{blog.title}</h3>
                            <div className='justify-center'>
                                <a href="" className='font-bold text-brandPrimary hover:text-neutral-700' >Meet all customers</a>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;