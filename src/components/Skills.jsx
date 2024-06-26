import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/sk-1.png";
import sk2 from "../assets/sk-2.png";
import sk3 from "../assets/sk-3.png";
import sk4 from "../assets/sk-4.png";
import sk5 from "../assets/sk-5.png";
import sk12 from "../assets/sk-redux.png";
import sk13 from "../assets/sk-13.png";
import sk6 from "../assets/sk-6.png";
import sk7 from "../assets/sk-7.png";
import sk8 from "../assets/sk-8.png";
import sk9 from "../assets/sk-9.png";
import sk10 from "../assets/sk-10.png";
import sk11 from "../assets/sk-11.png";
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";
import firebase from "../assets/sk-firebase.svg";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                    <SkillIcon path={sk11} />
                    {/* <SkillIcon path={sk1} /> */}
                    {/* <SkillIcon path={sk2} /> */}
                    {/* <SkillIcon path={sk3} /> */}
                    <SkillIcon path={sk12} />
                    <SkillIcon path={sk13} />
                    <SkillIcon path={firebase} />
                    {/* <SkillIcon path={sk6} /> */}
                    {/* <SkillIcon path={sk7} /> */}
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk5} />
                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">

                    <Service
                            num="1"
                            title="React Developer"
                            desc={`I have a strong command of the language's fundamentals, such as variables, functions, loops, and data types.
                            Proficiency in modern JavaScript features, including ES6+ syntax, promises, async/await, and arrow functions, is essential for writing clean and efficient code. I have a ability to work with DOM manipulation, event handling, and asynchronous programming will be crucial for building interactive and responsive web applications.`}
                            data={[
                                "State Management",
                                "Component-Based Architecture",
                                "Redux",
                                "Hooks",
                                "React Router DOM",
                                
                            ]}
                        />
                        <Service
                            num="2"
                            title="JavaScript Developer"
                            desc={`I have a strong command of the language's fundamentals, such as variables, functions, loops, and data types.
                            Proficiency in modern JavaScript features, including ES6+ syntax, promises, async/await, and arrow functions, is essential for writing clean and efficient code. I have a ability to work with DOM manipulation, event handling, and asynchronous programming will be crucial for building interactive and responsive web applications.`}
                            data={[
                                "API Integration",
                                "AJAX",
                                "DOM Manipulation",
                                "Error Handling and DebPugging",
                                "Version Control",
                                "ES6+ Features",
                            ]}
                        />
                        <Service
                            num="3"
                            title="HTML"
                            desc="Proficient in HTML5, I specialize in creating well-structured and semantically correct markup for web development projects. With a keen eye for detail, I ensure clean and maintainable code, focusing on enhancing accessibility and search engine optimization (SEO). Experienced in building responsive and cross-browser compatible web pages, I leverage HTML, CSS, and JavaScript to deliver user-friendly interfaces across various devices and screen sizes. I stay updated on the latest HTML standards and best practices, continuously seeking opportunities to enhance my skills and contribute to innovative web development projects."
                            data={[
                                "Semantic Markup",
                                "Forms",
                                "SEO",
                                "Accessibility",
                                
                            ]}
                        />
                        <Service
                            num="4"
                            title="CSS"
                            desc="Skilled in CSS3, I excel in crafting visually appealing and responsive designs for web applications. With a solid understanding of CSS fundamentals, I specialize in styling HTML elements to create engaging user interfaces. Proficient in leveraging CSS preprocessors like Sass or Less, I ensure modular and maintainable stylesheets. Experienced in implementing layout techniques such as Flexbox and Grid, I create flexible and adaptive designs that adapt seamlessly to different screen sizes and devices. Committed to staying updated on emerging trends and best practices in CSS, I continuously seek opportunities to refine my skills and deliver high-quality, pixel-perfect designs."
                            data={[
                                "Selectors and Specificity",
                                "Responsive Design",
                                "Flexbox and Grid Layout",
                                "CSS Preprocessors",
                                "CSS Frameworks",
                            ]}
                        />
                        <Service
                            num="5"
                            title="Tailwind Css"
                            desc="Experienced in Tailwind CSS, I specialize in rapidly building modern and responsive user interfaces with minimal CSS. Proficient in leveraging Tailwind's utility-first approach, I efficiently style HTML elements by applying pre-defined utility classes. Skilled in customizing and extending Tailwind's utility classes, I ensure consistency and maintainability across projects while adhering to design specifications. With a focus on streamlining development workflow, I harness the power of Tailwind's utility classes to expedite the process of creating visually appealing and functional user interfaces. Continuously exploring new features and updates in Tailwind CSS, I remain proactive in optimizing development practices and delivering efficient and scalable CSS solutions."
                            data={[
                                "Understanding of Utility-First Approach",
                                "Customization and Configuration",
                                
                            ]}
                        />
                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Solving</span>
                        <span>Problems</span>
                        <span className="flex items-center gap-2">
                            Through
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                            Good{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span>Services</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
