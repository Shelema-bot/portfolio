import "./About.css";

import { motion } from "framer-motion";

import {
    FaGraduationCap,
    FaCode,
    FaVideo,
    FaLaptopCode
} from "react-icons/fa";


function About(){

    return(

        <section className="about" id="about">


            <div className="about-header">

                <p className="section-subtitle">
                    ABOUT ME
                </p>

                <h1>
                    Who I Am
                </h1>

            </div>



            <div className="about-container">


                <motion.div

                    className="about-text"

                    initial={{opacity:0, x:-50}}

                    whileInView={{opacity:1, x:0}}

                    transition={{duration:0.8}}

                    viewport={{once:true}}

                >

                    <h2>
                        I'm Shelema Ageri
                    </h2>


                    <p>

                        I am a third-year Computer Science student
                        at Haramaya University with a strong passion
                        for software development and modern web
                        technologies.

                    </p>


                    <p>

                        I enjoy transforming ideas into functional,
                        responsive and user-friendly web applications.
                        My main focus is full-stack development using
                        the MERN stack.

                    </p>


                    <p>

                        I have developed a complete Tech & Electronics
                        E-Commerce Platform using React, Node.js,
                        Express.js and MongoDB, including authentication,
                        product management, shopping cart, orders,
                        payment integration and an admin dashboard.

                    </p>


                    <p>

                        In addition to programming, I have skills in
                        video editing and enjoy learning new technologies
                        that help me grow as a developer.

                    </p>


                </motion.div>




                <motion.div

                    className="about-info"

                    initial={{opacity:0, x:50}}

                    whileInView={{opacity:1, x:0}}

                    transition={{duration:0.8}}

                    viewport={{once:true}}

                >



                    <div className="info-card">

                        <FaGraduationCap/>

                        <div>

                            <h3>
                                Education
                            </h3>

                            <p>
                                BSc Computer Science
                            </p>

                            <span>
                                Haramaya University
                            </span>

                        </div>

                    </div>




                    <div className="info-card">

                        <FaCode/>

                        <div>

                            <h3>
                                Development
                            </h3>

                            <p>
                                Full Stack MERN
                            </p>

                            <span>
                                React • Node.js • MongoDB
                            </span>

                        </div>

                    </div>




                    <div className="info-card">

                        <FaLaptopCode/>

                        <div>

                            <h3>
                                Academic Performance
                            </h3>

                            <p>
                                Above 75%
                            </p>

                            <span>
                                Strong academic performance
                            </span>

                        </div>

                    </div>




                    <div className="info-card">

                        <FaVideo/>

                        <div>

                            <h3>
                                Creative Skills
                            </h3>

                            <p>
                                Video Editing
                            </p>

                            <span>
                                Content creation & editing
                            </span>

                        </div>

                    </div>


                </motion.div>


            </div>


        </section>

    );

}


export default About;