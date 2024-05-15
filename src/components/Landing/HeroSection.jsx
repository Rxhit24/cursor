import heroSection from "../../assets/images/heroSection.jpg";
import InfiniteScroller from "./InfiniteScroll";
import { Link } from "react-router-dom";
const HeroSection = () => {
    return (
        <>
            <div className="h-[calc(100vh-70px)] bg-orange-200 md:py-0 py-10 flex justify-between flex-col">
                <div className="h-[550px] flex flex-col justify-evenly">
                    <div className="mainText px-5 md:px-10">
                        {["WE CREATE", "STUNNING VISUALS", "FOR THE WEB"].map((item, index) => {
                            if (index == 1) {
                                return (
                                    <div
                                        className="text-[11vw] md:text-[9vw] font-bold font-['Bebas_Neue',sans-serif] leading-[85%] flex"
                                        key={index}
                                    >
                                        <div className="w-[12vw] md:w-[11vw] h-[9vw] md:h-[7vw] me-3 relative top-[-0.2vh] flex">
                                            <img
                                                src={heroSection}
                                                className=" object-contain rounded-2xl"
                                            ></img>
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                );
                            }
                            return (
                                <div
                                    className="text-[11vw] md:text-[9vw]  font-bold font-['Bebas_Neue',sans-serif] leading-[85%] "
                                    key={index}
                                >
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                    <div className="bottomText px-5 md:px-10 ">
                        <div className="flex justify-between md:flex-row flex-col md:place-items-center">
                            <span className=" mb-[5vh] md:m-0 ">
                                We Create for Buisness, Techs and Many More
                            </span>
                            <span className="mb-[5vh] md:m-0 cursor-pointer">What Client say's</span>
                            <span>
                                <Link to="/getstarted"><button className="border-2 border-secondary hover:bg-navGradient hover:text-secondary rounded-2xl p-[10px_20px]">
                                    Let's Get Started
                                </button></Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <InfiniteScroller />
                </div>
            </div>
        </>
    );
};

export default HeroSection;
