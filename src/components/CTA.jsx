import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-dimGrey rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Unlock your business potential !</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Schedule a free strategy session click on Get Started button. Alternatively you can contact us on - <a href="mailto:info@totalbiz-solutions.com" class="text-sky-500">Mail us</a>
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="/contact"><Button /></a>
    </div>
  </section>
);

export default CTA;
