import React from "react";
import {motion} from "framer-motion";

function Banner(){
    return(
        <section>
        <div class="hero-container">
            <img src="/images/spider-city.webp" alt=""></img>
            <div class="spiderman">
                <motion.h1
                    initial={{x:-1000}}
                    animate={{x:0}}
                    transition={{duration:0.75}}
                >SPIDERMAN</motion.h1>
                <motion.img src="/images/spiderman.png" alt=""
                    initial={{y:-800}}
                    animate={{y:0}}
                    transition={{duration:0.75}}
                ></motion.img>
            </div>
            
        </div>
    </section>
    )
}

export default Banner;