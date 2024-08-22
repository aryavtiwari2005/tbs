import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <a href="/contact">
  <div className={`${styles.flexCenter} w-[180px] h-[180px] rounded-full bg-secondary p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-secondary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-white">Connect</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-white">with us</span>
      </p>
    </div>
  </div>
  </a>
);

export default GetStarted;
