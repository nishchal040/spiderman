import {motion} from "framer-motion"
import React from "react";

const cardAnimation = {
    initial: { x: -100, opacity: 0, scale: 0.75 },
    whileInView: { x: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
    viewport: { margin: "-100px",once:true}
};

const cardUpAnimation={
    initial: { y: 10, opacity: 0, scale: 0.75 },
    whileInView: { y: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
    viewport: { margin: "-100px",once:true}
}

const cardRightAnimation={
    initial: { x: 300, opacity: 0, scale: 0.75 },
    whileInView: { x: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
    viewport: { margin: "-100px",once:true}
}

const rightSpidy={
            initial:{opacity:0},
            whileInView:{x:[-100,0],y:[-100,0],opacity:1},
            transition:{duration:1,delay:0.75},
            viewport:{margin:"-200px",once:true}
}
function About(){
    return(
        <section id="about">
            <motion.img src="/images/sipdy-right.png" alt="" id="spidy-right" {...rightSpidy}>
            </motion.img>
            <div className="about-container">
                
                <motion.h1
                    initial={{y:-100, opacity:0}}
                    whileInView={{y:0, opacity:1}}  
                    transition={{duration:0.5}}
                    viewport={{once:true, margin:"-200px"}}          
                >Spidy -Story</motion.h1>
                <div className="heading">
                    <div className="red-dot"></div>
                    <p>Character Profile — Spider-Man</p>
                </div>
                <div className="grid">
                    <div className="features-container">
                        <div className="cards-container">
                        <motion.div className="card" {...cardAnimation}>
                            <span>HEIGHT</span>
                            <h2>5'10"</h2>
                        </motion.div>
                            <motion.div className="card" {...cardAnimation}>
                                <span>WEIGHT</span>
                                <h2>167 lb</h2>
                            </motion.div>
                            <motion.div className="card" {...cardAnimation}>
                                <span>AGE</span>
                                <h2>5'10"</h2>
                            </motion.div>
                        <motion.div className="card" {...cardAnimation}>
                            <span>IQ</span>
                            <h2>250+</h2>
                        </motion.div>
                    </div>
                    <div className="personal-cards">
                        <motion.div className="card" {...cardUpAnimation}>
                            <span>Eyes</span>
                            <p>Hazel</p>
                        </motion.div>
                            <motion.div className="card" {...cardUpAnimation}>
                                <span>Hair</span>
                                <p>Brown</p>
                            </motion.div>
                                <motion.div className="card" {...cardUpAnimation}>
                                    <span>Build</span>
                                    <p>Athletic</p>
                                </motion.div>
                    </div>
                    </div>
                    <div className="stats-list">
                        <motion.img src="./images/stats.png" alt="" id="stats"
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration: 2}}
                        ></motion.img>
                    <div className="stats">
                        <motion.div className="stats-container" {...cardRightAnimation}>
                            <span>BASE STATS </span>
                            <div>
                                <span>Lift capacity</span>
                                <span>10 tons</span>
                            </div>
                            <div>
                                <span>Top speed</span>
                                <span>200 mph (swinging)</span>
                            </div>
                            <div>
                                <span>Reflexes</span>
                                <span>40ms reaction time</span>
                            </div>
                            <div>
                                <span>Web fluid</span>
                                <span>Custom polymer</span>
                            </div>
                        </motion.div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;