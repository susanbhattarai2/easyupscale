import React from 'react'
import Footer from '../../components/Footer'
import Footerend from '../../components/Footerend'
import Navbar from '../../components/Navbar'
import clientBanner from '../../assets/clientBanner.jpg'
import businessabout from '../../assets/businessabout.png'
import { Link } from "react-router-dom";
import Loading from '../../components/Loading'
const Clients = () => {
    
  return (
    <>
        <Navbar />
        <div className='flex'>
        <div className='flex flex-col justify-center content-center bg-hover px-5'>
                    <h1 className='text-4xl text-left font-bold text-white'>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,<br/> sed do eiusmod tempor.</h1>
                    <p className='text-white py-5'>We assist you whether you are an <br/>exceptional talent or a company in need of one.</p>
                </div>
                <div className='flex justify-center'>
                <div><img src={clientBanner} alt='business' className=' min-h-[594px] bg-[100% 51.52%] ' /></div>
                </div>
        </div>    

        <div>
        <div className='grid  sm:grid-cols-2 px-14 mt-20'>
                <div className='px-2 grd-col'>
                    <img src={businessabout} alt="businessabout"></img>

                </div>

                <div className="col content-center flex flex-col justify-center">
                    <span className="text-xl text-hover font-medium">Our mission</span>
                    <h1 className="text-4xl text-left ">
                        Who are we to business ?
                    </h1>
                    <p className='text-left my-6'>There are two sides to every story when it comes to employment. Employers say, "Good help is hard to come by,"
                        while job seekers say, "I can't seem to find a decent job anywhere." Finding suitable work and workers is a
                        difficult process regardless of which side of the coin you are on.</p>
                    If you're looking for work, a single job posting can attract hundreds of applicants. It takes time
                    to sort through them to find a good fit. A job seeker, on the other hand, may feel as if he or she
                    is sending resumes into the Internet's black hole, never to hear back.
                    <p className='text-left my-3'>How can hiring procedures be made more efficient for employers and job seekers?</p>
                    <p className='text-left my-3'>Many people use an employment agency to speed up the process. A company hires an employment agency
                        to help with its staffing requirements. Employment services assist people in finding work in a
                        variety of career fields, from temporary to full-time positions. Whether a company needs a manager,
                        a carpenter, a nurse, or an administrative assistant, an employment service can help.
                        Similarly, the hassle of hiring qualified candidates, from screening to onboarding, is far more taxing
                        on businesses than we realize. Companies struggle to find a good fit for their team in the first place,
                        and hiring an entire team for a specific project is even more difficult.</p>
                </div>
            </div>

        </div>
        <div className='my-20'>
           <div className='flex flex-col content-center items-center'>
           <span className="text-xl text-hover font-medium">You Can</span>
                    <h1 className="text-4xl text-left font-bold">
                        What Individual can do ?
                    </h1>
                    
            </div> 
            
            <div className="my-5 flex justify-center ">
              <button type='button' className=" border bg-primary px-4 py-2 rounded mx-1 text-white hover:bg-hover hover:text-white  ">
                <Link to='/uploadcv'>Upload CV</Link>
              </button>
              <button className="border bg-hover px-4 py-2 rounded mx-1 text-white hover:bg-primary hover:text-white">
                <Link to='/makecv'>Make CV</Link>
              </button>
              </div>       
        </div>


        <Footer />
        <Footerend />
    </>
  )
}

export default Clients