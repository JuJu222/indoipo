'use client'

import React from 'react';
import { motion } from "framer-motion";

function Reveal({ children, direction }) {
    if (direction == 'left') {
        return (
            <>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </>
        );
    } else if (direction == 'right') {
        return (
            <>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </>
        );
    } else if (direction == 'up') {
        return (
            <>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </>
        );
    } else if (direction == 'down') {
        return (
            <>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </>
        );
    } else {
        return (
            <>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </>
        );
    }
}

export default Reveal;