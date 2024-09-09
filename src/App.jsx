import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero,Values } from "./components";

const App = () => (
  <div className="bg-white w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Stats />
        <Values/>
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        {/* <Billing /> */}
        <CardDeal />
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
