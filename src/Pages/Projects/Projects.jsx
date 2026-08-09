import "./Projects.css";

import {
    FaGithub,
    FaExternalLinkAlt,
    FaShoppingCart,
    FaUserShield,
    FaCreditCard
} from "react-icons/fa";

import projectImage from "../../assets/project.jpg";


function Projects(){

    return(

        <section className="projects" id="projects">

            <div className="projects-header">

                <p className="section-subtitle">
                    MY WORK
                </p>

                <h1>
                    Featured Project
                </h1>

                <p className="projects-intro">
                    A full-stack e-commerce platform built to provide
                    a complete online shopping experience.
                </p>

            </div>



            <div className="project-card">


                <div className="project-image">

                    <img
                        src={projectImage}
                        alt="Tech and Electronics E-Commerce Platform"
                    />

                </div>



                <div className="project-content">

                    <span className="project-label">
                        MERN STACK PROJECT
                    </span>


                    <h2>
                        Tech & Electronics
                        <span> E-Commerce Platform</span>
                    </h2>


                    <p className="project-description">

                        A full-stack e-commerce web application designed
                        for selling technology and electronic products.
                        The platform allows customers to browse products,
                        manage their shopping cart, place orders and make
                        online payments.

                    </p>



                    <div className="project-features">


                        <div>

                            <FaShoppingCart />

                            <span>
                                Shopping Cart
                            </span>

                        </div>


                        <div>

                            <FaUserShield />

                            <span>
                                Admin Dashboard
                            </span>

                        </div>


                        <div>

                            <FaCreditCard />

                            <span>
                                Online Payment
                            </span>

                        </div>


                    </div>



                    <div className="technologies">

                        <span>React</span>

                        <span>Node.js</span>

                        <span>Express.js</span>

                        <span>MongoDB</span>

                        <span>JWT</span>

                        <span>Chapa</span>

                    </div>



                    <div className="project-buttons">


                        <a
                            href="#"
                            className="project-btn github-btn"
                            onClick={(e) => e.preventDefault()}
                        >

                            <FaGithub />

                            GitHub

                        </a>



                        <a
                            href="#"
                            className="project-btn demo-btn"
                            onClick={(e) => e.preventDefault()}
                        >

                            <FaExternalLinkAlt />

                            Live Demo

                        </a>


                    </div>


                </div>


            </div>


        </section>

    );

}


export default Projects;