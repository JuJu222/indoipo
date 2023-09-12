'use client'

import React from 'react';
import {motion} from "framer-motion";

function HeroIcon({ children, delay }) {


    return (
        <>
            <motion.div
                variants={{
                    hidden: { y:-200, rotateZ: 0, opacity: 100 },
                    visible: { y: 300, rotateZ: 100, opacity: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    delay: delay,
                    ease: "linear",
                }}
            >
                {children}
            </motion.div>
        </>
    );
}

export default HeroIcon;