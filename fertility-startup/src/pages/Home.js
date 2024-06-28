import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faSnowflake, faDna, faClipboardList, faHospital, faSync } from '@fortawesome/free-solid-svg-icons';
import backgroundImg from "../images/image2.jpeg";
import testimonialImage1 from "../images/testi1.jpeg";
import testimonialImage2 from "../images/testi.jpeg";
import { Element } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Infographics from '../Infographics';

const infographicData = [
    {
        title: "Success Rate",
        value: "85%",
        description: "Our fertility treatments have a high success rate."
    },
    {
        title: "Years of Experience",
        value: "20+",
        description: "Providing expert care for over 20 years."
    },
    {
        title: "Happy Families",
        value: "1000+",
        description: "We have helped over 1000 families grow."
    }
    // Add more data as needed
];

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

                                    <img src={testimonialImage1} alt="Testimonial 1" className="rounded-full w-32 h-32 mx-auto mb-4" />
                                    <p className="mb-2">"Fertitera changed our lives! Thanks to their amazing team, we now have the family we always dreamed of."</p>
                                    <p className="font-bold">- John and Jane Doe</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="p-6 shadow-md rounded-lg">
                                    <img src={testimonialImage2} alt="Testimonial 2" className="rounded-full w-32 h-32 mx-auto mb-4" />
                                    <p className="mb-2">"The care and support we received at Fertitera were exceptional. We couldn't have asked for a better experience."</p>
                                    <p className="font-bold">- Mary and Mark Smith</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>
            </Element>

            <Element name="contact">
                <section className="my-16 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-teal-600">Contact Us</h2>
                    <div className="max-w-4xl mx-auto text-gray-700">
                        <p className="mb-4">Ready to start your journey to parenthood? Contact us today to schedule a consultation or to learn more about our services.</p>
                        <Link to="/contact" className="mt-8 bg-teal-500 text-white px-6 py-3 rounded-full">Get in Touch</Link>
                    </div>
                </section>
            </Element>

            {/* Infographics Section */}
            <div>
                <Infographics data={infographicData} />
            </div>
        </div>
    );
}

export default Home;
