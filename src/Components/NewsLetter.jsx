import React from 'react';

const NewsLetter = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id="testimonial">
            <div className='flex items-center justify-center lg:w-4/5 mx-auto'>
                <div className='text-center'>
                <h2 className='lg:text-6xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug '>Pellentesque suscipit fringilla libero eu.</h2>
                <div>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralGray transition-all duration-300 hover:-translate-y-4'>Get a Demo</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;