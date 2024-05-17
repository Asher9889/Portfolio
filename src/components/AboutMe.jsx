import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>A Product Designer</span>
                    <span className="flex items-center gap-2">
                        <span>Based</span>
                        <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        <span>In India</span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                I'm Saurabh Kushwaha, currently pursuing my Master's in Computer Science from UpGrad. With a strong foundation in React, HTML, CSS, and JavaScript, I specialize in crafting engaging and responsive user interfaces. My expertise extends to utilizing state management solutions like Redux and designing with popular CSS frameworks such as Tailwind CSS and Bootstrap. I'm passionate about leveraging these technologies to develop scalable and visually appealing web applications that meet the highest standards of user experience and functionality.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                A tech enthusiast with an insatiable curiosity for the latest innovations in the digital realm. Whether it's exploring emerging programming languages or diving deep into cutting-edge frameworks, I thrive on the challenge of staying ahead of the curve. With a knack for problem-solving and a passion for elegant code, I approach every project with a blend of creativity and precision. Beyond the screen, you'll often find me engrossed in tech blogs, attending meetups, or tinkering with new gadgets. Let's connect and geek out over all things tech!
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                I'm currently on the lookout for exciting new opportunities in the tech industry. With a solid background in React, HTML, CSS, Redux, JavaScript, Tailwind CSS, and Bootstrap, I'm eager to contribute my skills and expertise to innovative projects. Whether it's front-end development, UI/UX design, or any other tech-related role, I'm ready to hit the ground running and make a meaningful impact. If you know of any openings or have a project in mind, I'd love to chat and explore how I can be a valuable addition to your team. Let's connect and create something awesome together!
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
