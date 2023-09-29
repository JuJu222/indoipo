'use client'

import React from 'react';
import {motion} from "framer-motion";

function HeroIcon({ children, delay, yEnd }) {


    return (
        <>
            <motion.div
                variants={{
                    hidden: { y:-200, rotateZ: 0, opacity: 100 },
                    visible: { y: yEnd, rotateZ: 360, opacity: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    delay: delay,
                    ease: "linear",
                    rotateZ: {
                        ease: "linear",
                        repeat: Infinity,
                        duration: 10,
                    }
                }}
            >
                {children}
            </motion.div>
        </>
    );
}

export default HeroIcon;