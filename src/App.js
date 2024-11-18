import { createContext, useEffect, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export const PostContext = createContext();

function App() {
  const [language, setLanguage] = useState("pt");
  const [darkMode, setDarkMode] = useState(false);

  // const [isHidden, setIsHidden] = useState(false);

  const scrollToTop = useRef(null);

  function handleLanguageChange(lang) {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  }

  function handleToggle() {
    if (darkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element) => {
      if (element.getAttribute("data-lang") === language) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  }, [language]);

  const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    setDarkMode(true);
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    setDarkMode(false);
    localStorage.setItem("darkMode", "disabled");
  };

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        scrollToTop.current.style.display = "block";
      } else {
        scrollToTop.current.style.display = "none";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // useEffect(() => {
  //   const handlePageLoad = () => {
  //     setIsHidden(true);
  //   };

  //   window.addEventListener("load", handlePageLoad);

  //   return () => {
  //     window.removeEventListener("load", handlePageLoad);
  //   };
  // }, []);

  return (
    <PostContext.Provider
      value={{ language, darkMode, handleLanguageChange, handleToggle }}
    >
      <Header />
      <Main />
      <Footer />

      {/* <div className={`loader ${isHidden ? "loader--hidden" : ""}`}>
        A carregar...
      </div> */}

      <button
        ref={scrollToTop}
        onClick={scrollTopFunction}
        id="scrollToTopBtn"
        title="Go to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </PostContext.Provider>
  );
}

export default App;
