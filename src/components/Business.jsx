import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  // <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
  //   <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-secondary`}>
  //     <img src={icon} alt="star" className="w-[50%] invert h-[50%] object-contain" />
  //   </div>
  //   <div className="flex-1 flex flex-col ml-3">
  //     <h4 className="font-poppins font-semibold text-fontBlack text-[18px] leading-[23.4px] mb-1">
  //       {title}
  //     </h4>
  //     <p className="font-poppins font-normal text-fontBlack text-[16px] leading-[24px]">
  //       {content}
  //     </p>
  //   </div>
  // </div>
  <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-secondary`}>
      <img src={icon} alt="star" className="w-[50%] invert h-[50%] object-contain" />
    </div>
    <div class="flex-grow pt-5">
      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
      <p class="leading-relaxed text-base text-left">{content}</p>
      <a class="mt-3 text-secondary inline-flex items-center">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
);

const Business = () => (
  // <section id="features" className={layout.section}>
  //   <div className={layout.sectionInfo}>
  //     <h2 className={styles.heading2}>
  //       Services     
  //     </h2>
  //     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  //     TotalBiz-Solutions delivers innovative solutions that drive sustained operational excellence. We partner with organizations to unlock their full potential through agile strategies and measurable results.
  //     </p>

  //     <a href="/contact"><Button styles={`mt-10`} /></a>
  //   </div>

  //   <div className={`${layout.sectionImg} flex-col`}>
  //     {features.map((feature, index) => (
  //       <FeatureCard key={feature.id} {...feature} index={index} />
  //     ))}
  //   </div>
  // </section>
  <section class="text-gray-600 body-font pt-0">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">SERVICES</h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">TotalBiz-Solutions delivers innovative solutions that drive sustained operational excellence. We partner with organizations to unlock their full potential through agile strategies and measurable results.</p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-secondary inline-flex"></div>
        </div>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      <a href="/contact"><button class="flex mx-auto mt-16 text-white bg-secondary border-0 py-2 px-8 focus:outline-none rounded text-lg">GET STARTED</button></a>
    </div>
  </section>
);

export default Business;
