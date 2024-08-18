import styles from "./style";
import Contactus from "./components/contactus";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const Contact = () => (
    <div className="bg-white w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-white ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Contactus />
            </div>
        </div>

        <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                {/* <Billing /> */}
                {/* <CardDeal /> */}
                {/* <Testimonials /> */}
                {/* <Clients /> */}
                <Footer />
            </div>
        </div>
    </div>
)

export default Contact;