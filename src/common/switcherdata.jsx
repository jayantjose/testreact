  
import * as rtl from '../assets/plugins/bootstrap/css/bootstrap.rtl.min.css?inline';
import * as ltr from '../assets/plugins/bootstrap/css/bootstrap.min.css?inline';

// LTR AND RTL VERSIONS******************

export const RTL = () => {
  document.querySelector(".app").classList.add("rtl");
  document.querySelector("html[lang=en]").setAttribute("dir", "rtl");
  document.querySelector(".app").classList.remove("ltr");

  localStorage.setItem("valexrtl", true);
  localStorage.removeItem("valexltr");
};

export const LTR = () => {
  document.querySelector(".app").classList.add("ltr");
  document.querySelector("html[lang=en]").setAttribute("dir", "ltr");
  document.querySelector(".app").classList.remove("rtl");

  localStorage.setItem("valexltr", true);
  localStorage.removeItem("valexrtl");
};

// NAVIGATION STYLE****************
export function addOrRemoveCss(cssCode) {
  if (document.head.querySelector(`style[data-name="dynamic-bootstrap"]`)) {
    document.head.removeChild(document.head.querySelector(`style[data-name="dynamic-bootstrap"]`))
  } 
    const styleElement = document.createElement('style');
    styleElement.setAttribute('data-name', "dynamic-bootstrap");
    styleElement.textContent = cssCode;
    document.head.prepend(styleElement);
}

export const Verticalmenu = () => {

  document.querySelector(".app").classList.add("sidebar-mini");
  document.querySelector(".main-header").classList.add("side-header");
  document.querySelector(".main-content").classList.add("app-content");
  document.querySelector(".main-container ").classList.add("container-fluid");
  document.querySelector(".side-app").classList.remove("container");
  document.querySelector(".app").classList.remove("horizontal");
  document.querySelector(".app").classList.remove("horizontal-hover");
  document.querySelector(".app-sidebar").classList.remove("horizontal-main");
  document.querySelector(".main-header").classList.remove("hor-header");
  document.querySelector(".main-sidemenu").classList.remove("container");
  document.querySelector(".main-container ").classList.remove("container");
  document
    .querySelector(".main-content")
    .classList.remove("horizontal-content");
  name();
  localStorage.setItem("valexvertical", true);
  localStorage.removeItem("valexhorizontal");
  localStorage.removeItem("valexhorizontalHover");

};
export const horizontalclickmenu = () => {

  document.querySelector(".main-header")?.classList.add("hor-header");
  document.querySelector(".app").classList.remove("sidebar-mini");
  document.querySelector(".main-header").classList.remove("side-header");
  document.querySelector(".main-content").classList.remove("app-content");
  document .querySelector(".main-container ").classList.remove("container-fluid");
  document.querySelector(".app").classList.remove("sidenav-toggled");
  document.querySelector(".app").classList.remove("horizontal-hover");
  document.querySelector(".app").classList.add("horizontal");
  document.querySelector(".main-container ").classList.add("container");
  document.querySelector(".main-sidemenu").classList.add("container");
  document.querySelector(".main-content").classList.add("horizontal-content");
  document.querySelector(".app-sidebar").classList.add("horizontal-main");
  document.querySelector(".side-app").classList.add("container");

  document.querySelector(".horizontal .side-menu").style.flexWrap = "nowrap";

  // checkHoriMenu();
  Horizontalmenudefultclose();
  switcherArrowFn();

  localStorage.removeItem("valexvertical");
  localStorage.setItem("valexhorizontal", true);
  localStorage.removeItem("valexhorizontalHover");
}
// };
export const Horizontalhovermenu = () => {

  document.querySelector(".app").classList.add("horizontal-hover");
  document.querySelector(".app").classList.add("horizontal");
  document.querySelector(".main-content").classList.add("horizontal-content");
  document.querySelector(".main-container ").classList.add("container");
  document.querySelector(".main-header").classList.add("hor-header");
  document.querySelector(".app-sidebar").classList.add("horizontal-main");
  document.querySelector(".main-sidemenu").classList.add("container");
  document.querySelector(".side-app").classList.add("container");

  document.querySelector("#slide-left").classList.remove("d-none");
  document.querySelector("#slide-right").classList.remove("d-none");
  document.querySelector(".main-content").classList.remove("app-content");
  document.querySelector(".main-container ").classList.remove("container-fluid");
  document.querySelector(".app").classList.remove("sidebar-mini");
  document.querySelector(".app").classList.remove("sidenav-toggled");

  document
    .querySelector(".horizontal-hover", ".side-menu")
    ?.classList.add("flex-nowrap");
  let li = document.querySelectorAll(".side-menu", "li");
  li.forEach((e, i) => {
    if (e.classList.contains("is-expaned")) {
      let ele = [...e.children];
      ele.forEach((el, i) => {
        el.classList.remove("active");
        if (el.classList.contains("slide-menu")) {
          el.style = "";
          el.style.display = "none";
        }
      });
      e.classList.remove("is-expaned");
    }
  });
  // checkHoriMenu();
  Horizontalmenudefultclose();
  switcherArrowFn();

  localStorage.removeItem("valexvertical");
  localStorage.setItem("valexhorizontalHover", true);
  localStorage.removeItem("valexhorizontal");
};


