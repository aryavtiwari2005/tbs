const formSubmit = (e) => {
        const form = document.forms['contact-form']
        e.preventDefault();
        var btn = form.submitBtn;
        btn.innerText = 'Submitting...';
        btn.style.pointerEvents = 'none';
        btn.style.cursor = 'not-allowed';
        form.action = 'javascript:void(0)';
        fetch(
          'https://script.google.com/macros/s/AKfycbyBFm9GneL5x5jH65nztnGqjcY2K-j0GecC63jbb9dZe2dlAJyGsjqYiKlrjgaszY9oDw/exec',
          {
            method: 'POST',
            body: new FormData(form),
          },
        )
          .then((res) => res.text())
          .then((data) => {
            btn.innerText = 'Success!';
          });
      };

const Contactus = () => (
    <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We'd love to hear about what you're looking for. Give us a few details below and our team will be in touch shortly.</p>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">If you'd prefer email, reach out to <a href="mailto:info@totalbiz-solutions.com" class="text-secondary">info@totalbiz-solutions.com</a></p>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">You can also connect with us over call at <a href="tel:+919315361829" class="text-secondary">+919315361829</a></p>
            </div>
            <form method="post" action='https://script.google.com/macros/s/AKfycbyBFm9GneL5x5jH65nztnGqjcY2K-j0GecC63jbb9dZe2dlAJyGsjqYiKlrjgaszY9oDw/exec' name="contact-form" onSubmit={formSubmit}>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
                                <input id="phone" name="phone" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button class="flex mx-auto text-white bg-secondary border-0 py-2 px-8 focus:outline-none hover:bg-primary rounded text-lg" name="submitBtn">Submit</button>
                        </div>
                        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a class="text-secondary">info@totalbiz-solutions.com</a>
                            <p class="leading-normal my-5">Office Address - D1-901, The Pranayam, Sector - 82-85, Faridabad
                                <br />HR - India - 121007
                            </p>
                            {/* <span class="inline-flex">
                            <a class="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-4 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a class="ml-4 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a class="ml-4 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                            </a>
                        </span> */}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
);

export default Contactus;