import React from "react";
import { LuMapPin } from "react-icons/lu";
import { BsGift } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs"
import { BiCalculator } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaPixiv } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <div className="w-full bg-red-500  relative mb-[5px] py-4 h-[800px] sm:py-15 sm:h-[800px] bg-hero2">
        <div className="w-full py-2 px-2 flex justify-between items-center  ">
          <div className="w-[30%]    flex justify-center items-center  ">
            <img className="w-[50%] h-[70px]" src="images/logo.png" />
          </div>
          <div className="w-[40%] justify-center items-center flex py-2 ">
            <ul className="md:flex gap-6 justify-center items-center text-white text-[18px] py-2 hidden  ">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About </a>
              </li>
              <li>
                <a>Jobs</a>
              </li>
              <li>
                <a>Employers</a>
              </li>
              <li>
                <a>Contact </a>
              </li>
            </ul>
          </div>
          <div className=" w-[30%] px-[20px] flex justify-center items-center ">
            <button className="py-3 px-6 bg-[#94c83d] rounded-[10px]">
              Apply 
            </button>
          </div>
        </div>
        <div className="w-full justify-center items-center flex ]">
          <div className="lg:w-[12%] md:w-[15%] sm:w-[15%] w-[28%] py-2 rounded-[40px] flex justify-center items-center bg-[#ecececb4] gap-2 mt-[10px]">
            <div className=" size-[20px] bg-green-600 rounded-[50%]  "></div>
            <p>Lorem </p>
          </div>
        </div>x 
        <div className="w-full flex justify-center  ">
          <div className="w-[80%] mt-[20px] text-white  ">
            <p>
              
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. essentially unchanged.{" "}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-[75%] mt-[20px] text-center md:text-[25px]  text-white ">
            <h1 className="text-[25px] md:text-[45px]   ">
              {" "}
              Are you Looking For Permanent or Temporary
            </h1>
            <h1 className="text-center text-[35px] md:text-[40px] lg:text-[50px] font-bold mb-[20px]">
              Staffing Solutions?{" "}
            </h1>
            <h4 className="text-center text-[20px] md:text-[40px] lg:text-[50px] mb-[60px] ">
              {" "}
              Our Dedicated Staff are Always Ready To Assist You.
            </h4>
          </div>
        </div>

        <div className="w-full justify-center sm:flex  absolute md:bottom-[-250px] sm:bottom-[-200px] hidden    mb-[30px] ">
          <div className="w-[85%] bg-red-400 md:h-[300px]">
            <img className="w-full h-[300px] sm:h-[400px]  " src="images/6th.jpeg" />
          </div>
        </div>
      </div>
      <div className="w-full bg-hero5 bg-no-repeat bg-cover bg-center  flex  items-center  justify-center mt-[0px] md:mt-[250px]  ">
        <div className="w-[100%] flex-col md:flex lg:flex sm:flex-col md:bg-blue-500 py-20 bg-red-500 ">
          <div className="lg:w-[50%] md:w-[100%] lg:h-[750px] md:h-[200px]">
            <img className="w-full lg:h-[750px] md:h-[300px] " src="images/4th.png" />
          </div>
          <div className="w-[50%]  h-[600px] pl-[50px]">
            <div className="w-[22%] py-2   rounded-[40px] flex justify-center items-center bg-[#ecececb4] gap-2">
              <div className=" size-5 bg-[#94c83d] rounded-[50%]  "></div>
              <p>About Us</p>
            </div>
            <div className="w-full py-6 md:text-[48px] text-[0px] text-[#94c83d]  ">
              <h1>
                <span className="text-black">
                  {" "}
                  Work Is A Canadian-Owned To{" "}
                </span>{" "}
                Staffing Organzied Servicing The GTA
              
              </h1>
            </div>
            <div className="w-full  text-[20px] text-[#94c83d] mb-[30px]  ">
              <p className="text-[#424242]">
                {" "}
                Whether the need is for a single individual for a short period
                of time or personnel for ongoing employment, you can rely on our
                highly qualified staff. Our focus is to find the best-matched
                candidates for each job and best-matched job for each candidate!
                Our business is facilitating the success of your business. We
                provide our clients with quality staffing services that are
                professional, reliable, convenient and cost-effective. Contact
                our representative today to discuss how our staffing solutions
                can meet your company objectives!
              </p>
            </div>
            <button className="py-3 px-6 bg-[#94c83d] border-2 border-[#94c83d] rounded-[3px] mb-[10px] ">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="w-full py-5  bg-hero7 bg-no-repeat bg-center bg-cover px-20   text-white ">
        <div className="w-full flex justify-center items-center">
          <div className="w-[8%] py-2 rounded-[40px] flex justify-center items-center bg-[#ecececb4] gap-2 mt-[10px]">
            <div className="w-[20px] h-[20px] bg-green-600 rounded-[50%]  "></div>
            <p>About</p>
          </div>
        </div>
        <div className="w-full justify-center flex items-center pt-[20px] text-[60px]  text-white mb-[40px]">
          <h1>
            Find Your <span className="text-[#94c83d]">Jobs By Listing </span>
          </h1>
        </div>
        <div className="w-full flex py-2 text-[45px] font-bold flex-col gap-[30px]  ">
          <h1>Health Care</h1>
          <div className="w-full bg-white py-4  font-normal flex-col flex gap-[10px] rounded-[10px] ">
            <div className="w-full flex justify-between px-10  items-center">
            <h1 className="text-black text-[35px]">Nurse</h1>
            <div className="flex gap-[10px] ">
              <button className="py-3 px-6 bg-white  text-[17px] rounded-[10px] text-black">View Moblie</button>
              <button className="py-3 px-6  text-[17px] rounded-[10px] text-black bg-[#94c83d]">Apply Now</button>

            </div>
            </div>
            <div className="flex justify-between w-full px-10 items-center ">
              <div className="flex-col gap-5 text-[22px]">
                <h1 className="text-[#94c83d] mb-[10px]">$<span className="ml-[12px] text-[#413f3f]">$40-45/hours</span><span className="ml-[12px] text-[#413f3f]">$40-45/hour</span></h1>
                <div className="flex gap-[15px] items-center">
                  <LuMapPin className="text-[22px] text-[#94c83d] "/>
                <h1 className="text-[#413f3f]">Coburug On</h1>
                </div>
              </div>
              <h1 className="text-[19px] text-[#413f3f]">Posted: March 3 2022</h1>
            </div>
          </div>
          <div className="w-full bg-white py-4  font-normal flex-col flex gap-[10px] rounded-[10px]">
            <div className="w-full flex justify-between px-10  items-center">
            <h1 className="text-black text-[35px]">Nurse</h1>
            <div className="flex gap-[10px] ">
              <button className="py-3 px-6 bg-white  text-[17px] rounded-[10px] text-black">View Moblie</button>
              <button className="py-3 px-6  text-[17px] rounded-[10px] text-black bg-[#94c83d]">Apply Now</button>

            </div>
            </div>
            <div className="flex justify-between w-full px-10 items-center ">
              <div className="flex-col gap-5 text-[22px]">
                <h1 className="text-[#94c83d] mb-[10px]">$<span className="ml-[12px] text-[#413f3f]">$40-45/hours</span><span className="ml-[12px] text-[#413f3f]">$40-45/hour</span></h1>
                <div className="flex gap-[15px] items-center">
                  <LuMapPin className="text-[22px] text-[#94c83d] "/>
                <h1 className="text-[#413f3f]">Coburug On</h1>
                </div>
              </div>
              <h1 className="text-[19px] text-[#413f3f]">Posted: March 3 2022</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex py-2 text-[45px] font-bold flex-col gap-[30px]  ">
          <h1 className="mt-[20px]">Office Support </h1>
          <div className="w-full bg-white py-4  font-normal flex-col flex gap-[10px] rounded-[10px] ">
            <div className="w-full flex justify-between px-10  items-center">
            <h1 className="text-black text-[35px]">Worker</h1>
            <div className="flex gap-[10px] ">
              <button className="py-3 px-6 bg-white  text-[17px] rounded-[10px] text-black">View Moblie</button>
              <button className="py-3 px-6  text-[17px] rounded-[10px] text-black bg-[#94c83d]">Apply Now</button>

            </div>
            </div>
            <div className="flex justify-between w-full px-10 items-center ">
              <div className="flex-col gap-5 text-[22px]">
                <h1 className="text-[#94c83d] mb-[10px]">$<span className="ml-[12px] text-[#413f3f]">$40-45/hours</span><span className="ml-[12px] text-[#413f3f]">$40-45/hour</span></h1>
                <div className="flex gap-[15px] items-center">
                  <LuMapPin className="text-[22px] text-[#94c83d] "/>
                <h1 className="text-[#413f3f]">Coburug On</h1>
                </div>
              </div>
              <h1 className="text-[19px] text-[#413f3f]">Posted: March 3 2022</h1>
            </div>
          </div>
          <div className="w-full bg-white py-4  font-normal flex-col flex gap-[10px] rounded-[10px]">
            <div className="w-full flex justify-between px-10  items-center">
            <h1 className="text-black text-[35px]">Worker</h1>
            <div className="flex gap-[10px] ">
              <button className="py-3 px-6 bg-white  text-[17px] rounded-[10px] text-black">View Moblie</button>
              <button className="py-3 px-6  text-[17px] rounded-[10px] text-black bg-[#94c83d]">Apply Now</button>

            </div>
            </div>
            <div className="flex justify-between w-full px-10 items-center ">
              <div className="flex-col gap-5 text-[22px]">
                <h1 className="text-[#94c83d] mb-[10px]">$<span className="ml-[12px] text-[#413f3f]">$40-45/hours</span><span className="ml-[12px] text-[#413f3f]">$40-45/hour</span></h1>
                <div className="flex gap-[15px] items-center">
                  <LuMapPin className="text-[22px] text-[#94c83d] "/>
                <h1 className="text-[#413f3f]">Coburug On</h1>
                </div>
              </div>
              <h1 className="text-[19px] text-[#413f3f]">Posted: March 3 2022</h1>
            </div>
          </div>
        </div>
        <div className="w-full flex py-2 text-[45px] font-bold flex-col gap-[30px]  ">
          <h1 className="mt-[20px]">IT </h1>
          <div className="w-full bg-white py-4  font-normal flex-col flex gap-[10px] rounded-[10px] ">
            <div className="w-full flex justify-between px-10  items-center">
            <h1 className="text-black text-[35px]">IT Expert </h1>
            <div className="flex gap-[10px] ">
              <button className="py-3 px-6 bg-white  text-[17px] rounded-[10px] text-black">View Moblie</button>
              <button className="py-3 px-6  text-[17px] rounded-[10px] text-black bg-[#94c83d]">Apply Now</button>

            </div>
            </div>
            <div className="flex justify-between w-full px-10 items-center ">
              <div className="flex-col gap-5 text-[22px]">
                <h1 className="text-[#94c83d] mb-[10px]">$<span className="ml-[12px] text-[#413f3f]">$40-45/hours</span><span className="ml-[12px] text-[#413f3f]">$40-45/hour</span></h1>
                <div className="flex gap-[15px] items-center">
                  <LuMapPin className="text-[22px] text-[#94c83d] "/>
                <h1 className="text-[#413f3f]">Coburug On</h1>
                </div>
              </div>
              <h1 className="text-[19px] text-[#413f3f]">Posted: March 3 2022</h1>
            </div>
          </div>
          <div className="w-full bg-white py-4  font-normal flex-col flex gap-[10px] rounded-[10px]">
            <div className="w-full flex justify-between px-10  items-center">
            <h1 className="text-black text-[35px]">IT Expert</h1>
            <div className="flex gap-[10px] ">
              <button className="py-3 px-6 bg-white  text-[17px] rounded-[10px] text-black">View Moblie</button>
              <button className="py-3 px-6  text-[17px] rounded-[10px] text-black bg-[#94c83d]">Apply Now</button>

            </div>
            </div>
            <div className="flex justify-between w-full px-10 items-center ">
              <div className="flex-col gap-5 text-[22px]">
                <h1 className="text-[#94c83d] mb-[10px]">$<span className="ml-[12px] text-[#413f3f]">$40-45/hours</span><span className="ml-[12px] text-[#413f3f]">$40-45/hour</span></h1>
                <div className="flex gap-[15px] items-center">
                  <LuMapPin className="text-[22px] text-[#94c83d] "/>
                <h1 className="text-[#413f3f]">Coburug On</h1>
                </div>
              </div>
              <h1 className="text-[19px] text-[#413f3f]">Posted: March 3 2022</h1>
            </div>
          </div>

          <div className="w-full flex justify-center items-center py-3">
              <button className="py-4 px-8 bg-[#94c83d] text-[17px] rounded-[10px] text-black font-normal">View Jobs</button>
                 
          </div>
        </div>
        
      </div>

      <div className="w-full flex flex-col gap-10 py-16 bg-hero5 bg-no-repeat bg-center bg-cover">
        <div className="w-full flex justify-center items-center">
        <div className="w-[10%] py-2 rounded-[40px] flex justify-center items-center bg-[#ecececb4] gap-2 mt-[10px]">
            <div className="w-[20px] h-[20px] bg-green-600 rounded-[50%]  "></div>
            <p>Employers</p>
          </div>
        </div>
        <div className="w-full justify-center flex items-center pt-[20px] text-[60px]  text-black mb-[40px]">
          <h1>
            Find Your <span className="text-[#94c83d]">Employers </span>
          </h1>
        </div>
        <div className="w-full justify-center gap-6 flex">
          <div className="w-[30%] py-7 bg-black rounded-[15px] flex flex-col">
               <div className="w-full justify-center items-center flex mb-[20px] ">
                <div className=" size-[100px] rounded-[50%] bg-[#94c83d] flex justify-center items-center">
                  <BsGift className="text-[50px]"/>
                </div>
               </div>
               <div className="w-full justify-center items-center flex flex-col gap-[5px] text-white">
               <h1 className="text-[20px]">Lorum Ipsum Is</h1>
               <h1 className="text-[20px] mb-[10px]">Employer</h1>
               </div>
               <div className="w-full  py-1   flex justify-center  gap-5 mb-[8px]">
                <div className="w-[90%]   border-t-4 border-white"></div>
               </div>
               <div className="w-full flex justify-center items-center py-3 0 text-white">
                <div className="w-[80%]">
                  <h1>Lorem Ipsum is Simply dummy text of the <br/> Lorem Ipsum is Simply dummy text of the <br/>ipsum has been great indesytry</h1>
                </div>
               </div>
               <div className="w-full justify-center items-center flex  ">
               <a className=" px-1 text-[#94c83d] rounded-[3px] mb-[10px] border-b-2 border-white  ">
              Read More
            </a>
            </div>
          </div>
          <div className="w-[30%] py-7 bg-black rounded-[15px] flex flex-col">
               <div className="w-full justify-center items-center flex mb-[20px] ">
                <div className=" size-[100px] rounded-[50%] bg-[#94c83d] flex justify-center items-center">
                  <BsGift className="text-[50px]"/>
                </div>
               </div>
               <div className="w-full justify-center items-center flex flex-col gap-[5px] text-white">
               <h1 className="text-[20px]">Lorum Ipsum Is</h1>
               <h1 className="text-[20px] mb-[10px]">Employer</h1>
               </div>
               <div className="w-full  py-1   flex justify-center  gap-5 mb-[8px]">
                <div className="w-[90%]   border-t-4 border-white"></div>
               </div>
               <div className="w-full flex justify-center items-center py-3 0 text-white">
                <div className="w-[80%]">
                  <h1>Lorem Ipsum is Simply dummy text of the <br/> Lorem Ipsum is Simply dummy text of the <br/>ipsum has been great indesytry</h1>
                </div>
               </div>
               <div className="w-full justify-center items-center flex  ">
               <a className=" px-1 text-[#94c83d] rounded-[3px] mb-[10px] border-b-2 border-white  ">
              Read More
            </a>
            </div>
          </div>
          <div className="w-[30%] py-7 bg-black rounded-[15px] flex flex-col">
               <div className="w-full justify-center items-center flex mb-[20px] ">
                <div className=" size-[100px] rounded-[50%] bg-[#94c83d] flex justify-center items-center">
                  <BsGift className="text-[50px]"/>
                </div>
               </div>
               <div className="w-full justify-center items-center flex flex-col gap-[5px] text-white">
               <h1 className="text-[20px]">Lorum Ipsum Is</h1>
               <h1 className="text-[20px] mb-[10px]">Employer</h1>
               </div>
               <div className="w-full  py-1   flex justify-center  gap-5 mb-[8px]">
                <div className="w-[90%]   border-t-4 border-white"></div>
               </div>
               <div className="w-full flex justify-center items-center py-3 0 text-white">
                <div className="w-[80%]">
                  <h1>Lorem Ipsum is Simply dummy text of the <br/> Lorem Ipsum is Simply dummy text of the <br/>ipsum has been great indesytry</h1>
                </div>
               </div>
               <div className="w-full justify-center items-center flex  ">
               <a className=" px-1 text-[#94c83d] rounded-[3px] mb-[10px] border-b-2 border-white  ">
              Read More
            </a>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full bg-hero7 bg-no-repeat bg-cover bg-center py-7 flex justify-center flex-col gap-10 items-center">
        <div className="w-full flex justify-center items-center ">
          <div className="w-[15%] h-[100px]">
          <img src="images/logo.png"/>
          </div>
        </div>
        <div className="w-full justify-center items-center flex text-white">
           <div className="w-[80%]">
            <h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
            </h4>
           </div>
        </div>
        <div className="w-full justify-center flex items-center ">
          <div className="w-[70%] flex gap-[5px]">
            <div className="w-[22%] flex gap-2 text-white items-center">
             <BsFillTelephoneOutboundFill className="text-[30px] text-[#94c83d]"/>
             <p>647-901-9134</p>
            </div>
            <div className="w-[22%] flex gap-2 text-white items-center">
             <BiCalculator className="text-[30px] text-[#94c83d]"/>
             <p>1-888-952-6394</p>
            </div>
            <div className="w-[22%] flex gap-2 text-white items-center">
             <IoMail className="text-[30px] text-[#94c83d]"/>
             <p>info@towork.com</p>
            </div>
            <div className="w-[24%] flex gap-2 text-white items-center text-[15px]">
             <LuMapPin className="text-[30px] text-[#94c83d]"/>
             <p>100 Westmore Drive, Unit12 Toronto ON M9V 5C3</p>
            </div>

          </div>
        </div>
        <div className="w-full justify-center flex items-center gap-4 py-4 ">
             <FaFacebook className="text-[40px] text-[#94c83d]"/>
             <FaPixiv className="text-[40px] text-[#94c83d]"/>
        </div>
        <div className="w-full justify-center flex items-center gap-4 py-4 ">
          <div className="w-[50%] flex justify-center text-[18px] text-white ">
       <h3>© 2022 — <span className="text-[#94c83d]">To Works Staffing</span> — All Rights Reserved.</h3>
       </div>
        </div>
           
      </div>
    </>
  );
};

export default page;
