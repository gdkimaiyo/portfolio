export const animateFunc = () => {
  const dataText = [
    "Hi, I am Gideon",
    "I am a Software Engineer",
    "Sky is the limit!",
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      const emElm = document.querySelector("em");
      if (emElm !== null) {
        emElm.innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
      }

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 2000);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] === "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 5000);
    } else {
      // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    }
  }
  // start the text animation
  StartTextAnimation(0);
};

export const scrollToTop = () => {
  // Get the button:
  const mybutton = document.getElementById("scroll-back-btn");

  // When the user scrolls down 700px from the top of the document, show the button
  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      mybutton.style.visibility = "visible";
    } else {
      mybutton.style.visibility = "hidden";
    }
  };
};

// HELPER functions
export const getImgUrl = (dir, image) => {
  if (dir === "assets/") {
    return new URL(`../assets/${image}`, import.meta.url).href;
  }
  return new URL(`../assets/se_icons/${image}`, import.meta.url).href;
};

export const validateEmail = (email) => {
  if (email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  } else {
    return false;
  }
};

export const validateFullName = (name) => {
  if (name) {
    const re = /^[a-zA-Z\-’']+( [a-zA-Z\-’']+)+$/;
    return re.test(name);
  } else {
    return false;
  }
};
