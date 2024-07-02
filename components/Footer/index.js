import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">CONTACT</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S GET
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              CONNECTED
            </h1>

            <div className="mt-10">
              email :   
            <a href="sookfun.mah@gmail.com" className="text-blue-500 hover:underline">
              <br></br>sookfun.mah@gmail.com
            </a>
            </div>
            
            <div className="mt-10">
              github :   
            <a href="https://github.com/sookfunmah" className="text-blue-500 hover:underline">
              <br></br>https://github.com/sookfunmah
            </a>
            </div>

            <div className="mt-10">
              linkedin :   
            <a href="https://www.linkedin.com/in/sook-fun-mah/" className="text-blue-500 hover:underline">
              <br></br>https://www.linkedin.com/in/sook-fun-mah/
            </a>
            </div>

          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        <br></br>By Sook Fun
        
      </h1>
    </>
  );
};

export default Footer;