// Header
export const Lightheader = () => {
  document.querySelector(".app").classList.remove("color-header");
  document.querySelector(".app").classList.remove("gradient-header");
  document.querySelector(".app").classList.remove("dark-header");
  document.querySelector(".app").classList.add("light-header");

  localStorage.setItem("valexlightheader", true);
  localStorage.removeItem("valexcolorheader");
  localStorage.removeItem("valexgradientheader");
  localStorage.removeItem("valexdarkheader");

};
export const Colorheader = () => {
  document.querySelector(".app").classList.remove("gradient-header");
  document.querySelector(".app").classList.remove("dark-header");
  document.querySelector(".app").classList.remove("light-header");
  document.querySelector(".app").classList.add("color-header");

document.getElementById("myonoffswitch7").checked = true;
  localStorage.setItem("valexcolorheader", true);
  localStorage.removeItem("header");
  localStorage.removeItem("valexgradientheader");
  localStorage.removeItem("valexdarkheader");
};
export const gradientheader = () => {
  document.querySelector(".app").classList.remove("color-header");
  document.querySelector(".app").classList.remove("dark-header");
  document.querySelector(".app").classList.remove("light-header");
  document.querySelector(".app").classList.add("gradient-header");

  localStorage.setItem("valexgradientheader", true);
  localStorage.removeItem("valexcolorheader");
  localStorage.removeItem("valexlightheader");
  localStorage.removeItem("valexdarkheader");
};
export const Darkheader = () => {
  document.querySelector(".app").classList.remove("color-header");
  document.querySelector(".app").classList.remove("gradient-header");
  document.querySelector(".app").classList.remove("light-header");
  document.querySelector(".app").classList.add("dark-header");

  localStorage.setItem("valexdarkheader", true);
  localStorage.removeItem("valexcolorheader");
  localStorage.removeItem("valexgradientheader");
  localStorage.removeItem("valexlightheader");
};
// menu
export const LightMenu = () => {
  document.querySelector(".app").classList.remove("color-menu");
  document.querySelector(".app").classList.remove("dark-menu");
  document.querySelector(".app").classList.remove("gradient-menu");
  document.querySelector(".app").classList.add("light-menu");
};
export const ColorMenu = () => {
  document.querySelector(".app").classList.remove("light-menu");
  document.querySelector(".app").classList.remove("dark-menu");
  document.querySelector(".app").classList.remove("gradient-menu");
  document.querySelector(".app").classList.add("color-menu");

  localStorage.setItem("valexcolormenu", true);
  localStorage.removeItem("valexlightmenu");
  localStorage.removeItem("valexgradientmenu");
  localStorage.removeItem("valexdarkmenu");
};
export const DarkMenu = () => {
  document.querySelector(".app").classList.remove("light-menu");
  document.querySelector(".app").classList.remove("color-menu");
  document.querySelector(".app").classList.remove("gradient-menu");
  document.querySelector(".app").classList.add("dark-menu");
};
export const GradientMenu = () => {
  document.querySelector(".app").classList.remove("light-menu");
  document.querySelector(".app").classList.remove("color-menu");
  document.querySelector(".app").classList.remove("dark-menu");
  document.querySelector(".app").classList.add("gradient-menu");
};
//
export const FullWidth = () => {
  document.querySelector(".app").classList.remove("layout-boxed");
  document.querySelector(".app").classList.add("layout-fullwidth");
};
export const Boxed = () => {
  document.querySelector(".app").classList.remove("layout-fullwidth");
  document.querySelector(".app").classList.add("layout-boxed");

  localStorage.setItem("valexlayoutboxed", true);
  localStorage.removeItem("valexlayoutfullwidth");

};
export const Fixed = () => {
  document.querySelector(".app").classList.remove("scrollable-layout");
  document.querySelector(".app").classList.add("fixed-layout");
  localStorage.removeItem("scrollablelayout");
  localStorage.setItem("fixedlayout", true);
};
export const Scrollable = () => {
  document.querySelector(".app").classList.remove("fixed-layout");
  document.querySelector(".app").classList.add("scrollable-layout");

  localStorage.setItem("scrollablelayout", true);
  localStorage.removeItem("fixedlayout");

};

// Color theme

//LIGHT THEME STYLE
export const LightTheme = () => {

  document.querySelector("body").classList.add("light-theme");
  document.querySelector("#myonoffswitch3").checked = true;
  document.querySelector("#myonoffswitch6").checked = true;

  document.querySelector("body").classList.remove("transparent-theme");
  document.querySelector("body").classList.remove("dark-theme");
  document.querySelector("body")?.classList.remove("dark-header");
  document.querySelector("body")?.classList.remove("color-header");
  document.querySelector("body")?.classList.remove("gradient-header");
  document.querySelector("body")?.classList.remove("dark-menu");
  document.querySelector("body")?.classList.remove("color-menu");
  document.querySelector("body")?.classList.remove("gradient-menu");
  document.querySelector("body")?.classList.remove("bg-img1");
  document.querySelector("body")?.classList.remove("bg-img2");
  document.querySelector("body")?.classList.remove("bg-img3");
  document.querySelector("body")?.classList.remove("bg-img4");

  document.querySelector("html").style = "";
  name();

  localStorage.removeItem("valexdark");
  localStorage.setItem("valexlighttheme", true);
  localStorage.removeItem("valextransparent");
  localStorage.removeItem("valexBgImage")
  localStorage.removeItem("")

};

//DARK THEME STYLE
export const dark = () => {
  document.querySelector("body").classList.add("dark-theme");
  // document.querySelector("#myonoffswitch8").checked = true;
  // document.querySelector("#myonoffswitch5").checked = true;

  document.querySelector("body").classList.remove("transparent-theme");
  document.querySelector("body").classList.remove("light-theme");
  document.querySelector("body")?.classList.remove("light-header");
  document.querySelector("body")?.classList.remove("color-header");
  document.querySelector("body")?.classList.remove("gradient-header");
  document.querySelector("body")?.classList.remove("light-menu");
  document.querySelector("body")?.classList.remove("color-menu");
  document.querySelector("body")?.classList.remove("gradient-menu");

  document.querySelector("html").style = "";
  name();
  localStorage.removeItem("valexlighttheme");
  localStorage.setItem("valexdark", true);
  localStorage.removeItem("valextransparent");
  localStorage.removeItem("valexBgImage");

};

//TRANSPARENT BG-IMAGE STYLE START***************

