import React from "react";
import {
  AiFillBook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineSend,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footerContainer bg-black text-white flex justify-evenly items-center h-auto min-h-[200px] max-800px:flex-col p-1">
      <div className="flex gap-4 flex-col items-center w-full border-r-4 border-white max-800px:w-[80%] max-800px:border-b-2 max-800px:border-r-0">
        <h1 className=" p-1 text-[21px] font-bold">Heyy! I am ,Nirjus</h1>
        <div className=" p-1">
          <p>Follow Us on.</p>
          <div className=" flex gap-3 m-1">
            <a href={"https://github.com/Nirjus"} className=" hover:text-[#2ab5ff]" target="blank">
              <AiFillGithub size={35} />
            </a>
            <a href={"https://instagram.com/nirjuskarmakar"} className=" hover:text-[#2ab5ff]" target="blank">
              <AiFillInstagram size={35} />
            </a>
            <a
              href={"https://www.linkedin.com/in/nirjus-karmakar-b2bb0b26b/"}
              className=" hover:text-[#2ab5ff]"
              target="blank"
            >
              <AiFillLinkedin size={35} />
            </a>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-5 items-center w-full border-r-4 border-white max-800px:w-[80%] max-800px:border-b-2 max-800px:border-r-0">
        <h1 className=" p-1 text-[21px] font-bold">
          Contact me throw your email
        </h1>

        <form action="" className="flex p-2">
          <input
            type="text"
            name="email"
            id=""
            placeholder="Email.."
            className=" w-[75%] pl-5 p-2 outline-none rounded-l-[50px] text-lg text-white font-semibold bg-gray-800 placeholder:text-white"
            required
          />
          <button
            type="submit"
            className=" bg-green-700 rounded-r-[50px] min-w-[25%] active:bg-green-900"
          >
            <AiOutlineSend className=" m-auto" size={28} />
          </button>
        </form>
      </div>
      <div className=" flex flex-col gap-4 items-center w-full">
        <h1 className="p-1 text-[21px] font-bold">Read Our Blogs</h1>
        <AiFillBook size={35} className=" hover:text-[#2ab5ff]"/>
      </div>
    </div>
  );
};

export default Footer;
