import React from 'react';

function TimelineCircle({currentDate, startDate, endDate, referenceDate}) {
    if (referenceDate) {
        if (currentDate.toLocaleDateString() == referenceDate.toLocaleDateString()) {
            return (
                <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    <div
                        className="relative z-10 flex items-center justify-center w-6 h-6 bg-green-200 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                        <div
                            className="absolute w-4 h-4 rounded-full bg-primary animate-ping"></div>
                        <div
                            className="absolute w-4 h-4 rounded-full bg-primary"></div>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
            )
        } else if (currentDate.toLocaleDateString() > referenceDate.toLocaleDateString()) {
            return (
                <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    <div
                        className="relative z-10 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="currentColor" className="text-white" viewBox="0 0 16 16">
                            <path
                                d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
            )
        } else {
            return (
                <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    <div
                        className="relative z-10 flex items-center justify-center w-6 h-6 border border-4 border-gray-300 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
            )
        }
    } else {
        if (startDate.toLocaleDateString() <= currentDate.toLocaleDateString() && endDate.toLocaleDateString() >= currentDate.toLocaleDateString()) {
            return (
                <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    <div
                        className="relative z-10 flex items-center justify-center w-6 h-6 bg-green-200 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                        <div
                            className="absolute w-4 h-4 rounded-full bg-primary animate-ping"></div>
                        <div
                            className="absolute w-4 h-4 rounded-full bg-primary"></div>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
            )
        } else if (endDate.toLocaleDateString() < currentDate.toLocaleDateString()) {
            return (
                <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    <div
                        className="relative z-10 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             fill="currentColor" className="text-white" viewBox="0 0 16 16">
                            <path
                                d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
            )
        } else {
            return (
                <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    <div
                        className="relative z-10 flex items-center justify-center w-6 h-6 border border-4 border-gray-300 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                    </div>
                    <div className="hidaden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
            )
        }
    }
}

export default TimelineCircle;