export function bgimage1() {
  document.querySelector("body").classList.add("bg-img1");
  document.querySelector("body").classList.remove("bg-img2");
  document.querySelector("body").classList.remove("bg-img3");
  document.querySelector("body").classList.remove("bg-img4");
  document.querySelector("body").classList.add("transparent-theme");
  localStorage.setItem("valexBgImage", "bg-img1");
  transparentStyle();

  document.querySelector(".app").classList.remove("light-theme");
  document.querySelector(".app").classList.remove("dark-theme");
  localStorage.removeItem("valexPrimaryColor");
  localStorage.removeItem("valexprimaryHoverColor");
  localStorage.removeItem("valexprimaryBorderColor");
  localStorage.removeItem("valexprimaryTransparent");
  localStorage.removeItem("valexdarkPrimaryColor");
  localStorage.removeItem("valextransparentPrimaryColor");
  localStorage.removeItem("valextransparentBgColor");

  document.querySelector("#myonoffswitch2").checked = false;
  document.querySelector("#myonoffswitch1").checked = false;
  document.querySelector("#myonoffswitchTransparent").checked = true;

  document.querySelector("html").style.removeProperty("--transparent-body");

}

export function bgimage2() {
  transparentStyle();
  document.querySelector("body").classList.add("bg-img2");
  document.querySelector("body").classList.remove("bg-img1");
  document.querySelector("body").classList.remove("bg-img3");
  document.querySelector("body").classList.remove("bg-img4");
  document.querySelector("body").classList.add("transparent-theme");
  document.querySelector(".app").classList.remove("light-theme");
  document.querySelector(".app").classList.remove("dark-theme");
  localStorage.setItem("valexBgImage", "bg-img2");
  document.querySelector("html").style.removeProperty("--transparent-body");


  localStorage.removeItem("valexPrimaryColor");
  localStorage.removeItem("valexprimaryHoverColor");
  localStorage.removeItem("valexprimaryBorderColor");
  localStorage.removeItem("valexprimaryTransparent");
  localStorage.removeItem("valexdarkPrimaryColor");
  localStorage.removeItem("valextransparentPrimaryColor");
  localStorage.removeItem("valextransparentBgColor");

  document.querySelector("#myonoffswitch2").checked = false;
  document.querySelector("#myonoffswitch1").checked = false;
  document.querySelector("#myonoffswitchTransparent").checked = true;

}

export function bgimage3() {
  document.querySelector("body").classList.add("bg-img3");
  document.querySelector("body").classList.remove("bg-img1");
  document.querySelector("body").classList.remove("bg-img2");
  document.querySelector("body").classList.remove("bg-img4");
  document.querySelector("body").classList.add("transparent-theme");
  document.querySelector(".app").classList.remove("light-theme");
  document.querySelector(".app").classList.remove("dark-theme");
  localStorage.setItem("valexBgImage", "bg-img3");
  document.querySelector("html").style.removeProperty("--transparent-body");
  transparentStyle();

  localStorage.removeItem("valexPrimaryColor");
  localStorage.removeItem("valexprimaryHoverColor");
  localStorage.removeItem("valexprimaryBorderColor");
  localStorage.removeItem("valexprimaryTransparent");
  localStorage.removeItem("valexdarkPrimaryColor");
  localStorage.removeItem("valextransparentPrimaryColor");
  localStorage.removeItem("valextransparentBgColor");

  document.querySelector("#myonoffswitch2").checked = false;
  document.querySelector("#myonoffswitch1").checked = false;
  document.querySelector("#myonoffswitchTransparent").checked = true;

}

export function bgimage4() {
  document.querySelector("body").classList.add("bg-img4");
  document.querySelector("body").classList.remove("bg-img1");
  document.querySelector("body").classList.remove("bg-img2");
  document.querySelector("body").classList.remove("bg-img3");
  document.querySelector("body").classList.add("transparent-theme");
  document.querySelector(".app").classList.remove("light-theme");
  document.querySelector(".app").classList.remove("dark-theme");
  localStorage.setItem("valexBgImage", "bg-img4");
  document.querySelector("html").style.removeProperty("--transparent-body");
  transparentStyle();

  localStorage.removeItem("valexPrimaryColor");
  localStorage.removeItem("valexprimaryHoverColor");
  localStorage.removeItem("valexprimaryBorderColor");
  localStorage.removeItem("valexprimaryTransparent");
  localStorage.removeItem("valexdarkPrimaryColor");
  localStorage.removeItem("valextransparentPrimaryColor");
  localStorage.removeItem("valextransparentBgColor");

  document.querySelector("#myonoffswitch2").checked = false;
  document.querySelector("#myonoffswitch1").checked = false;
  document.querySelector("#myonoffswitchTransparent").checked = true;
}

//TRANSPARENT BG-IMAGE STYLE END******************

// export function checkHoriMenu() {
//   let menuWidth = document.querySelector(".horizontal-main");
//   let menuItems = document.querySelector(".side-menu");
//   let mainSidemenuWidth = document.querySelector(".main-sidemenu");
//   let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
//   let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0]));
//   let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0]));
//   let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
//   if (document.querySelector(".main-body")?.classList.contains("ltr")) {
//     menuItems.style.marginRight = 0;
//   }
//   else {
//     menuItems.style.marginLeft = 0;
//   }

//   if (menuItems.scrollWidth - 2 < menuWidth?.offsetWidth - menuContainerWidth) {
//     document.querySelector(".slide-left")?.classList.add("d-none");
//     document.querySelector(".slide-right")?.classList.add("d-none");
//     document.querySelector(".slide-leftRTL")?.classList.add("d-none");
//     document.querySelector(".slide-rightRTL")?.classList.add("d-none");
//   } else if (marginLeftValue !== 0 || marginRightValue !== 0) {
//     document.querySelector(".slide-right")?.classList.remove("d-none");
//     document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
//   } else if (marginLeftValue !== -check || marginRightValue !== -check) {
//     document.querySelector(".slide-left")?.classList.remove("d-none");
//     document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
//   }
//   if (menuItems.scrollWidth - 2 > menuWidth?.offsetWidth - menuContainerWidth) {
//     document.querySelector(".slide-left")?.classList.remove("d-none");
//     document.querySelector(".slide-right")?.classList.remove("d-none");
//     document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
//     document.querySelector(".slide-rightRTL")?.classList.remove("d-none");
//   }
//   if (marginLeftValue === 0 || marginRightValue === 0) {
//     document.querySelector(".slide-left")?.classList.add("d-none");
//     document.querySelector(".slide-leftRTL")?.classList.add("d-none");
//   }
//   if (marginLeftValue !== 0 || marginRightValue !== 0) {
//     document.querySelector(".slide-left")?.classList.remove("d-none");
//     document.querySelector(".slide-leftRTL")?.classList.remove("d-none");
//   }
// }

