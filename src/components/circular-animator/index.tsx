import { useEffect, useState } from "react";
import lineProgress from "../../assets/line-progress.svg";
import dots from "../../assets/dots.svg";
import focusLine from "../../assets/focus_line.png";
import FirstFile from "./svgs/first";
import SecondFile from "./svgs/second";
import ThirdFile from "./svgs/third";
import ForthFile from "./svgs/forth";
import FifthFile from "./svgs/fifth";
import SixthFile from "./svgs/sixth";
import Cube from "./Cube";

const CircularAnimator = ({ stage = 1, className = "" }: { stage: number, className?: string }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);

        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 800);

        return () => clearTimeout(timer);
    }, [stage]);

    return (
        <div className={`flex justify-center items-center rounded-full ball p-4 relative ${className}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 149 149"
                fill="none"
            >
                <path
                    d="M75.207 1.15967C94.8438 1.35809 112.631 9.2786 125.678 22.0294"
                    stroke="#2570EB"
                    stroke-width="1.25936"
                    className={`transition-all duration-300 ${
                        stage >= 1 ? "opacity-100" : "opacity-20"
                    }`}
                />
                <path
                    d="M126.746 23.0972C139.544 36.128 147.509 53.9206 147.739 73.5729"
                    stroke="#2570EB"
                    stroke-width="1.25936"
                    className={`transition-all duration-300 ${
                        stage >= 2 ? "opacity-100" : "opacity-20"
                    }`}
                />
                <path
                    d="M147.742 75.0806C147.576 94.7672 139.649 112.603 126.871 125.677"
                    stroke="#5F9BFA"
                    stroke-width="1.25936"
                    className={`transition-all duration-300 ${
                        stage >= 3 ? "opacity-100" : "opacity-20"
                    }`}
                />
                <path
                    d="M125.805 126.747C112.748 139.571 94.908 147.543 75.207 147.742"
                    stroke="#93BBFD"
                    stroke-width="1.25936"
                    className={`transition-all duration-300 ${
                        stage >= 4 ? "opacity-100" : "opacity-20"
                    }`}
                />
                <path
                    d="M73.6955 147.742C53.9945 147.542 36.1554 139.571 23.0977 126.747"
                    stroke="#DAE8FE"
                    stroke-width="2.51872"
                    className={`transition-all duration-300 ${
                        stage >= 5 ? "opacity-100" : "opacity-20"
                    }`}
                />
                <path
                    d="M22.0311 125.677C9.25284 112.603 1.32571 94.767 1.16016 75.0801"
                    stroke="#1F55AF"
                    stroke-width="1.25936"
                    className={`transition-all duration-300 ${
                        stage >= 6 ? "opacity-100" : "opacity-20"
                    }`}
                />
                <path
                    d="M1.16016 73.5691C1.39191 53.9181 9.35674 36.1271 22.1532 23.0972"
                    stroke="#172E54"
                    stroke-width="1.25936"
                    className={`transition-all duration-300 ${
                        stage >= 7 ? "opacity-100" : "opacity-20"
                    }`}
                />
                <path
                    d="M23.2227 22.0295C36.2682 9.27936 54.0544 1.35903 73.6897 1.15967"
                    stroke="#5F9BFA"
                    stroke-width="1.25936"
                    className={`transition-all duration-300 ${
                        stage >= 8 ? "opacity-100" : "opacity-20"
                    }`}
                />
            </svg>
            <img
                src={lineProgress}
                alt="line-progress"
                className="absolute w-full h-full rotate-slowly"
            />
            <img
                src={focusLine}
                alt="focus-line"
                className={`absolute w-[85%] h-[85%] ${
                    isAnimating ? "focus-line-wiggle" : ""
                }`}
            />
            <img src={dots} alt="dots" className="absolute w-[50%] h-[50%]" />
            {stage === 0 ? (
                <Cube className="absolute w-[45%] h-[45%]" />
            ) : stage === 1 ? (
                <FirstFile className="absolute w-[45%] h-[45%]" />
            ) : stage === 2 ? (
                <SecondFile className="absolute w-[45%] h-[45%]" />
            ) : stage === 3 ? (
                <ThirdFile className="absolute w-[45%] h-[45%]" />
            ) : stage === 4 ? (
                <ForthFile className="absolute w-[45%] h-[45%]" />
            ) : stage === 5 ? (
                <FifthFile className="absolute w-[45%] h-[45%]" />
            ) : (
                <SixthFile className="absolute w-[45%] h-[45%]" />
            )}
        </div>
    );
};

export default CircularAnimator;
