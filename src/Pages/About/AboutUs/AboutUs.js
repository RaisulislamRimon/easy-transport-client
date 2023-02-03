import React, { useEffect } from "react";
import Team from "../Team/Team";
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Team />
      <h1 className="text-center font-serif font-bold text-4xl mt-10">
        ..... About us .....
      </h1>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div >
          <div data-aos="fade-right" data-aos-duration='1000' className="card w-96 h-96 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  p-5 ml-12 shadow-xl mt-16">
            <div className="avatar ">
              <div className="w-48 h-48 d-flex justify-center align-items  rounded-full mt-5  ml-20  ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.ibb.co/mzrJ3Jw/1670482266862.jpg"
                  alt=""
                  className="border-5"
                />
              </div>
            </div>
            <div className="card-body text-black font-bold text-center -mt-5">
              <p className="text-2xl ">Chamok Barmon</p>
              <div className="text-1xl">
                <Typewriter
                  options={{
                    strings: [
                      "Programmer",
                      "Font-end-Developer",
                      "MERN Stack Developer",
                      "Web Developer"
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
                <div className="mt-1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="mt-2 text-2xl flex gap-2 justify-center ">
                  <i className="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-github"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration='1000' >
          <div className="card w-96 h-96 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-5 ml-12 shadow-xl mt-16">
            <div className="avatar ">
              <div className="w-48 h-48 rounded-full mt-5 d-flex justify-center align-items ml-20  ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.ibb.co/30X80r2/320690960-681327823404895-7784678004093660911-n.png"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-black font-bold text-center -mt-5">
              <p className="text-2xl ">Tasfia Jahan Tania</p>
              <div className="text-1xl">
                <Typewriter
                  options={{
                    strings: [
                      "Font-end-Developer",
                      "Web Developer",
                      "Programmer",
                      "MERN Stack Developer"
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
                <div className="mt-1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="mt-2 text-2xl flex gap-2 justify-center ">
                  <i className="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-github"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up-left" data-aos-duration='1000' >
          <div className="card w-96 h-96 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-5 ml-12 shadow-xl mt-16">
            <div className="avatar ">
              <div className="w-48 h-48 rounded-full mt-5 d-flex justify-center align-items ml-20  ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.ibb.co/1vy72dm/RIMON.jpg" alt="" />
              </div>
            </div>
            <div className="card-body text-black font-bold text-center -mt-5">
              <p className="text-2xl ">Raisul Islam Rimon</p>
              <div className="text-1xl">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Programmer",
                      "MERN Stack Developer",
                      "Font-end-Developer"
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
                <div className="mt-1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="mt-2 text-2xl flex gap-2 justify-center ">
                  <i className="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-github"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration='1000'>
          <div className="card w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 via-red-500 p-5 ml-12 shadow-xl mt-16">
            <div className="avatar ">
              <div className="w-48 h-48 rounded-full mt-5 d-flex justify-center align-items ml-20  ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/120351632_2979715158924038_7100075884627000207_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH-M-VdVCgQXgH914inOCICh9jI18t6D-iH2MjXy3oP6AzGner3pMiIMgr66-4D6GWfQK02sBsfW5bsAjeOLpfM&_nc_ohc=urbNxtRN_fcAX_glz0T&_nc_ht=scontent.fdac138-1.fna&oh=00_AfDkccd-yFJYaHEPt7ThiCcdLMlozpRCs4cwy3roKddYAg&oe=63EF1D68"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-black font-bold text-center -mt-5">
              <p className="text-2xl ">Md Asik</p>
              <div className="text-1xl">
                <Typewriter
                  options={{
                    strings: [
                      "MERN Stack Developer",
                      "Programmer",
                      "Web Developer",
                      "Font-end-Developer"
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
                <div className="mt-1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="mt-2 text-2xl flex gap-2 justify-center ">
                  <i className="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-github"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-down" data-aos-duration='2000'>
          <div className="card w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 via-red-500 p-5 ml-12 shadow-xl mt-16">
            <div className="avatar ">
              <div className="w-48 h-48 rounded-full mt-5 d-flex justify-center align-items ml-20  ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://scontent.fdac138-1.fna.fbcdn.net/v/t1.6435-9/56795701_581119252400678_2014714320411164672_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFvMn1f07BhbpXu3YtpNa1CaXqS6oEPZ2ppepLqgQ9narBJi1uX0MCCphxY-2ZSF_tpbXNFJwFm0_hsk96hcRrI&_nc_ohc=3kHDpSyLUbwAX98HrHl&tn=kUhz14FdmQsO1GqT&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCckrlUl0PzaM8TKVvDAjbBI6mDqvci_X9o13WsnWUvtg&oe=63EF1C28"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-black font-bold text-center -mt-5">
              <p className="text-2xl ">Md Alamin</p>
              <div className="text-1xl">
                <Typewriter
                  options={{
                    strings: [
                      "MERN Stack Developer",
                      "Web Developer",
                      "Programmer",
                      "Font-end-Developer"
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
                <div className="mt-1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="mt-2 text-2xl flex gap-2 justify-center ">
                  <i className="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-github"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration='1000'>
          <div className="card w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 via-red-500 p-5 ml-12 shadow-xl mt-16">
            <div className="avatar ">
              <div className="w-48 h-48 rounded-full mt-5 d-flex justify-center align-items ml-20  ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.postimg.cc/d3cJ2K62/IMG-20221208-115127-removebg-removebg-preview.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body text-black font-bold text-center -mt-5">
              <p className="text-2xl ">Robin Mahmud</p>
              <div className="text-1xl">
                <Typewriter
                  options={{
                    strings: [
                      "MERN Stack Developer",
                      "Web Developer",
                      "Programmer"
                    ],
                    autoStart: true,
                    loop: true
                  }}
                />
                <div className="mt-1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="mt-2 text-2xl flex gap-2 justify-center ">
                  <i className="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-github"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
