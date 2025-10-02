import AllSvg from "../../../common/AllSvg";

const Utilities = () => {
  return (
    <div className="bg-data-scrapper relative text-white h-screen w-screen snap-start p-[80px] pt-[120px] gap-[60px] overflow-hidden flex flex-col items-center justify-center">
      <section className="relative z-10 flex flex-col gap-3 justify-between">
        <div className="flex gap-2 justify-center items-center">
          <AllSvg type="utilities-line-left" />
          <h1 className="text-[18px] font-normal tracking-[1.8px]  leading-[28px] text-center nohemi-font">
            Utilities
          </h1>
          <AllSvg type="utilities-line-right" />
        </div>
        <h1 className="text-[48px] font-medium leading-[60px] text-center nohemi-font">
          One Platform. Infinite{" "}
          <span className="data_scapper_gradient_text">Possibilities</span>{" "}
        </h1>
        <p className="text-[16px] font-normal leading-6 text-center geist-font text-[#C8CACC]">
          Calaxis adapts to every user type whether you are learning, building,
          or scaling.
        </p>
      </section>
      <section className="relative z-10 w-full h-full flex gap-6">
        <div className=" ulitity_card_bg  w-full rounded-[12px] py-[48px] px-[32px] flex flex-col justify-between  gap-[10px]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[18px] font-normal leading-[28px]  nohemi-font text-white">
              Classroom curiosity to AI reality.
            </p>
            <p className="text-[64px] font-normal leading-[72px] tracking-[0.64px] geist-font data_scapper_gradient_text">
              Students
            </p>
            <p className="text-[16px] font-normal leading-6 geist-font text-[#C8CACC]">
              Research with Freedom
            </p>
          </div>
          <div>
            <p className="text-[16px] font-normal leading-6 geist-font text-[#C8CACC] ">
              With{" "}
              <span className="font-medium text-white">
                UNILabs powered by Calaxis
              </span>
              , students can design and train their own local LLMs. Perfect for
              research projects, thesis work, or learning advanced AI workflows.
            </p>
          </div>
        </div>
        <div className=" ulitity_card_bg2  w-full rounded-[12px] py-[48px] px-[32px] flex flex-col justify-between  gap-[10px]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[18px] font-normal leading-[28px]  nohemi-font text-white">
              Build smarter, launch faster.{" "}
            </p>
            <p className="text-[64px] font-normal leading-[72px] tracking-[0.64px] geist-font data_scapper_gradient_text">
              Startups
            </p>
            <p className="text-[16px] font-normal leading-6 geist-font text-[#C8CACC]">
              Innovation at Speed{" "}
            </p>
          </div>
          <div>
            <p className="text-[16px] font-normal leading-6 geist-font text-[#C8CACC] ">
              Calaxis empowers startups to create modular LLMs tailored to their
              unique use cases from industry-specific assistants to
              product-focused AI copilots.
            </p>
          </div>
        </div>

        <div className=" ulitity_card_bg w-full rounded-[12px] py-[48px] px-[32px] flex flex-col justify-between  gap-[10px]">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[18px] font-normal leading-[28px]  nohemi-font text-white">
              Your AI. Your edge.{" "}
            </p>
            <p className="text-[64px] font-normal leading-[72px] tracking-[0.64px] geist-font data_scapper_gradient_text">
              Enterprises
            </p>
            <p className="text-[16px] font-normal leading-6 geist-font text-[#C8CACC]">
              Scale with Sovereignty{" "}
            </p>
          </div>
          <div>
            <p className="text-[16px] font-normal leading-6 geist-font text-[#C8CACC] ">
              For large organizations, Calaxis provides a sovereign, end-to-end
              AI factory. Build, fine-tune, and scale enterprise-grade LLMs
              based on your proprietary data and workflows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Utilities;
