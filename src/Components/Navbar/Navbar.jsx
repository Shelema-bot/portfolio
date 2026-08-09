import { useState } from "react";

import "./Navbar.css";


function Navbar(){


    const [menuOpen,setMenuOpen] = useState(false);



    return(


        <nav className="navbar">


            <div className="logo">

                Shelema Ageri

            </div>



            <div

            className="menu-icon"

            onClick={()=>setMenuOpen(!menuOpen)}

            >

                ☰

            </div>




            <ul className={menuOpen ? "nav-links active" : "nav-links"}>


                <li>
                    <a 
                    href="#home"
                    onClick={()=>setMenuOpen(false)}
                    >
                        Home
                    </a>
                </li>



                <li>
                    <a 
                    href="#about"
                    onClick={()=>setMenuOpen(false)}
                    >
                        About
                    </a>
                </li>



                <li>
                    <a 
                    href="#skills"
                    onClick={()=>setMenuOpen(false)}
                    >
                        Skills
                    </a>
                </li>



                <li>
                    <a 
                    href="#projects"
                    onClick={()=>setMenuOpen(false)}
                    >
                        Projects
                    </a>
                </li>



                <li>
                    <a 
                    href="#contact"
                    onClick={()=>setMenuOpen(false)}
                    >
                        Contact
                    </a>
                </li>


            </ul>


        </nav>


    )

}


export default Navbar;