export function handleThemeUpdate(cssVars) {
  const root = document.querySelector(":root");
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st, chunkSize) =>
  st.match(new RegExp(`.{${chunkSize}}`, "g"));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
  if (typeof a !== "undefined") {
    return a / 255;
  }
  if (typeof alpha != "number" || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

export function dynamicLightPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color, 0.9),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicDarkPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicTransparentPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicBgTransparentBackground(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName1 = `--transparent-${item.getAttribute("data-id5")}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color),
    });
  });
}
export function dynamicBgImgTransparentPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--primary-${item.getAttribute("data-id")}`;
    const cssPropName1 = `--primary-${item.getAttribute("data-id1")}`;
    const cssPropName2 = `--primary-${item.getAttribute("data-id2")}`;

    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}

function transparentStyle() {
  document.querySelector(".app").classList.remove("light-menu");
  document.querySelector(".app").classList.remove("dark-menu");
  document.querySelector(".app").classList.remove("color-menu");
  document.querySelector(".app").classList.remove("gradient-menu");
  document.querySelector(".app").classList.remove("light-header");
  document.querySelector(".app").classList.remove("color-header");
  document.querySelector(".app").classList.remove("dark-header");
  document.querySelector(".app").classList.remove("gradient-header");
}


export function name() {
  let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue("--primary-bg-color").trim();

  //get variable
  let myVarVal =
    localStorage.getItem("valexprimaryColor") ||
    localStorage.getItem("valexdarkPrimaryColor") ||
    localStorage.getItem("valextransparentPrimaryColor") ||
    localStorage.getItem("valextransparentBgColor") ||
    localStorage.getItem("valextransparent-bgImgPrimaryColor") ||
    primaryColorVal;

  let colorData = hexToRgba(myVarVal || "#0162e8", 0.1);
  document.querySelector("html").style.setProperty("--primary-1", colorData);

  let colorData1 = hexToRgba(myVarVal || "#0162e8", 0.2);
  document.querySelector("html").style.setProperty("--primary-2", colorData1);

  let colorData2 = hexToRgba(myVarVal || "#0162e8", 0.3);
  document.querySelector("html").style.setProperty("--primary-3", colorData2);

  let colorData3 = hexToRgba(myVarVal || "#0162e8", 0.5);
  document.querySelector("html").style.setProperty("--primary-5", colorData3);

  let colorData4 = hexToRgba(myVarVal || "#0162e8", 0.8);
  document.querySelector("html").style.setProperty("--primary-8", colorData4);
}
name();

