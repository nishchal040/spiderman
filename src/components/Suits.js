import React from "react";
import { delay, easeInOut, motion, scale} from "framer-motion";


const cardAnimation={
    initial:{x:-100, opacity:0, scale:0.9, rotate:-3},
    whileInView:{x:0, opacity:1, scale:1, rotate:0},
    transition:{duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
    viewport: { margin: "-200px", once:true},
    whileHover:{scale: 1.08, x:-20, rotate: -1, boxShadow: "0px 20px 40px rgba(0,0,0,0.4)"}
}

const spidySwing={
    initial:{opacity:1},
    whileInView:{x:[-100,"70vw"],y:[-100,200,0], rotate: [-30, 20, -10],opacity:1},
    transition:{duration:4,ease:easeInOut},
    viewport:{margin:"-100px",once:true}
}
function Suits(){
    return(
        <section className="suits">
            <motion.img src="./images/spid-swing.png" id="swing" alt="" {...spidySwing}></motion.img>
            <h1>Spidy Suits</h1>
            <div className="suits-container">
                <motion.div className="suit" {...cardAnimation}>
                    <img src="./images/classic.png" alt="" />
                    <h2>Classic Suit</h2>
                    <p>The original. Red and blue. Web pattern. Everything Spider-Man is came from this suit — hand-sewn by a teenager in Queens.</p>
                </motion.div>
                <motion.div className="suit" {...cardAnimation}>
                    <img src="./images/symbiote.png" alt="" />
                    <h2>Symbiote Suit</h2>
                    <p>An alien symbiote that bonded with Peter, enhancing his powers before revealing its terrifying true nature. The suit that became Venom.</p>
                </motion.div>
                <motion.div className="suit" {...cardAnimation}>
                    <img src="./images/scarlet-spidy.png" alt="" />
                    <h2>Scarlet Suit</h2>
                    <p>Ben Reilly's iconic look — a simple red hoodie over a blue bodysuit. Stripped back, raw, and unforgettable in its simplicity.</p>
                </motion.div>
                <motion.div className="suit" {...cardAnimation}>
                    <img src="./images/iron-spidy.png" alt="" />
                    <h2>Iron Suit</h2>
                    <p>Tony Stark's gift to Peter Parker during Civil War. Mechanical waldoes, enhanced sensors, and a gold-red finish straight from Stark Industries.</p>
                </motion.div>
                <motion.div className="suit" {...cardAnimation}>
                    <img src="./images/noir.png" alt="" />
                    <h2>Noir Suit</h2>
                    <p>1930s Depression-era New York. A trenchcoat, a fedora, and no web-shooters — just fists. The darkest Spider-Man ever written.</p>
                </motion.div>
                <motion.div className="suit" {...cardAnimation}>
                    <img src="./images/stealth.png" alt="" />
                    <h2>Stealth Suit</h2>
                    <p>Built to counter Mysterio's sonic attacks. Peter designed this frequency-shifting suit that can bend light and muffle sound.</p>
                </motion.div>
                <motion.div className="suit" {...cardAnimation}>
                    <img src="./images/miles.png" alt="" />
                    <h2>Miles Morales Suit</h2>
                    <p>Black and red. Miles Morales redefined what Spider-Man could be — and gave the world a new hero worthy of the name.</p>
                </motion.div>

            </div>
        </section>
    )
}

export default Suits;