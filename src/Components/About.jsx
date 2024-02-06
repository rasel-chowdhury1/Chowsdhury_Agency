import React from 'react';
import about from '../assets/about.png'

const About = () => {
    return (
        <div>

            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 flex flex-col md:flex-row lg:flex-row justify-between items-center gap-12' id="about">
                <div className='md:w-6/12 mx-auto flex flex-col md:flex-row lg:flex-row justify-between items-center gap-12'>
                    <img className='w-full ' src={about} alt="" />
                </div>

                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralGray font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                    <p className='md:w-3/4 text-sm text-neutralGray mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralGray transition-all duration-300 hover:-translate-y-4'>Learn More</button>
                </div>
            </div>

            {/* company stat */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 '>
                <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2 mx-auto'>
                        <h2 className='text-4xl text-neutralGray font-semibold mb-4 md:w-42/3'>Helping a local <br /> <span className='text-brandPrimary'> business reinvent itself</span></h2>
                        <p className='md:w-3/4 text-sm text-neutralGray mb-8'>We reached here with our hard work and dedication</p>
                    </div>
                    {/* stats  */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-col md:flex-row lg:flex-row sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/memberVector.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralGray font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/event.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralGray font-semibold'>828,867</h4>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/club.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralGray font-semibold'>46,328</h4>
                                    <p>Club</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/payment.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralGray font-semibold'>1,926,436</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;