export function localStorageBackUp() {
  let html = document.querySelector("html")?.style;
  let body = document.querySelector("body");

  if (localStorage.getItem('valexhorizontal')!=null) {
    document.querySelector(".main-header")?.classList.add("hor-header");
    document.querySelector(".app").classList.remove("sidebar-mini");
    document.querySelector(".main-header")?.classList.add("side-header");
    document.querySelector(".main-content")?.classList.remove("app-content");
    document.querySelector(".main-container ")?.classList.remove("container-fluid");
    document.querySelector(".app").classList.remove("sidenav-toggled");
    document.querySelector(".app").classList.remove("horizontal-hover");
    document.querySelector(".app").classList.add("horizontal");
    document.querySelector(".main-container ")?.classList.add("container");
    document.querySelector(".main-sidemenu")?.classList.add("container");
    document.querySelector(".main-content")?.classList.add("horizontal-content");
    document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
    document.querySelector(".side-app")?.classList.add("container");

    if (document.querySelector(".horizontal .side-menu") != null){
      let nowrapp = document.querySelector(".horizontal .side-menu")
      nowrapp.style.flexWrap = 'nowrap';
      document.querySelector("#myonoffswitch35").checked = true;  
    }


    // checkHoriMenu();
    Horizontalmenudefultclose();
    switcherArrowFn();
  }

  if (localStorage.getItem('valexhorizontalHover')!=null) {
    document.querySelector(".app").classList.add("horizontal-hover");
    document.querySelector(".app").classList.add("horizontal");
    document.querySelector(".main-content")?.classList.add("horizontal-content");
    document.querySelector(".main-container ")?.classList.add("container");
    document.querySelector(".main-header")?.classList.add("hor-header");
    document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
    document.querySelector(".main-sidemenu")?.classList.add("container");
    document.querySelector(".side-app")?.classList.add("container");

    document.querySelector("#slide-left")?.classList.remove("d-none");
    document.querySelector("#slide-right")?.classList.remove("d-none");
    document.querySelector(".main-content")?.classList.remove("app-content");
    document.querySelector(".main-container ")?.classList.remove("container-fluid");
    document.querySelector(".app")?.classList.remove("sidebar-mini");
    document.querySelector(".app")?.classList.remove("sidenav-toggled");
    if (document.querySelector("#myonoffswitch111") !=null) {
    document.querySelector("#myonoffswitch111").checked = true;
  }
    document
      .querySelector(".horizontal-hover", ".side-menu")
      ?.classList.add("flex-nowrap");
    let li = document.querySelectorAll(".side-menu", "li");
    li.forEach((e, i) => {
      if (e.classList.contains("is-expaned")) {
        let ele = [...e.children];
        ele.forEach((el, i) => {
          el.classList.remove("active");
          if (el.classList.contains("slide-menu")) {
            el.style = "";
            el.style.display = "none";
          }
        });
        e.classList.remove("is-expaned");
      }
    });
    // checkHoriMenu();
    Horizontalmenudefultclose();
    switcherArrowFn();
  }
  if (localStorage.getItem('valexdark')!=null) {
    if(document.querySelector("#myonoffswitch2") != null){
      document.querySelector("#myonoffswitch2").checked=true
      body.classList.add("dark-theme");
      // document.querySelector("#myonoffswitch8").checked = true;
      // document.querySelector("#myonoffswitch5").checked = true;

      body.classList.remove("transparent-theme");
      body.classList.remove("light-theme");
      body?.classList.remove("light-header");
      body?.classList.remove("color-header");
      body?.classList.remove("gradient-header");
      body?.classList.remove("light-menu");
      body?.classList.remove("color-menu");
      body?.classList.remove("gradient-menu");
      // dark()
    }
  }

  if (localStorage.getItem("valextransparent") != null) {
    const app = document.querySelector(".app")
    const body = document.querySelector("body")
    if (document.querySelector("#myonoffswitchTransparent") != null){
      document.querySelector("#myonoffswitchTransparent").checked = true
    }
    app.classList.add("transparent-theme");
    app.classList.remove("light-theme");

    app.classList.remove("dark-theme");
    body.classList.remove('bg-img1');
    app.classList.remove("bg-img2");
    app.classList.remove("bg-img3");
    app.classList.remove("bg-img4");
    app.classList.remove("light-menu");

    app.classList.remove("color-menu");
    app.classList.remove("dark-menu");
    app.classList.remove("gradient-menu");
    app.classList.remove("color-header");

    app.classList.remove("gradient-header");
    app.classList.remove("light-header");
    app.classList.remove("dark-header");
    if (document.querySelector("#myonoffswitch3") != null){
      document.querySelector("#myonoffswitch3").checked = false;
      document.querySelector("#myonoffswitch6").checked = false;
      document.querySelector("#myonoffswitch8").checked = false;
      document.querySelector("#myonoffswitch5").checked = false;
    }
  }
  if (localStorage.getItem("valexBgImage")!== null){
    document.body.classList.add(localStorage.getItem("valexBgImage"))
    document.body.classList.add("transparent-theme")
    localStorage.removeItem("valexlighttheme")
    localStorage.removeItem("valexdark")
    localStorage.removeItem("valextransparent")
  }
  if (localStorage.getItem('Boxed')){
    document.querySelector(".app").classList.remove("layout-fullwidth");
    document.querySelector(".app").classList.add("layout-boxed");
    document.querySelector("#myonoffswitch10").checked = true;

  }
  if (localStorage.getItem('Scrollable')){
    document.querySelector(".app").classList.remove("fixed-layout");
    document.querySelector(".app").classList.add("scrollable-layout");
    document.querySelector("#myonoffswitch12").checked = true;

  }
  if (localStorage.getItem('Fixed')){
    document.querySelector(".app").classList.add("fixed-layout");
    document.querySelector(".app").classList.remove("scrollable-layout");
    document.querySelector("#myonoffswitch11").checked = true;

  }

  if (localStorage.getItem('ColorMenu')){
    document.querySelector(".app").classList.remove("light-menu");
    document.querySelector(".app").classList.remove("dark-menu");
    document.querySelector(".app").classList.remove("gradient-menu");
    document.querySelector(".app").classList.add("color-menu");
    document.querySelector("#myonoffswitch4").checked = true;
  }

  if (localStorage.getItem('LightMenu')){
    document.querySelector(".app").classList.remove("color-menu");
    document.querySelector(".app").classList.remove("dark-menu");
    document.querySelector(".app").classList.remove("gradient-menu");
    document.querySelector(".app").classList.add("light-menu");
    document.querySelector("#myonoffswitch3").checked = true;

  }

  if (localStorage.getItem('DarkMenu')){
    document.querySelector(".app").classList.remove("color-menu");
    document.querySelector(".app").classList.remove("light-menu");
    document.querySelector(".app").classList.remove("gradient-menu");
    document.querySelector(".app").classList.add("dark-menu");
    document.querySelector("#myonoffswitch5").checked = true;

  }

  if (localStorage.getItem('GradientMenu')){
    document.querySelector(".app").classList.remove("color-menu");
    document.querySelector(".app").classList.remove("light-menu");
    document.querySelector(".app").classList.remove("dark-menu");
    document.querySelector(".app").classList.add("gradient-menu");
    document.querySelector("#myonoffswitch25").checked = true;

  }

  if (localStorage.getItem('Colorheader')){
    document.querySelector(".app").classList.remove("light-header");
    document.querySelector(".app").classList.remove("dark-header");
    document.querySelector(".app").classList.remove("gradient-header");
    document.querySelector(".app").classList.add("color-header");
    document.querySelector("#myonoffswitch7").checked = true;

  }

  if (localStorage.getItem('Lightheader')){
    document.querySelector(".app").classList.remove("color-header");
    document.querySelector(".app").classList.remove("dark-header");
    document.querySelector(".app").classList.remove("gradient-header");
    document.querySelector(".app").classList.add("light-header");
    document.querySelector("#myonoffswitch6").checked = true;

  }
  if (localStorage.getItem('Darkheader')){
    document.querySelector(".app").classList.remove("color-header");
    document.querySelector(".app").classList.remove("light-header");
    document.querySelector(".app").classList.remove("gradient-header");
    document.querySelector(".app").classList.add("dark-header");
    document.querySelector("#myonoffswitch8").checked = true;

  }

  if (localStorage.getItem('gradientheader')){
    document.querySelector(".app").classList.remove("color-header");
    document.querySelector(".app").classList.remove("light-header");
    document.querySelector(".app").classList.remove("dark-header");
    document.querySelector(".app").classList.add("gradient-header");
    document.querySelector("#myonoffswitch26").checked = true;

  }

  if (localStorage.getItem("valexprimaryColor") !== null) {
    body?.classList.add("light-theme");
    if (document.getElementById("myonoffswitch1") != null){
    document.getElementById("myonoffswitch1").checked = true;
    }
    body?.classList.remove("dark-theme");
    body?.classList.remove("transparent-theme");
    
    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("valexprimaryColor")
    );
    html?.setProperty(
      "--primary-bg-hover",
      localStorage.getItem("valexprimaryColor")
    );
    html?.setProperty(
      "--primary-bg-border",
      localStorage.getItem("valexprimaryColor")
    );

    
  }
  if (localStorage.getItem("valexdarkPrimaryColor") !== null) {
    body?.classList.add("dark-theme");

    if(document.getElementById("myonoffswitch2") != null){
      document.getElementById("myonoffswitch2").checked = true;
    }

    body?.classList.remove("light-theme");
    body?.classList.remove("transparent-theme");

    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("valexdarkPrimaryColor")
    );
    html?.setProperty(
      "--primary-bg-hover",
      localStorage.getItem("valexdarkPrimaryColor")
    );
    html?.setProperty(
      "--primary-bg-border",
      localStorage.getItem("valexdarkPrimaryColor")
    );
  }
  if (localStorage.getItem("valextransparentPrimaryColor") !== null) {
    body?.classList.add("transparent-theme");
    document.getElementById("myonoffswitchTransparent").checked = true;

    body?.classList.remove("light-theme");
    body?.classList.remove("dark-theme");
    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("valextransparentPrimaryColor")
    );
  }
  if (localStorage.getItem("valextransparentBgColor") !== null) {
    const body = document.body;
    const html = document.documentElement;
    const transparentBgColor = localStorage.getItem("valextransparentBgColor");
    const lightTheme = localStorage.getItem("valexlighttheme");
    const darkTheme = localStorage.getItem("valexdark");

    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
    body.classList.remove("transparent-theme");

    html.style.setProperty("--dark-body", transparentBgColor);
    html.style.setProperty("--dark-theme", transparentBgColor);
    html.style.setProperty("--light-theme", lightTheme);
    html.style.setProperty("--dark", darkTheme);
}
  if (
    localStorage.getItem("valextransparent-bgImgPrimaryColor") !== null ||
    localStorage.getItem("valexBgImage") !== null
  ) {
    body?.classList.add("transparent-theme");
    document.getElementById("myonoffswitchTransparent");

    body?.classList.remove("light-theme");
    body?.classList.remove("dark-theme");
    let img = localStorage.getItem("valexBgImage");
    html?.setProperty(
      "--primary-bg-color",
      localStorage.getItem("valextransparent-bgImgPrimaryColor")
    );
    body?.classList.add(img);
  }
  if (!(localStorage.getItem('valexrtl')!=null)) {
    addOrRemoveCss(ltr.default);
  }
  if (localStorage.getItem('valexrtl')!=null) {
    document.querySelector("body").classList.add("rtl");
    document.querySelector("html[lang=en]").setAttribute("dir", "rtl");
    addOrRemoveCss(rtl.default);
    // document.getElementById("bootstrapLink")?.setAttribute("href", `${import.meta.env.BASE_URL === 'production' ? "/" : "/src/assets"}/plugins/bootstrap/css/bootstrap.rtl.min.css`)
    document.querySelector("body").classList.remove("ltr");
    if(document.querySelector("#myonoffswitch55") != null){
    document.querySelector("#myonoffswitch55").checked = true;  
    }
  }

  if(localStorage.getItem("BodyStyle1") != null){
    document.querySelector(".app").classList.add("body-style1");
    if (document.querySelector("#myonoffswitch06") != null){
      document.querySelector("#myonoffswitch06").checked =  true
    }
  }

  if(localStorage.getItem("sidebar-img")!= null){
    document.body.classList.add(localStorage.getItem("sidebar-img"))
  }
  if (localStorage.valexlighttheme) {
    if (document.getElementById("myonoffswitch1") != null){
      document.getElementById("myonoffswitch1").checked = true
    }

    // LightTheme()
  }
}
//landingswitcher
export function localStorageBackUp1() {
  let html = document.querySelector("html")?.style;
  let body = document.querySelector("body");

  if (localStorage.getItem('valexhorizontal')!=null) {
    document.querySelector(".main-header")?.classList.add("hor-header");
    document.querySelector(".app").classList.remove("sidebar-mini");
    document.querySelector(".main-header")?.classList.add("side-header");
    document.querySelector(".main-content")?.classList.remove("app-content");
    document.querySelector(".main-container ")?.classList.remove("container-fluid");
    document.querySelector(".app").classList.remove("sidenav-toggled");
    document.querySelector(".app").classList.remove("horizontal-hover");
    document.querySelector(".app").classList.add("horizontal");
    document.querySelector(".main-container ")?.classList.add("container");
    document.querySelector(".main-sidemenu")?.classList.add("container");
    document.querySelector(".main-content")?.classList.add("horizontal-content");
    document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
    document.querySelector(".side-app")?.classList.add("container");

    if (document.querySelector(".horizontal .side-menu") != null){
      let nowrapp = document.querySelector(".horizontal .side-menu")
      nowrapp.style.flexWrap = 'nowrap';
      // document.querySelector("#myonoffswitch35").checked = true;  
    }


    // checkHoriMenu();
    Horizontalmenudefultclose();
    switcherArrowFn();
  }

  if (localStorage.getItem('valexhorizontalHover')!=null) {
    document.querySelector(".app").classList.add("horizontal-hover");
    document.querySelector(".app").classList.add("horizontal");
    document.querySelector(".main-content")?.classList.add("horizontal-content");
    document.querySelector(".main-container ")?.classList.add("container");
    document.querySelector(".main-header")?.classList.add("hor-header");
    document.querySelector(".app-sidebar")?.classList.add("horizontal-main");
    document.querySelector(".main-sidemenu")?.classList.add("container");
    document.querySelector(".side-app")?.classList.add("container");

    document.querySelector("#slide-left")?.classList.remove("d-none");
    document.querySelector("#slide-right")?.classList.remove("d-none");
    document.querySelector(".main-content")?.classList.remove("app-content");
    document.querySelector(".main-container ")?.classList.remove("container-fluid");
    document.querySelector(".app")?.classList.remove("sidebar-mini");
    document.querySelector(".app")?.classList.remove("sidenav-toggled");
    if (document.querySelector("#myonoffswitch111") !=null) {
    document.querySelector("#myonoffswitch111").checked = true;
  }
    document
      .querySelector(".horizontal-hover", ".side-menu")
      ?.classList.add("flex-nowrap");
    let li = document.querySelectorAll(".side-menu", "li");
    li.forEach((e, i) => {
      if (e.classList.contains("is-expaned")) {
        let ele = [...e.children];
        ele.forEach((el, i) => {
          el.classList.remove("active");
          if (el.classList.contains("slide-menu")) {
            el.style = "";
            el.style.display = "none";
          }
        });
        e.classList.remove("is-expaned");
      }
    });
    // checkHoriMenu();
    Horizontalmenudefultclose();
    switcherArrowFn();
  }
  if (localStorage.getItem('valexdark')!=null) {
    if(document.querySelector("#myonoffswitch2") != null){
      document.querySelector("#myonoffswitch2").checked=true
      body.classList.add("dark-theme");
      // document.querySelector("#myonoffswitch8").checked = true;
      // document.querySelector("#myonoffswitch5").checked = true;

      body.classList.remove("transparent-theme");
      body.classList.remove("light-theme");
      body?.classList.remove("light-header");
      body?.classList.remove("color-header");
      body?.classList.remove("gradient-header");
      body?.classList.remove("light-menu");
      body?.classList.remove("color-menu");
      body?.classList.remove("gradient-menu");
      // dark()
    }
  }

  if (localStorage.getItem("valextransparent") != null) {
    const app = document.querySelector(".app")
    const body = document.querySelector("body")
    if (document.querySelector("#myonoffswitchTransparent") != null){
      document.querySelector("#myonoffswitchTransparent").checked = true
    }
    app.classList.add("transparent-theme");
    app.classList.remove("light-theme");

    app.classList.remove("dark-theme");
    body.classList.remove('bg-img1');
    app.classList.remove("bg-img2");
    app.classList.remove("bg-img3");
    app.classList.remove("bg-img4");
    app.classList.remove("light-menu");

    app.classList.remove("color-menu");
    app.classList.remove("dark-menu");
    app.classList.remove("gradient-menu");
    app.classList.remove("color-header");

    app.classList.remove("gradient-header");
    app.classList.remove("light-header");
    app.classList.remove("dark-header");
    if (document.querySelector("#myonoffswitch3") != null){
      document.querySelector("#myonoffswitch3").checked = false;
      document.querySelector("#myonoffswitch6").checked = false;
      document.querySelector("#myonoffswitch8").checked = false;
      document.querySelector("#myonoffswitch5").checked = false;
    }
  }
  if (localStorage.getItem("valexBgImage")!== null){
    document.body.classList.add(localStorage.getItem("valexBgImage"))
    document.body.classList.add("transparent-theme")
    localStorage.removeItem("valexlighttheme")
    localStorage.removeItem("valexdark")
    localStorage.removeItem("valextransparent")
  }
 
  if (!(localStorage.getItem('valexrtl')!=null)) {
    addOrRemoveCss(ltr.default);
  }
  if (localStorage.getItem('valexrtl')!=null) {
    document.querySelector("body").classList.add("rtl");
    document.querySelector("html[lang=en]").setAttribute("dir", "rtl");
    addOrRemoveCss(rtl.default);
    document.querySelector("body").classList.remove("ltr");
    if(document.querySelector("#myonoffswitch55") != null){
    document.querySelector("#myonoffswitch55").checked = true;  
    }
  }

  if(localStorage.getItem("BodyStyle1") != null){
    document.querySelector(".app").classList.add("body-style1");
    if (document.querySelector("#myonoffswitch06") != null){
      document.querySelector("#myonoffswitch06").checked =  true
    }
  }

  if(localStorage.getItem("sidebar-img")!= null){
    document.body.classList.add(localStorage.getItem("sidebar-img"))
  }
  if (localStorage.valexlighttheme) {
    if (document.getElementById("myonoffswitch1") != null){
      document.getElementById("myonoffswitch1").checked = true
    }

    // LightTheme()
  }
}
export function switcherArrowFn() {
  let slideLeft = document.querySelector(".slide-left");
  let slideRight = document.querySelector(".slide-right");
  // used to remove is-expanded class and remove class on clicking arrow buttons
  function slideClick() {
    let slide = document.querySelectorAll(".slide");
    let sideMenuitem = document.querySelectorAll(".slide-menu__item");
    let slideMenu = document.querySelectorAll(".slide-menu");
    slide.forEach((element, _index) => {
      if (element.classList.contains("is-expanded") === true) {
        element.classList.remove("is-expanded");
      }
    });
    sideMenuitem.forEach((element, _index) => {
      if (element.classList.contains("active") === true) {
        element.classList.remove("active");
      }
    });
    slideMenu.forEach((element, _index) => {
      if (element) {
        element.style.display = "none";
      }
    });
  }
  // horizontal arrows
  window.addEventListener("resize", () => {
    let menuWidth = document.querySelector(".horizontal-main");
    let menuItems = document.querySelector(".side-menu");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems)?.marginLeft.split("px")[0]));
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems)?.marginRight.split("px")[0]));
    let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if (menuWidth?.offsetWidth - menuContainerWidth > menuItems.scrollWidth) {
      document.querySelector(".slide-left")?.classList.add("d-none");
      document.querySelector(".slide-right")?.classList.add("d-none");
      menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = 0;

    }
    else {
      document.querySelector(".slide-right")?.classList.remove("d-none");
    }

    if (document.querySelector("html")?.getAttribute("dir") === "rtl") {
      if ((Math.abs(marginRightValue) < Math.abs(check)) === false && (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
      ) {
        menuItems.style.marginRight = -check + 'px';
        document.querySelector(".slide-left")?.classList.remove("d-none");
      } else {
        menuItems.style.marginRight = 0;
      }
    } else {
      if (
        (Math.abs(marginLeftValue) < Math.abs(check)) === false &&
        (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth)
      ) {
        menuItems.style.marginLeft = -check + 'px';
        document.querySelector(".slide-right")?.classList.add("d-none");
      } else {
        menuItems.style.marginLeft = 0;
      }
    }
  });

  if (
    !document.querySelector("body").classList.contains("login-img") &&
    !document.querySelector("body").classList.contains("error-bg")
  ) {
    // checkHoriMenu();
  }

  slideLeft?.addEventListener("click", () => {
    slideClick();
    let menuWidth = document.querySelector(".horizontal-main");
    let menuItems = document.querySelector(".side-menu");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) + 100;
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) + 100;

    if (document.querySelector('html').getAttribute('dir') === "rtl") {
      if (marginRightValue < 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = Number(menuItems.style.marginRight.split("px")[0]) + 100 + "px";
        document.querySelector(".slide-right")?.classList.remove("d-none");
        document.querySelector(".slide-left")?.classList.remove("d-none");
      } else {
        document.querySelector(".slide-left")?.classList.add("d-none");
      }

      if (marginRightValue >= 0) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = "0px";
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
    }
    else {
      if (marginLeftValue < 0) {
        menuItems.style.marginLeft = Number(menuItems.style.marginLeft.split("px")[0]) + 100 + "px";
        if (menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth) {
          document.querySelector(".slide-left")?.classList.remove("d-none");
          document.querySelector(".slide-right")?.classList.remove("d-none");
        }
      }
      else {
        document.querySelector(".slide-left")?.classList.add("d-none");
      }

      if (marginLeftValue >= 0) {
        menuItems.style.marginLeft = "0px";
        if (menuWidth?.offsetWidth < menuItems.scrollWidth) {
          document.querySelector(".slide-left")?.classList.add("d-none");
        }
      }

      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
    }
  });
  slideRight?.addEventListener("click", () => {
    slideClick();
    let menuWidth = document.querySelector(".horizontal-main");
    let menuItems = document.querySelector(".side-menu");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginLeft.split("px")[0])) - 100;
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(menuItems).marginRight.split("px")[0])) - 100;
    let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if (document.querySelector('html').getAttribute('dir') === "rtl") {
      if (marginRightValue > -check) {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight =
          Number(menuItems.style.marginRight.split("px")[0]) - 100 + "px";
      } else {
        menuItems.style.marginLeft = "0px";
        menuItems.style.marginRight = -check + "px";
        document.querySelector(".slide-right")?.classList.add("d-none");
        document.querySelector(".slide-left")?.classList.remove("d-none");
      }

      if (marginRightValue !== 0) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
    }
    else {
      if (marginLeftValue > -check) {
        // menuItems.style.marginRight = 0;
        menuItems.style.marginLeft =
          Number(menuItems.style.marginLeft.split("px")[0]) - 100 + "px";
      } else {
        // menuItems.style.marginRight = 0;
        menuItems.style.marginLeft = -check + "px";
        document.querySelector(".slide-right")?.classList.add("d-none");
      }
      if (marginLeftValue !== 0) {
        document.querySelector(".slide-left")?.classList.remove("d-none");
      }
      // to remove dropdown when clicking arrows in horizontal menu
      let subNavSub = document.querySelectorAll(".sub-nav-sub");
      subNavSub.forEach((e) => {
        e.style.display = "";
      });
      let subNav = document.querySelectorAll(".nav-sub");
      subNav.forEach((e) => {
        e.style.display = "";
      });
      //
    }
  });
}

export const responsiveSidebarclose = () => {
  //leftsidemenu
  document.querySelector(".app").classList.remove("sidenav-toggled");
  //rightsidebar
  document.querySelector(".sidebar-right").classList.remove("sidebar-open");
  //swichermainright
  document.querySelector(".demo_changer").classList.remove("active");
  document.querySelector(".demo_changer").style.right = "-270px";
};


window?.addEventListener("load", () => {
  localStorageBackUp();
});


export function Horizontalmenudefultclose() {
  if (document.querySelector(".horizontal")) {
    let slide = document.querySelectorAll(".slide");
    let sideMenuitem = document.querySelectorAll(".slide-menu__item");
    let slideMenu = document.querySelectorAll(".slide-menu");
    slide.forEach((element) => {
      if (element.classList.contains("is-expanded") === true) {
        element.classList.remove("is-expanded");
      }
    });
    sideMenuitem.forEach((element) => {
      if (element.classList.contains("active") === true) {
        element.classList.remove("active");
      }
    });
    slideMenu.forEach((element) => {
      if (element) {
        element.style.display = "none";
      }
    });
  }
}

export function leftsideBGImg1(img) {
  switch (img) {
    case "leftbgimage1":
      document.body.classList.add("leftbgimage1")
      document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage4","leftbgimage5")
      break;
      
    case "leftbgimage2":
      document.body.classList.add("leftbgimage2")
      document.body.classList.remove("leftbgimage1","leftbgimage3","leftbgimage4","leftbgimage5")
      break;

    case "leftbgimage3":
      document.body.classList.add("leftbgimage3")
      document.body.classList.remove("leftbgimage2","leftbgimage1","leftbgimage4","leftbgimage5")
      break;

    case "leftbgimage4":
      document.body.classList.add("leftbgimage4")
      document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage1","leftbgimage5")
      break;

    case "leftbgimage5":
      document.body.classList.add("leftbgimage5")
      document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage4","leftbgimage1")
      break;

    default:
      document.body.classList.add("leftbgimage1")
      document.body.classList.remove("leftbgimage2","leftbgimage3","leftbgimage4","leftbgimage5");
      break;
  }
}
// Sticky class //
export  const horizontalmenusticky = () => {
  if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
    let Scolls = document.querySelectorAll(".sticky");
    Scolls.forEach((e) => {
      e.classList.add("sticky-pin");
    });
  } else {
    let Scolls = document.querySelectorAll(".sticky");
    Scolls.forEach((e) => {
      e.classList.remove("sticky-pin");
    });
  }
};
window.addEventListener("", horizontalmenusticky);