import ContactForm from "./contactForm";

const Contact = ({ getInTouch }) => {
    return (
        <section ref={getInTouch} className="py-32">
            <div className="max-w-screen-xl mx-auto px-3 md:px-10 ">
                <div className="grid md:grid-cols-8  bg-white shadow-xl rounded-3xl">
                    <div className="md:col-span-5 px-5 md:px-24 pt-20 pb-10 relative">

                        {/* icon */}
                        <div className="absolute -bottom-5 -left-20 animated-logo">
                            <img src="../../../../public/assets/icons/icons-14.png" alt="" />
                        </div>
                        {/* icon */}


                        {/* icon */}
                        <div className="absolute -top-10 left-20 animated-logo">
                            <img src="../../../../public/assets/icons/icons-7.png" alt="" />
                        </div>
                        {/* icon */}

                        <div className="lg:pr-16">
                            <h2><span className="text-4xl font-bold mr-2">Get in</span> <span className="hello-there">Touch</span></h2>
                            <p className="get-in-touch-text mt-5 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada vitae ligula vel iaculis. Nulla et diam libero. Donec varius sem nisi, eu varius lacus ornare vel. Etiam rhoncus erat nec metus tincidunt convallis. Integer euismod commodo magna non ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla nec est non mauris dictum tristique. In hac habitasse platea dictumst.</p>

                            <ContactForm />

                            <section className="flex flex-wrap justify-between items-center gap-5 md:gap-0 mt-16">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M13.1467 0.591553V2.16912C14.707 2.16912 16.1688 2.56351 17.5321 3.3523C18.8296 4.12465 19.8644 5.15993 20.6363 6.45814C21.4247 7.82208 21.8189 9.28461 21.8189 10.8457H23.3957C23.3957 8.98882 22.9276 7.26335 21.9914 5.66935C21.088 4.12465 19.8644 2.90039 18.3204 1.99657C16.7273 1.05989 15.0027 0.591553 13.1467 0.591553ZM4.99184 2.95791C4.54837 2.95791 4.16239 3.09759 3.8339 3.37695L1.29629 5.96515L1.3702 5.91585C0.959584 6.26094 0.688577 6.6882 0.55718 7.19762C0.442207 7.70704 0.475056 8.20003 0.655728 8.67659C1.11562 9.95837 1.73154 11.273 2.5035 12.6205C3.58753 14.4774 4.87686 16.1454 6.37151 17.6244C8.76951 20.04 11.7506 21.9462 15.3147 23.3431H15.3394C15.8157 23.5074 16.292 23.5402 16.7683 23.4416C17.2611 23.3431 17.6963 23.1294 18.0741 22.8008L20.5624 20.3112C20.8909 19.9825 21.0552 19.5799 21.0552 19.1033C21.0552 18.6103 20.8909 18.1995 20.5624 17.8709L17.335 14.6171C17.0065 14.2885 16.5959 14.1241 16.1031 14.1241C15.6104 14.1241 15.1998 14.2885 14.8713 14.6171L13.3191 16.1947C12.0709 15.6031 10.9868 14.8718 10.0671 14.0009C9.14728 13.1135 8.41638 12.0371 7.87437 10.7718L9.45113 9.19423C9.79605 8.83271 9.96851 8.40545 9.96851 7.91246C9.96851 7.40303 9.77141 6.99221 9.37722 6.67998L9.45113 6.75393L6.14978 3.37695C5.82128 3.09759 5.4353 2.95791 4.99184 2.95791ZM13.1467 3.74669V5.32426C14.1486 5.32426 15.0684 5.57075 15.906 6.06374C16.7601 6.55673 17.4335 7.23049 17.9263 8.085C18.419 8.92309 18.6654 9.84334 18.6654 10.8457H20.2421C20.2421 9.56397 19.9219 8.37258 19.2813 7.27157C18.6407 6.20342 17.7866 5.34891 16.719 4.70802C15.6186 4.06713 14.4278 3.74669 13.1467 3.74669ZM4.99184 4.53547C5.04111 4.53547 5.0986 4.56012 5.1643 4.60942L8.39174 7.91246C8.40817 7.97819 8.39174 8.0357 8.34247 8.085L6.00195 10.4021L6.17441 10.895L6.49469 11.5852C6.75749 12.144 7.06134 12.6862 7.40626 13.2121C7.88258 13.9516 8.40817 14.5843 8.98303 15.1101C9.75499 15.866 10.683 16.5562 11.767 17.1807C12.309 17.4929 12.7689 17.723 13.1467 17.8709L13.6394 18.0927L16.0292 15.7017C16.0621 15.6688 16.0867 15.6524 16.1031 15.6524C16.1195 15.6524 16.1442 15.6688 16.177 15.7017L19.503 19.0294C19.5359 19.0623 19.5523 19.0869 19.5523 19.1033C19.5523 19.1033 19.5359 19.1198 19.503 19.1526L17.0393 21.5929C16.678 21.9052 16.2838 21.9873 15.8567 21.8394C12.5061 20.5412 9.71393 18.7665 7.48017 16.5151C6.1005 15.1348 4.89329 13.5654 3.85854 11.8071C3.11943 10.5417 2.54456 9.31748 2.13395 8.1343V8.10965C2.06825 7.96176 2.06004 7.78921 2.10931 7.59201C2.15858 7.37838 2.24892 7.21405 2.38032 7.09902L4.81938 4.60942C4.86865 4.56012 4.92614 4.53547 4.99184 4.53547ZM13.1467 6.90183V8.4794C13.8037 8.4794 14.3621 8.70946 14.822 9.16958C15.2819 9.62971 15.5118 10.1884 15.5118 10.8457H17.0886C17.0886 10.1391 16.9079 9.48181 16.5466 8.87379C16.2017 8.26577 15.7254 7.78921 15.1176 7.44412C14.5099 7.08259 13.8529 6.90183 13.1467 6.90183Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm">PHONE</p>
                                        <p className="text-xs contact-info-text">03 5432 1234</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M13.1467 0.591553V2.16912C14.707 2.16912 16.1688 2.56351 17.5321 3.3523C18.8296 4.12465 19.8644 5.15993 20.6363 6.45814C21.4247 7.82208 21.8189 9.28461 21.8189 10.8457H23.3957C23.3957 8.98882 22.9276 7.26335 21.9914 5.66935C21.088 4.12465 19.8644 2.90039 18.3204 1.99657C16.7273 1.05989 15.0027 0.591553 13.1467 0.591553ZM4.99184 2.95791C4.54837 2.95791 4.16239 3.09759 3.8339 3.37695L1.29629 5.96515L1.3702 5.91585C0.959584 6.26094 0.688577 6.6882 0.55718 7.19762C0.442207 7.70704 0.475056 8.20003 0.655728 8.67659C1.11562 9.95837 1.73154 11.273 2.5035 12.6205C3.58753 14.4774 4.87686 16.1454 6.37151 17.6244C8.76951 20.04 11.7506 21.9462 15.3147 23.3431H15.3394C15.8157 23.5074 16.292 23.5402 16.7683 23.4416C17.2611 23.3431 17.6963 23.1294 18.0741 22.8008L20.5624 20.3112C20.8909 19.9825 21.0552 19.5799 21.0552 19.1033C21.0552 18.6103 20.8909 18.1995 20.5624 17.8709L17.335 14.6171C17.0065 14.2885 16.5959 14.1241 16.1031 14.1241C15.6104 14.1241 15.1998 14.2885 14.8713 14.6171L13.3191 16.1947C12.0709 15.6031 10.9868 14.8718 10.0671 14.0009C9.14728 13.1135 8.41638 12.0371 7.87437 10.7718L9.45113 9.19423C9.79605 8.83271 9.96851 8.40545 9.96851 7.91246C9.96851 7.40303 9.77141 6.99221 9.37722 6.67998L9.45113 6.75393L6.14978 3.37695C5.82128 3.09759 5.4353 2.95791 4.99184 2.95791ZM13.1467 3.74669V5.32426C14.1486 5.32426 15.0684 5.57075 15.906 6.06374C16.7601 6.55673 17.4335 7.23049 17.9263 8.085C18.419 8.92309 18.6654 9.84334 18.6654 10.8457H20.2421C20.2421 9.56397 19.9219 8.37258 19.2813 7.27157C18.6407 6.20342 17.7866 5.34891 16.719 4.70802C15.6186 4.06713 14.4278 3.74669 13.1467 3.74669ZM4.99184 4.53547C5.04111 4.53547 5.0986 4.56012 5.1643 4.60942L8.39174 7.91246C8.40817 7.97819 8.39174 8.0357 8.34247 8.085L6.00195 10.4021L6.17441 10.895L6.49469 11.5852C6.75749 12.144 7.06134 12.6862 7.40626 13.2121C7.88258 13.9516 8.40817 14.5843 8.98303 15.1101C9.75499 15.866 10.683 16.5562 11.767 17.1807C12.309 17.4929 12.7689 17.723 13.1467 17.8709L13.6394 18.0927L16.0292 15.7017C16.0621 15.6688 16.0867 15.6524 16.1031 15.6524C16.1195 15.6524 16.1442 15.6688 16.177 15.7017L19.503 19.0294C19.5359 19.0623 19.5523 19.0869 19.5523 19.1033C19.5523 19.1033 19.5359 19.1198 19.503 19.1526L17.0393 21.5929C16.678 21.9052 16.2838 21.9873 15.8567 21.8394C12.5061 20.5412 9.71393 18.7665 7.48017 16.5151C6.1005 15.1348 4.89329 13.5654 3.85854 11.8071C3.11943 10.5417 2.54456 9.31748 2.13395 8.1343V8.10965C2.06825 7.96176 2.06004 7.78921 2.10931 7.59201C2.15858 7.37838 2.24892 7.21405 2.38032 7.09902L4.81938 4.60942C4.86865 4.56012 4.92614 4.53547 4.99184 4.53547ZM13.1467 6.90183V8.4794C13.8037 8.4794 14.3621 8.70946 14.822 9.16958C15.2819 9.62971 15.5118 10.1884 15.5118 10.8457H17.0886C17.0886 10.1391 16.9079 9.48181 16.5466 8.87379C16.2017 8.26577 15.7254 7.78921 15.1176 7.44412C14.5099 7.08259 13.8529 6.90183 13.1467 6.90183Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm">FAX</p>
                                        <p className="text-xs contact-info-text">03 5432 1234</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M7.374 2.3916V4.00418L2.29834 7.30865V21.0024H22.601V7.30865L17.5253 4.00418V2.3916H7.374ZM9.06589 4.08349H15.8334V10.5867L12.4497 12.7808L9.06589 10.5867V4.08349ZM9.91184 5.77538V7.46726H14.9875V5.77538H9.91184ZM7.374 6.0133V9.47638L4.70399 7.75806L7.374 6.0133ZM17.5253 6.0133L20.1953 7.75806L17.5253 9.47638V6.0133ZM9.91184 8.31321V10.0051H14.9875V8.31321H9.91184ZM3.99023 9.31777L12.4497 14.79L20.9091 9.31777V19.3105H3.99023V9.31777Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm">EMAIL</p>
                                        <p className="text-xs contact-info-text">info@marcc.com.au</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="md:col-span-3 px-5 py-20 bg-slate-100 rounded-3xl relative">
                        <div className="lg:-ml-40 ">
                            <iframe className="w-full lg:pr-20" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=431&amp;height=556&amp;hl=en&amp;q=Dhaka%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>
                        </div>

                        {/* icon */}
                        <div className="absolute top-44 -right-28 animated-logo">
                            <img src="../../../../public/assets/icons/icons-2.png" alt="" />
                        </div>
                        {/* icon */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact