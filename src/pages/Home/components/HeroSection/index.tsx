import Typewriter from "typewriter-effect";

import avatar3d from "../../../../assets/avatar.png";
import linkedin from "../../../../assets/linkedin.png";
import github from "../../../../assets/github.png";
import medium from "../../../../assets/medium.png";

const HeroSection = () => {
  return (
    <div className="flex px-48 mb-40 mt-40 text-darkBlue items-center justify-center gap-24">
      <div className="flex flex-col ">
        <div className="text-2xl mb-3">
          <Typewriter
            options={{
              strings: ["Hello, I'm", "Halo, perkenalkan saya"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <h2 className="text-5xl font-semibold mb-4">Ari Angga Nugraha</h2>
        <h6 className="text-2xl mb-8 font-semibold">
          Software Engineer at Tokopedia
        </h6>
        <p className="mb-7">
          I shape ideas into compelling user interfaces, seamlessly blending
          code and <br />
          creativity to redefine the digital landscape.
        </p>

        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/nugrahaa878/" target="_blank">
            <img src={linkedin} width={40} alt="linkedin" />
          </a>
          <a href="https://github.com/nugrahaa878" target="_blank">
            <img src={github} width={40} alt="github" />
          </a>
          <a href="https://medium.com/@nugrahaa878" target="_blank">
            <img src={medium} width={40} alt="medium" />
          </a>
        </div>
      </div>

      <img src={avatar3d} width={270} alt="avatar" />
    </div>
  );
};

export default HeroSection;
