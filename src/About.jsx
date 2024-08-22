import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { anand, rakesh } from './assets';

const About = () => (
    <div className="bg-white w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>
        <div className={`bg-white ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-20">
                            <h1 class="text-2xl font-medium title-font mb-4 text-secondary">About Us</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">TotalBiz-Solutions is a results-oriented consultancy dedicated to empowering organizations to achieve their full potential through operational excellence. Our agile approach delivers innovative solutions that drive sustained growth and profitability.
                                We partner with MSMEs and family-owned businesses to optimize operations, enhance quality, and improve efficiency. Our expertise spans a wide range of services, including Six Sigma, Lean Manufacturing, Quality Management Systems, and digital transformation.
                                With a deep understanding of industry challenges, our team of experienced consultants provides tailored solutions to address specific business needs. Our focus on data-driven insights and continuous improvement ensures measurable results and long-term success.
                                <br/><br/>
                                1.⁠ ⁠Customized Six Sigma training and coaching, including Green Belt (GB), Black Belt (BB), and Master Black Belt (MBB) programs, alongside change management and project management support.
                                <br/><br/>
                                2.⁠ ⁠Business Operations Excellence consulting focused on: - Accelerating revenue growth - Enhancing EBITA margins - Development of Value Stream Mapping (VSM) to improve delivery and reduce WIP.
                                <br/><br/>
                                3.⁠ ⁠Implementation of Business Analytics and Data-Driven Systems, ensuring seamless consulting support throughout the control and handover phases.
                                <br/><br/>Let us help you unlock your organization's full potential. Contact us today to schedule a consultation.
                            </p>
                        </div>
                        <div class="flex flex-col text-center w-full mb-20">
                            <h1 class="text-2xl font-medium title-font mb-4 text-secondary">Management Team</h1>
                        </div>
                        <div class="flex flex-wrap -m-4">
                            <div class="p-4 lg:w-1/2 md:w-1/2">
                                <div class="h-full flex flex-col items-center text-center">
                                    <img alt="team" class="flex-shrink-0 rounded-full w-full h-85 object-cover object-center mb-4" src={anand} />
                                    <div class="w-full">
                                        <h2 class="title-font font-medium text-lg text-gray-900">Anand Jha</h2>
                                        <h3 class="text-gray-500 mb-3">Director (Strategy and Operation)</h3>
                                        <p class="mb-4 text-justify">Anand is a highly accomplished professional with degrees in engineering and management, further enriched by certifications in BB/MBB-Six Sigma and PMP. With a remarkable three decades of leadership experience, he excels in providing strategic direction, shaping organizational frameworks, and offering visionary leadership to elevate business excellence in both manufacturing and service sectors. Anand possesses extensive expertise across diverse industries, encompassing appliances, telecommunications, engineering, industrial goods, manufacturing, information technology, and consultancy.. He is renowned for successfully executing enterprise-wide business transformation initiatives using methodologies such as Six Sigma, TPM, Lean Six Sigma, Balance score card, MTM Study and advanced statistical techniques. Additionally, he has leveraged IT solutions, including ERP, business analytics, and digital transformation, to optimize costs and enhance profitability.</p>
                                        <span class="inline-flex">
                                            <a class="text-gray-500">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="p-4 lg:w-1/2 md:w-1/2">
                                <div class="h-full flex flex-col items-center text-center">
                                    <img alt="team" class="flex-shrink-0 rounded-full w-full h-45 object-cover mb-4" src={rakesh} />
                                    <div class="w-full">
                                        <h2 class="title-font font-medium text-lg text-gray-900">Rakesh K Varma</h2>
                                        <h3 class="text-gray-500 mb-3">Principal Consultant</h3>
                                        <p class="mb-4 text-justify">Rakesh K Varma is a seasoned Principal Consultant specializing in Automation and BI/Analytics. With over 35 years of experience, he has a proven track record in IT Infrastructure Management, IT Managed Services, Service Delivery, and General Management. Rakesh has a deep understanding of both strategic planning and operational execution. His expertise extends to IT manufacturing and automation projects, where he has successfully implemented solutions using Visual Basic, Advanced Excel, scripting, Macros, Automation Anywhere, and other office productivity tools. He has also conducted internal training sessions to foster automation skills within organizations.</p>
                                        <span class="inline-flex">
                                            <a class="text-gray-500">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a class="ml-2 text-gray-500">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>

    </div>
);
export default About;