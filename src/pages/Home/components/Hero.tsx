import heroBall from "../../../assets/hero_ball.svg";

const Hero = () => {
  return (
    <section className="h-screen w-screen flex flex-col cal-hero-bg text-white text-4xl snap-start">
      <div className="flex flex-col gap-4 p-[120px] pb-20 items-center">
        <section className="hero-container-1 flex flex-col w-[65%] justify-center items-center gap-3">
          <h1 className="text-[64px] font-semibold leading-[72px] text-center nohemi-font">
            From raw data to refined intelligence at scale.
          </h1>

          <p className=" max-w-[70%] text-center text-[#C8CACC] text-[16px] leading-6 font-medium geist-font ">
            Calaxis is the fully integrated AI factory, automating every stage
            from data collection to model deployment.
          </p>
        </section>

        <section className="flex items-center justify-center">
          <img className="max-w-[80%]" src={heroBall} alt="hero" />
        </section>
      </div>
    </section>
  );
};

export default Hero;
