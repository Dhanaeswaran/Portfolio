const lefttoright = () => {
    return {
        hidden: {
          x: -30,
          opacity: 0,
        },
        show: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0,
          },
        },
    };
};
const toptodown = () => {
  return {
    hidden: {
      y: -10,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
};
}
const contacttran = () => {
  return {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        delay: 0,
      },
    },
  };
}
const projectshow = () => {
  return{
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  }
}
export {lefttoright , toptodown, contacttran,projectshow}