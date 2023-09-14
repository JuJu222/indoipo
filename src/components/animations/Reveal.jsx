'use client'

import React from 'react';
import { motion } from "framer-motion";

function Reveal({ children, direction }) {
    if (direction == 'left') {
        return (
            <>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
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
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
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
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
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
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
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
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                >
                    {children}
                </motion.div>
            </>
        );
    }
}

export default Reveal;