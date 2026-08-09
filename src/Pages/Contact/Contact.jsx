import "./Contact.css";

import {
    FaEnvelope,
    FaPhone,
    FaGithub
} from "react-icons/fa";


function Contact(){

    return(

        <section className="contact" id="contact">


            <div className="contact-header">

                <p className="section-subtitle">
                    GET IN TOUCH
                </p>

                <h1>
                    Contact Me
                </h1>

                <p className="contact-intro">

                    Have a project, opportunity, or question?
                    Feel free to get in touch with me.

                </p>

            </div>



            <div className="contact-container">


                <a
                    href="mailto:shelemaagari@gmail.com"
                    className="contact-card"
                >

                    <FaEnvelope />

                    <h3>
                        Email
                    </h3>

                    <p>
                        shelemaagari@gmail.com
                    </p>

                </a>



                <a
                    href="tel:0974007772"
                    className="contact-card"
                >

                    <FaPhone />

                    <h3>
                        Phone
                    </h3>

                    <p>
                        0974007772
                    </p>

                </a>



                <a
                    href="https://github.com/Shelema-bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                >

                    <FaGithub />

                    <h3>
                        GitHub
                    </h3>

                    <p>
                        github.com/Shelema-bot
                    </p>

                </a>


            </div>


        </section>

    );

}


export default Contact;