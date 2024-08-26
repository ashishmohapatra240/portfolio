export const perspective = {
    initial: {
        scale: 0.9,
        y: -150,
        opacity: 0.5,
    },
    enter: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
        },
    },
    exit: {
        scale: 1,
        y: 0,
        opacity: 1,
    },
};

export const slide = {
    initial: {
        y: 0,
    },
    enter: {
        y: "100vh",
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
        },
    },
    exit: {
        y: "100vh",
    },
};

export const opacity = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 1,
    },
};