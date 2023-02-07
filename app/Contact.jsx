import { Call, Instagram, Sms, Whatsapp } from "iconsax-react";
import React from "react";

function Contact() {
  return (
    <div
      id="Contact"
      className="w-full min-h-screen bg-neutral-900 flex flex-col px-5 md:p-0 items-center justify-center text-center max-w-[1240px] mx-auto"
    >
      <div>
        <p className="text-neutral-100 my-10 lg:text-4xl text-2xl font-RubikbBold">
          Contact
        </p>
      </div>
      <div className="w-full max-w-[600px]">
        <ul className="w-full flex space-y-5 flex-col ">
          <li className="w-full flex group justify-between items-center p-4 rounded-xl bg-neutral-700 text-white hover:shadow-xl duration-300">
            <div className="flex items-center justify-center space-x-2 group-hover:text-green-400 duration-300">
              <Whatsapp size="32" variant="Bold" />
              <h4>WhatsApp</h4>
            </div>
            <p>+989109242117</p>
          </li>
          <li className="w-full flex group justify-between items-center p-4 rounded-xl bg-neutral-700 text-white hover:shadow-xl duration-300">
            <div className="flex items-center justify-center space-x-2 duration-300">
              <Instagram
                size="32"
                variant="Bold"
                className="group-hover:text-white"
              />
              <h4 className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 ">
                INSTAGRAM
              </h4>
            </div>
            <p>@_shayanrz</p>
          </li>
          <li className="w-full flex group justify-between items-center p-4 rounded-xl bg-neutral-700 text-white hover:shadow-xl duration-300">
            <div className="flex items-center justify-center space-x-2 group-hover:text-red-400 duration-300">
              <Sms size="32" variant="Bold" />
              <h4>EMAIL</h4>
            </div>
            <p  className="text-sm">shayanrezvani5@gmail.com</p>
          </li>
          <li className="w-full flex group justify-between items-center p-4 rounded-xl bg-neutral-700 text-white hover:shadow-xl duration-300">
            <div className="flex items-center justify-center space-x-2 group-hover:text-green-500 duration-300">
              <Call size="32" variant="Bold" />
              <h4>PHONE</h4>
            </div>
            <p>+989105293253</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
