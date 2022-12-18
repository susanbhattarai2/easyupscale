import React from "react";
import { FaMapMarkerAlt, FaRegEnvelope, FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Loading from '../../components/Loading.jsx'
import logo from '../../assets/logo.png'
import about from '../../assets/about.jpg'
import './home.css'
import { Link } from "react-router-dom";
const Home = () => {
  const getYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }

  return (
    <>
      <div className="container">
        <div className="hero ">
          <div className="logo">
            <img src={logo} alt='logo' />
          </div>
          <div className="content grid grid-cols-4">
            {/* <div className="text">
            <span>E</span>
            <span>a</span>
            <span>s</span>
            <span>y</span>
            <span>U</span>
            <span>p</span>
            <span>s</span>
            <span>c</span>
            <span>a</span>
            <span>l</span>
            <span>e</span>
            </div> */}
            <h1>Upscale, Smart and Easy</h1>
            <p className="mt-6">We assist you whether you are an exceptional talent or a company in need of one.</p>
            <div className="my-5 ">
              <button type='button' className=" border border-primary px-4 py-2 rounded mx-1 text-black-900 hover:bg-primary  ">
                <Link to='/business'>Business</Link>
              </button>
              <button className="border border-primary px-4 py-2 rounded mx-1 text-white hover:bg-primary ">
                <Link to='/clients'>Clients</Link>
              </button>
            </div>
          </div>
        </div>
        {/* about us  */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 my-10 px-14 h-full">
          <div className="col ">
            <div className="about-image">

              <img src={about} alt='about' />


            </div>
          </div>
          <div className="col content-center flex flex-col justify-center">
            <span className="text-xl text-primary font-medium">About us</span>
            <h1 className="text-3xl text-left">
              Easy Upscale is the ultimate solution for IT companies to uplift their current company scale.
            </h1>
            <Loading />
            <p className="text-left my-6">
              Our objective is to develop talent that is obsessed rather than just filling up critical roles in your
              company in this rapidly increasing field on a worldwide basis. Instead of hiring new employees, we engage
              with your organization to uncover talent, a talent that your company actually needs. We provide an embedded
              scaling platform for rapidly growing tech businesses.

              
            </p>
            <p className="text-left my-6">
            With a system like Easy Upscale's high-performing platform,
              you can be confident that your competitive advantage will always be present.
              Learn for yourself what makes Easy Upscale unique and how it may help your company grow into a
              top tech-friendly firm. The totality of Easy Upscale's solutions unleashes the potential of the entire team.
              Unmatched strength and quickness in the talent acquisition platform.
            </p>
            
            <div className="">
              <button className='border border-primary px-4 py-2 rounded mx-1 text-white bg-primary hover:bg-hover'>Learn More</button>
            </div>
          </div>

        </div>
        {/* contact */}
        {/* <div className="px-14 my-10 grid grid-item-none md:grid-cols-3 gap-3">
          <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 ">
            <div className=" px-5 ">
              <FaMapMarkedAlt size={50} />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h4 className="mb-2 text-2xl font-bold tracking-tight">Location</h4>
              <p className="mb-3 font-normal text-gray-700">Yala Sadak, Kumaripati, Lalitpur Nepal </p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row  ">
            <div className="px-5">
              <FaPhoneAlt size={50}/>
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h4 className="mb-2 text-2xl font-bold tracking-tight">Phone Number</h4>
              <p className="mb-3 font-normal text-gray-700">+977-123456789,9876543210 </p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl ">
            <div className="px-5">
              <FaEnvelope size={50} />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h4 className="mb-2 text-2xl font-bold tracking-tight">E-mail</h4>
              <p className="mb-3 font-normal text-gray-700">info@easyupscale.com</p>
            </div>
          </div>
        </div> */}
        {/* contact-section */}

        <div>
          <section id="contact" className="relative py-4 md:py-[40px] px-14">
            <div className="absolute top-0 left-0 z-[-1] h-1/2 w-full bg-[#e5ffff] lg:h-[45%] xl:h-1/2"></div>
            <div className="container px-4">
              <div className="-mx-4 flex flex-wrap items-center">
                <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                  <div className="ud-contact-content-wrapper">
                    <div className="ud-contact-title mb-12 lg:mb-[150px]">
                      <span className="mb-5 text-base font-semibold text-primary">
                        CONTACT US
                      </span>
                      <h2 className="text-[35px] font-semibold text-dark">
                        {/* <!-- Let's talk about <br /> --> */}
                        Love to hear from you!
                      </h2>
                    </div>
                    <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                      <div className="mb-8 flex w-[330px] max-w-full">
                        <div className="mr-6 text-[32px] text-primary flex items-center">
                          <FaMapMarkerAlt color="#008080" />
                          {/* <svg width="29" height="35" viewBox="0 0 29 35" className="fill-current">
                  <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z"></path>
                  <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z"></path>
                </svg> */}
                        </div>
                        <div>
                          <h5 className="mb-6 text-lg font-semibold">Our Location</h5>
                          <p className="text-base text-body-color">
                            Yala Sadak, Kumaripati, Lalitpur Nepal
                          </p>
                        </div>
                      </div>
                      <div className="mb-8 flex w-[330px] max-w-full">
                        <div className="mr-6 text-[32px] text-primary flex items-center">
                          <FaRegEnvelope color="#008080" />
                          {/* <svg width="34" height="25" viewBox="0 0 34 25" className="fill-primary">
                  <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z"></path>
                </svg> */}
                        </div>
                        <div>
                          <h5 className="mb-6 text-lg font-semibold">How Can We Help?</h5>
                          <p className="text-base text-body-color">info@easyupscale.com</p>
                          {/* <!-- <p className="text-base text-body-color">
                    contact@yourdomain.com
                  </p> --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                  <div id="contactform" className="wow fadeInUp rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]" data-wow-delay=".2s
              ">
                    <h3 className="mb-4 theme-txt-color font-semibold text-[16px]">
                      Send us a Message
                    </h3>

                    <form method="post" onsubmit="return validate();">
                      <input type="hidden" name="csrfmiddlewaretoken" value="mvMnmvjRNmKDH5d8hFNtHOqIWHLKhGxCWBTxo4ncZ0yPKaMiBaJbLMDXvNXNoH6S" />
                      <div className="mb-6">
                        <label for="fullname" className="block text-xs text-dark">Full Name <span >*</span></label>
                        <input type="text" name="fullname" id="fullname" placeholder="John Doe" className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none" required="" />
                      </div>
                      <div className="mb-6">
                        <label for="email" className="block text-xs text-dark">Email <span >*</span></label>
                        <input type="email" name="email" id="email" placeholder="example@yourmail.com" className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none" required="" />
                      </div>
                      <div className="mb-6">
                        <label for="phone" className="block text-xs text-dark">Phone <span >*</span></label>
                        <input type="text" name="phone" id="phone" placeholder="+977 123456789" className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none" required="" />
                      </div>
                      <div className="mb-6">
                        <label for="message" className="block text-xs text-dark">Message <span >*</span></label>
                        <textarea name="message" id="message" rows="1" placeholder="Your Message Here" className="w-full resize-none border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none" required=""></textarea>
                      </div>
                      <div id="error_message"></div>

                      <div className="mb-0">
                        <button type="submit" className="inline-flex items-center justify-center rounded theme-color py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
















        {/* footer */}
        <div className="flex items-start justify-between bg-primary text-white py-2 px-5">
          <div className="">Copyright &copy; {getYear()}. Easy Upscale</div>
          <div className="flex">
            <a href='#facebook' className="px-1"><FaFacebook size={22} /></a>
            <a href='#instagram' className="px-1"><FaInstagramSquare size={22} /></a>
            <a href='#Linkdein' className="px-1"><FaLinkedin size={22} /></a>
            <a href='#twitter' className="px-1"><FaTwitterSquare size={22} /></a>
          </div>
        </div>

      </div>

    </>
  )
}

export default Home;