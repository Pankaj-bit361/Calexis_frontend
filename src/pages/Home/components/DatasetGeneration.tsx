import { useState, useEffect } from "react";
import AllSvg from "../../../common/AllSvg";
import CircularAnimator from "../../../components/circular-animator";

const DatasetGeneration = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const segments = 12;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          setTimeout(() => {
            setIsComplete(false);
            setProgress(0);
          }, 800);
          return 100;
        }
        return prev + 0.8;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-transparent relative text-white h-screen w-screen snap-start p-[40px] pt-[100px] md:pt-[100px] lg:pt-[120px] p-[120px] md:p-[100px] lg:p-[120px] gap-[250px] overflow-hidden flex flex-col lg:flex-row items-center justify-between">
      <section className="relative z-10 w-full h-1/2 lg:h-full flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <p className="text-[14px] md:text-[16px] lg:text-[18px] nohemi-font leading-[28px] tracking-[1.8px] ">
              From facts to training fuel
            </p>
            <AllSvg type="data-scrapper-line" />
          </div>
          <p className="data_scapper_gradient_text text-[32px] md:text-[36px] lg:text-[48px] leading-[40px] md:leading-[48px] lg:leading-[60px]">
            Dataset Generation
          </p>
          <p className="max-w-[60%]  text-[14px] md:text-[16px] leading-5 md:leading-6 font-medium geist-font ">
            AI turns structured chunks into instruction-following datasets.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-[14px] md:text-[16px] pl-4 leading-5 md:leading-6 font-normal text-[#C8CACC] geist-font ">
            <li>Generates context → instruction → output triplets</li>
            <li>Expert-curated “golden” seed data for accuracy</li>
            <li>Auto-scales dataset creation without human bottlenecks</li>
          </div>

          <div className="data_scapper_meter w-[360px] flex hidden lg:flex-1 relative overflow-hidden">
            <div
              className={`absolute left-0 top-0 bottom-0 transition-all duration-300 ${
                isComplete
                  ? "bg-blue-500"
                  : "bg-gradient-to-r from-gray-400 to-gray-300"
              }`}
              style={{
                width: `${progress * 1.125}%`,
                opacity: isComplete ? 0.9 : 0.6,
              }}
            />

            <div className="absolute inset-0 flex py-3">
              {Array.from({ length: segments - 1 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 border-r border-white/90"
                  style={{ marginRight: i === segments - 2 ? "20px" : "1px" }}
                />
              ))}
            </div>

            {isComplete && (
              <div className="absolute inset-0 bg-blue-400/30 animate-pulse" />
            )}
          </div>
        </div>
      </section>

      <section className="relative z-10  w-full h-1/2 lg:h-full flex justify-center items-center ">
        <CircularAnimator
          stage={4}
          className="w-[70vw] h-[70vw] md:w-[50vh] md:h-[50vh]"
        />
      </section>
    </div>
  );
};

export default DatasetGeneration;
