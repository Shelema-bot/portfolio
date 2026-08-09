import "./Skills.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiPostman
} from "react-icons/si";


function Skills(){

    const frontendSkills = [

        {
            name:"HTML5",
            icon:<FaHtml5/>
        },

        {
            name:"CSS3",
            icon:<FaCss3Alt/>
        },

        {
            name:"JavaScript",
            icon:<FaJs/>
        },

        {
            name:"React",
            icon:<FaReact/>
        }

    ];


    const backendSkills = [

        {
            name:"Node.js",
            icon:<FaNodeJs/>
        },

        {
            name:"Express.js",
            icon:<SiExpress/>
        },

        {
            name:"MongoDB",
            icon:<SiMongodb/>
        }

    ];


    const toolsSkills = [

        {
            name:"Git",
            icon:<FaGitAlt/>
        },

        {
            name:"GitHub",
            icon:<FaGithub/>
        },

        {
            name:"Postman",
            icon:<SiPostman/>
        },

        {
            name:"Video Editing",
            icon:"🎬"
        }

    ];


    const renderSkills = (skills) => {

        return skills.map((skill,index) => (

            <div
                className="skill-card"
                key={index}
            >

                <div className="skill-icon">

                    {skill.icon}

                </div>

                <h3>

                    {skill.name}

                </h3>

            </div>

        ));

    };


    return(

        <section className="skills" id="skills">


            <div className="skills-header">

                <p className="section-subtitle">
                    MY EXPERTISE
                </p>

                <h1>
                    Skills & Technologies
                </h1>

                <p className="skills-intro">

                    Technologies and tools I use to build
                    modern, responsive and full-stack
                    web applications.

                </p>

            </div>



            <div className="skills-container">


                <div className="skill-category">

                    <h2>
                        Frontend Development
                    </h2>

                    <div className="skills-grid">

                        {renderSkills(frontendSkills)}

                    </div>

                </div>



                <div className="skill-category">

                    <h2>
                        Backend Development
                    </h2>

                    <div className="skills-grid">

                        {renderSkills(backendSkills)}

                    </div>

                </div>



                <div className="skill-category">

                    <h2>
                        Tools & Creative
                    </h2>

                    <div className="skills-grid">

                        {renderSkills(toolsSkills)}

                    </div>

                </div>


            </div>


        </section>

    );

}


export default Skills;