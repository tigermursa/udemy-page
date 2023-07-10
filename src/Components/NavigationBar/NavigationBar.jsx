import React from "react";
import "./Navigationbar.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { BsCircle, BsThreeDotsVertical, BsChevronDown } from "react-icons/bs";
import { FaShare } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-xl sh">
        <div className="flex-1">
          <img
            className="w-24 ms-4"
            src="/udemy-white new-preview.png"
            alt=""
          />
          <span className="me-3 ms-3">| </span>
          <h2 className="font-semibold text-white ms-6 hidden md:block">
            Python Coding Projects Build a Web App Directory Discovery
          </h2>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle"></label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost">
              <div className="rounded-full flex items-center">
                <BsCircle className="text-4xl text-gray-600" />
                <Tooltip
                  html={
                    <div style={{ width: "300px", height: "50px" }}>
                      <p className="text-black  normal-case flex  justify-start ms-5 font-bold text-lg">
                        1 of 22
                      </p>
                    </div>
                  }
                  position="top"
                  arrow={true}
                  theme="light"
                  trigger="click"
                  arrowSize="big"
                >
                  <p className="text-white text-xs ms-3 normal-case flex items-center gap-2">
                    Your progress{" "}
                    <BsChevronDown className="font-extrabold text-xs" />
                  </p>
                </Tooltip>
              </div>
            </label>
          </div>
          <div className="flex items-center  justify-center ">
            <button className="normal-case text-white btn btn-outline border-white rounded-none hover:border-white hover:bg-gray-700 hover:text-white ">
              Share <FaShare />
            </button>
            <button className="text-white btn btn-outline p-0 w-10 hidden md:block border-white rounded-none hover:border-white hover:bg-gray-700 hover:text-white ms-2 me-3">
              <BsThreeDotsVertical className="ms-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
