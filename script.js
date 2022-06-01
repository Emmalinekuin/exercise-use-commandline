let toggleNavStatus = false;

const menuToggle = function () {
  if (toggleNavStatus === false) {
    const menuIcon = document.getElementsByClassName("menu-icon");
    menuIcon[0].addEventListener("click", function () {
      const getMenu = document.getElementById("menu-toggle");
      getMenu.classList.toggle("show");
    });

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    menuIcon[0].addEventListener("click", function () {
      const removeMenu = document.getElementById("menu-toggle");
      removeMenu.classList.toggle("show");
    });

    toggleNavStatus = false;
  }
};

menuToggle();

// Grey
const changeBackgroundToGrey = function () {
  const body = document.body;
  body.classList.remove(
    "red-background",
    "orange-background",
    "purple-background",
    "green-background"
  );
  body.classList.add("grey-background");
  const removeMenu = document.getElementById("menu-toggle");
  removeMenu.classList.toggle("show");
};

const attachEventToChangeGreyBackground = function () {
  const greyBackground = document.getElementById("home");
  greyBackground.addEventListener("click", function () {
    changeBackgroundToGrey();
  });
};

attachEventToChangeGreyBackground();

// Red

const changeBackgroundtoRed = function () {
  const body = document.body;
  body.classList.remove(
    "grey-background",
    "orange-background",
    "purple-background",
    "green-background"
  );
  body.classList.add("red-background");
  const removeMenu = document.getElementById("menu-toggle");
  removeMenu.classList.toggle("show");
};

const attachEventToChangeRedBackground = function () {
  const redBackground = document.getElementById("red");
  redBackground.addEventListener("click", function () {
    changeBackgroundtoRed();
  });
};

attachEventToChangeRedBackground();

// Orange

const changeBackgroundtoOrange = function () {
  const body = document.body;
  body.classList.remove(
    "grey-background",
    "red-background",
    "purple-background",
    "green-background"
  );
  body.classList.add("orange-background");
  const removeMenu = document.getElementById("menu-toggle");
  removeMenu.classList.toggle("show");
};

const attachEventToChangeOrangeBackground = function () {
  const orangeBackground = document.getElementById("orange");
  orangeBackground.addEventListener("click", function () {
    changeBackgroundtoOrange();
  });
};

attachEventToChangeOrangeBackground();

// Purple

const changeBackgroundtoPurple = function () {
  const body = document.body;
  body.classList.remove(
    "grey-background",
    "red-background",
    "orange-background",
    "green-background"
  );
  body.classList.add("purple-background");
  const removeMenu = document.getElementById("menu-toggle");
  removeMenu.classList.toggle("show");
};

const attachEventToChangePurpleBackground = function () {
  const purpleBackground = document.getElementById("purple");
  purpleBackground.addEventListener("click", function () {
    changeBackgroundtoPurple();
  });
};

attachEventToChangePurpleBackground();

// Green

const changeBackgroundtoGreen = function () {
  const body = document.body;
  body.classList.remove(
    "grey-background",
    "red-background",
    "orange-background",
    "purple-background"
  );
  body.classList.add("green-background");
  const removeMenu = document.getElementById("menu-toggle");
  removeMenu.classList.toggle("show");
};

const attachEventToChangeGreenBackground = function () {
  const greenBackground = document.getElementById("green");
  greenBackground.addEventListener("click", function () {
    changeBackgroundtoGreen();
  });
};

attachEventToChangeGreenBackground();
