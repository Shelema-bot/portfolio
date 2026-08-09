import "./Footer.css";

import {
    FaGithub,
    FaEnvelope
} from "react-icons/fa";


function Footer(){

    return(

        <footer className="footer">


            <h2>
                Shelema Ageri
            </h2>


            <p>
                Full Stack MERN Developer
            </p>



            <div className="social-links">


                <a
                    href="https://github.com/Shelema-bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >

                    <FaGithub />

                </a>



                <a
                    href="mailto:shelemaagari@gmail.com"
                    aria-label="Email"
                >

                    <FaEnvelope />

                </a>


            </div>



            <div className="copyright">

                © {new Date().getFullYear()}
                {" "}
                Shelema Ageri.
                All Rights Reserved.

            </div>


        </footer>

    );

}


export default Footer;