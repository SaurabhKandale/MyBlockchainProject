import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="md:px-16 w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div
        style={{
          width: "200px",
          display: "flex",
          flexDirection: "center",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          paddingLeft: "20px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          className="w-20 cursor-pointer"
          style={{ display: "inline" }}
        />
        <span
          className=""
          style={{ fontSize: "32px", color: "white", fontWeight: "bolder" }}
        >
          ETH_PAY
        </span>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Market
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Exchange
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Tutorials
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Wallets
        </p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        info@eth_pay.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@eth_pay</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
