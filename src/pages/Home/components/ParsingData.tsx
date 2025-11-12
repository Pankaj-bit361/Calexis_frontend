import AllSvg from "../../../common/AllSvg";
import CircularAnimator from "../../../components/circular-animator";

const ParsingData = () => {

  return (
    <div className="bg-transparent relative text-white h-1/2 md:h-screen w-screen snap-start p-[40px] pt-[100px] md:pt-[100px] lg:pt-[120px] md:p-[100px] lg:p-[120px]  gap-[40px] md:gap-[200px] lg:gap-[250px] overflow-hidden flex flex-col lg:flex-row items-center justify-between lg:max-h-screen">
      <section className="relative z-10 w-full h-fit lg:h-full  flex flex-col justify-top gap-6 lg:gap-20   lg:justify-between">
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex gap-2 items-center">
            <p className="text-[12px] md:text-[16px] lg:text-[18px] nohemi-font leading-[16px] md:leading-[24px]  lg:leading-[28px] tracking-[1.8px] ">
              Raw data, refined.
            </p>
            <AllSvg type="data-scrapper-line" />
          </div>
          <p className="data_scapper_gradient_text3 text-[28px] md:text-[36px] lg:text-[48px] leading-[36px] md:leading-[48px] lg:leading-[60px]">
            Parsing Data Ingestion & Cleaning Engine
          </p>
          <p className="max-w-[100%] md:max-w-[60%] lg:max-w-[50%]  text-[14px] md:text-[16px] leading-5 md:leading-6 font-medium geist-font ">
            Transform chaos into clarity with automated, context-preserving
            cleaning.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:gap-6">
          <div className="text-[12px]  md:text-[14px] lg:text-[16px] pl-4 leading-4 md:leading-5  lg:leading-6 font-normal text-[#C8CACC] geist-font ">
            <li>
              Hybrid cleaning: deterministic rules + AI-assisted refinement
            </li>
            <li>Multilingual OCR (54+ languages, including 22 Indian)</li>
            <li>Artifact removal without losing meaning</li>
            <li>Context-aware text segmentation</li>
            <li>Entity & metadata extraction</li>
            <li>Handles mixed content (tables, forms, paragraphs)</li>
          </div>

          {/* <div className="data_scapper_meter hidden lg:flex w-[360px] relative overflow-hidden">
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
          </div> */}
        </div>
      </section>

      <section className="relative z-10 w-full h-1/2 lg:h-full flex justify-center items-center">
        <CircularAnimator
          stage={2}
          className="w-[70vw] h-[70vw] md:w-[50vh] md:h-[50vh]"
        />
      </section>
    </div>
  );
};

export default ParsingData;
