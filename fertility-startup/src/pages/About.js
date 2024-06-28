import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import missionImage from '../images/image1.jpeg';
import visionImage from '../images/image2.jpeg';
import teamMember1 from "../images/doctor1.jpeg";
import teamMember2 from '../images/doctor2.jpeg';
import teamMember3 from '../images/doctor3.jpeg';
import teamMember4 from '../images/doctor4.jpeg';

function About() {
    return (
        <>
            <Element name="about">
                <div className="my-16 max-w-4xl mx-auto p-6">
                    <motion.h2
                        className="text-4xl font-bold mb-8 text-teal-600 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        About Us
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-700 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        Fertitera is a leading fertility clinic dedicated to helping individuals and couples achieve their dreams of starting a family. With a team of experienced professionals and state-of-the-art technology, we provide personalized and compassionate care.
                    </motion.p>
                    <motion.p
                        className="text-lg text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                    >
                        Our mission is to offer the highest quality fertility services, tailored to meet the unique needs of each patient. We are committed to supporting you throughout your fertility journey with empathy and expertise.
                    </motion.p>
                </div>
            </Element>

            <Element name="mission">
                <section className="my-16 max-w-4xl mx-auto p-6">
                    <motion.h2
                        className="text-4xl font-bold mb-8 text-teal-600 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Our Mission
                    </motion.h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <motion.img
                            src={missionImage}
                            alt="Our Mission"
                            className="md:w-1/2 mb-4 md:mb-0 md:mr-4 rounded-lg shadow-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <motion.p
                            className="text-lg text-gray-700 md:w-1/2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            Our mission is to provide comprehensive, personalized fertility care that helps our patients build healthy families.
                        </motion.p>
                    </div>
                </section>
            </Element>

            <Element name="vision">
                <section className="my-16 max-w-4xl mx-auto p-6">
                    <motion.h2
                        className="text-4xl font-bold mb-8 text-teal-600 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Our Vision
                    </motion.h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <motion.img
                            src={visionImage}
                            alt="Our Vision"
                            className="md:w-1/2 mb-4 md:mb-0 md:mr-4 rounded-lg shadow-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <motion.p
                            className="text-lg text-gray-700 md:w-1/2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            Our vision is to be a global leader in fertility care, known for our innovative treatments, compassionate service, and exceptional success rates.
                        </motion.p>
                    </div>
                </section>
            </Element>

            <Element name="goals">
                <section className="my-16 max-w-4xl mx-auto p-6 text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-8 text-teal-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Long Term Goals
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        Our long-term goal is to continuously improve our success rates and patient satisfaction by investing in cutting-edge research and technology.
                    </motion.p>
                </section>
            </Element>

            <Element name="team">
                <section className="my-16 text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-8 text-teal-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Meet Our Team
                    </motion.h2>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white p-6 shadow-md rounded-lg transform transition duration-500 hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            <img src={teamMember1} alt="Dr. Jane Smith" className="mx-auto mb-4 rounded-full w-36 h-36 object-cover" />
                            <h3 className="text-2xl font-bold mb-2 text-teal-600">Dr. Jane Smith</h3>
                            <p className="text-gray-700">Lead Fertility Specialist</p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-6 shadow-md rounded-lg transform transition duration-500 hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            <img src={teamMember2} alt="Dr. John Doe" className="mx-auto mb-4 rounded-full w-36 h-36 object-cover" />
                            <h3 className="text-2xl font-bold mb-2 text-teal-600">Dr. John Doe</h3>
                            <p className="text-gray-700">Genetic Testing Expert</p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-6 shadow-md rounded-lg transform transition duration-500 hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            <img src={teamMember3} alt="Dr. Emily Brown" className="mx-auto mb-4 rounded-full w-36 h-36 object-cover" />
                            <h3 className="text-2xl font-bold mb-2 text-teal-600">Dr. Emily Brown</h3>
                            <p className="text-gray-700">Patient Care Specialist</p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-6 shadow-md rounded-lg transform transition duration-500 hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            <img src={teamMember4} alt="Dr. Emily Brown" className="mx-auto mb-4 rounded-full w-36 h-36 object-cover" />
                            <h3 className="text-2xl font-bold mb-2 text-teal-600">Dr. Emily Brown</h3>
                            <p className="text-gray-700">Patient Care Specialist</p>
                        </motion.div>
                    </div>
                </section>
            </Element>
        </>
    );
}

export default About;
