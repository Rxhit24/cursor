import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    const [menuShow, setMenuShow] = useState(false);
    console.log(menuShow);
    return (
        <>
            <div className="h-[70px]">
                <div className="flex justify-between align-middle px-5 md:px-10 h-[70px] fixed top-0 w-full z-50 backdrop-blur-lg">
                    <div className="flex place-items-center cursor-pointer">
                        <span>3 Dot Cursor</span>
                    </div>
                    <div className=" place-items-center md:flex hidden">
                        <ul className="flex p-0 font-[Ubuntu_Sans]">
                            <Link to="/">
                                <li className="p-[7px_15px] me-1 rounded-[10px] cursor-pointer text-secondary hover:shadow-md  hover:bg-navGradient hover:text-secondary ">
                                    Home
                                </li>
                            </Link>
                            <Link to="/contact">
                                {" "}
                                <li className="p-[7px_15px] me-1 rounded-[10px] cursor-pointer text-secondary hover:shadow-md  hover:bg-navGradient hover:text-secondary ">
                                    Contact
                                </li>
                            </Link>

                            <Link to="/about">
                                <li className="p-[7px_15px] me-1 rounded-[10px] cursor-pointer text-secondary hover:shadow-md  hover:bg-navGradient hover:text-secondary ">
                                    About us
                                </li>
                            </Link>
                            <Link to="/works">
                                {" "}
                                <li className="p-[7px_15px] ms-32 rounded-[10px] cursor-pointer text-secondary hover:shadow-md  hover:bg-navGradient hover:text-secondary">
                                    Our Work
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="md:hidden flex place-items-center">
                        <div className="">
                            <button
                                onClick={() => {
                                    setMenuShow(!menuShow);
                                }}
                            >
                                <i className="bx bx-menu text-3xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
