import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faSnowflake, faDna, faClipboardList, faHospital, faSync } from '@fortawesome/free-solid-svg-icons';
import backgroundImg from "../images/image2.jpeg";
import testimonialImage1 from "../images/image1.jpeg"; // Import your testimonial image
import testimonialImage2 from "../images/image2.jpeg"; // Import your testimonial image
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const icons = {
        ivf: <FontAwesomeIcon icon={faBaby} />,
        eggFreezing: <FontAwesomeIcon icon={faSnowflake} />,
        geneticTesting: <FontAwesomeIcon icon={faDna} />,
        consultation: <FontAwesomeIcon icon={faClipboardList} />,
        treatment: <FontAwesomeIcon icon={faHospital} />,
        followUp: <FontAwesomeIcon icon={faSync} />,
    };

    return (
        <div>
            <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: `url(${backgroundImg})`, width: '100%' }}>
                <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
                    <h1 className="text-white text-4xl  text-center font-bold mb-4">Welcome to Fertitera</h1>
                    <p className="text-white text-lg max-w-xl text-center">Fertitera is dedicated to helping you achieve your dreams of starting a family with personalized and compassionate care.</p>
                    <Link to="#services" className="mt-8 bg-teal-500 text-white px-6 py-3 rounded-full">Explore Our Services</Link>
                </div>
            </div>

            <Element name="about">
                <section className="my-16 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-teal-600">What We Do</h2>
                    <div className="max-w-4xl mx-auto text-gray-700">
                        <p className="mb-4">At Fertitera, we provide state-of-the-art fertility treatments and services. Our experienced team is committed to offering personalized care and support throughout your fertility journey.</p>
                        <p>We utilize the latest technologies and methods to ensure the highest chances of success, tailored specifically to your needs.</p>
                    </div>
                </section>
            </Element>

            <Element name="services">
                <section className="my-16">
                    <h2 className="text-4xl font-bold mb-8 text-teal-600 text-center">Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <span className="text-6xl text-center block mb-4">{icons.ivf}</span>
                            <h3 className="text-2xl text-center font-bold mb-2 text-teal-600">In Vitro Fertilization (IVF)</h3>
                            <p className="text-gray-700">Our IVF program is designed to offer personalized care to each patient, ensuring the highest chances of success.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <span className="text-6xl text-center block mb-4">{icons.eggFreezing}</span>
                            <h3 className="text-2xl text-center font-bold mb-2 text-teal-600">Egg Freezing</h3>
                            <p className="text-gray-700">We provide egg freezing services to help preserve your fertility for the future.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <span className="text-6xl text-center block mb-4">{icons.geneticTesting}</span>
                            <h3 className="text-2xl text-center font-bold mb-2 text-teal-600">Genetic Testing</h3>
                            <p className="text-gray-700">Our advanced genetic testing can help identify potential issues early, ensuring the best outcomes for your family.</p>
                        </div>
                    </div>
                </section>
            </Element>

            <Element name="benefits">
                <section className="my-16 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-teal-600">Benefits of Choosing Fertitera</h2>
                    <div className="max-w-4xl mx-auto text-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 shadow-md rounded-lg flex items-center">
                                <span className="text-6xl text-teal-600 mr-4">{icons.consultation}</span>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-teal-600">Compassionate Care</h3>
                                    <p className="text-gray-700">Our team is dedicated to providing compassionate care tailored to your individual needs.</p>
                                </div>
                            </div>
                            <div className="p-6 shadow-md rounded-lg flex items-center">
                                <span className="text-6xl text-teal-600 mr-4">{icons.treatment}</span>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-teal-600">Cutting-Edge Technology</h3>
                                    <p className="text-gray-700">We use the latest advancements in fertility treatments to maximize your chances of success.</p>
                                </div>
                            </div>
                            <div className="p-6 shadow-md rounded-lg flex items-center">
                                <span className="text-6xl text-teal-600 mr-4">{icons.followUp}</span>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-teal-600">Patient-Centered Approach</h3>
                                    <p className="text-gray-700">Your comfort and well-being are at the heart of everything we do.</p>
                                </div>
                            </div>
                            <div className="p-6 shadow-md rounded-lg flex items-center">
                                <span className="text-6xl text-teal-600 mr-4">{icons.followUp}</span>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-teal-600">Transparent Communication</h3>
                                    <p className="text-gray-700">We believe in transparent communication and will keep you informed at every step of your journey.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>

            <Element name="testimonials">
                <section className="my-16 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-teal-600">What Our Clients Say</h2>
                    <div className="max-w-4xl mx-auto text-gray-700">
                        <Carousel interval={4000}>
                            <Carousel.Item>
                                <div className="p-6 shadow-md rounded-lg">
                                    <span className="text-6xl text-center block mb-4">{icons.ivf}</span>
                                    <img src={testimonialImage1} alt="Testimonial 1" className="mx-auto mb-4 rounded-full" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                    <blockquote className="text-xl italic mb-4">"Fertitera made our dream of starting a family a reality. Their expertise and support were invaluable."</blockquote>
                                    <p className="text-gray-700 font-bold">John and Sarah Doe</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="p-6 shadow-md rounded-lg">
                                    <span className="text-6xl text-center block mb-4">{icons.eggFreezing}</span>
                                    <img src={testimonialImage2} alt="Testimonial 2" className="mx-auto mb-4 rounded-full" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                    <blockquote className="text-xl italic mb-4">"The team at Fertitera goes above and beyond to ensure you feel cared for and supported throughout the entire process."</blockquote>
                                    <p className="text-gray-700 font-bold">Emily Smith</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>
            </Element>

            <section className="my-16 text-center" id="contact">
                <h2 className="text-4xl font-bold mb-8 text-teal-600">Contact Us</h2>
                <p className="text-gray-700 max-w-4xl mx-auto mb-8">Ready to take the next step? Contact us today to schedule your consultation.</p>
                <Link to="/contact" className="bg-teal-500 text-white px-6 py-3 rounded-full inline-block">Contact Now</Link>
            </section>

            <footer className="bg-gray-200 text-gray-700 text-center py-4">
                <p>&copy; {new Date().getFullYear()} Fertitera. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
