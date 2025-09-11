// import { Route, Routes, Outlet, useLocation } from "react-router-dom";
// import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import React, { useState, useEffect } from "react";
// import NotFoundPage from "./pages/NotFoundPages/NotFoundPage";
// import HomePage from "./pages/HomePage/HomePage";
// // import ProjectsList from "./components/ProjectsList/ProjectsList";
// import ProjectPage from "./pages/ProjectPage/ProjectPage"; // Исправленный путь импорта
// import AboutPage from "./pages/AboutPage/AboutPage";
// import ContactsPage from "./pages/ContactsPage/ContactsPage";

// import ItProjects from "./pages/ItProjectsPaje/ItProjects";

// import ArtsPages from "./pages/ArtsPages/ArtsPages";
// import ArtItemPage from "./pages/ArtItemPage/ArtItemPage";
// import StartPage from "./pages/StartPage/StartPage";

// ///////////////////////////////////////Dark and light themes:

// ///////////////////////////////////////
// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// };

// function App() {
//   // eslint-disable-next-line no-unused-vars
//   const [showCopyright, setCopyright] = useState(false); // eslint-disable-next-line

//   useEffect(() => {
//     const handleContextMenu = (e) => {
//       e.preventDefault(); // Предотвращаем отображение контекстного меню

//       // Отображаем сообщение
//       showCopyrightMessage(e.clientX, e.clientY);

//       // Или выполнить другие действия, которые вам нужны
//     };

//     // Добавляем обработчик контекстного меню к глобальному объекту window
//     window.addEventListener("contextmenu", handleContextMenu);

//     // Убираем обработчик при размонтировании компонента
//     return () => {
//       window.removeEventListener("contextmenu", handleContextMenu);
//     };
//   }, []);

//   const showCopyrightMessage = (x, y) => {
//     // Создаем элемент сообщения
//     const message = document.createElement("div");
//     message.textContent = "© Morozov";

//     // Стили для компактного и ненавязчивого вида
//     Object.assign(message.style, {
//       position: "fixed",
//       top: `${y}px`,
//       left: `${x}px`,
//       background: "rgba(0, 0, 0, 0.5)",
//       color: "white",
//       padding: "3px 6px",
//       fontSize: "11px",
//       borderRadius: "3px",
//       pointerEvents: "none",
//       opacity: "0.8",
//       transition: "opacity 0.3s",
//     });

//     document.body.appendChild(message);

//     // Плавное исчезновение и удаление
//     setTimeout(() => {
//       message.style.opacity = "0";
//       setTimeout(() => document.body.removeChild(message), 300);
//     }, 800);
//   };

//   return (
//     <div>
//       <div className="wrapper_app">
//         <Header />
//         <ScrollToTop />
//       </div>
//       <Routes>
//         {/* <Route path="/start" element={<StartPage />} /> */}
//         <Route path="/portfolio" element={<StartPage />} />
//         {/* <Route path="/portfolio" element={<HomePage />} /> */}
//         <Route path="/designe" element={<HomePage />} />
//         {/* <Route exact path="/" element={<ProjectsList />} /> */}
//         <Route path="/project/:projectId" element={<ProjectPage />} />
//         <Route path="/itProjects" element={<ItProjects />} />
//         <Route path="/arts" element={<ArtsPages />} />
//         {/* <Route path="/arts/:category/:artId" element={<ArtItemPage />} /> */}
//         <Route path="/arts/:artId" element={<ArtItemPage />} />

//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contacts" element={<ContactsPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//       <div className="wrapper_app">
//         <Outlet />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;
// ...........................................

import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";
import NotFoundPage from "./pages/NotFoundPages/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import ItProjects from "./pages/ItProjectsPaje/ItProjects";
import ArtsPages from "./pages/ArtsPages/ArtsPages";
import ArtItemPage from "./pages/ArtItemPage/ArtItemPage";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  // 🌙🔆 Темная и светлая темы
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      showCopyrightMessage(e.clientX, e.clientY);
    };

    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const showCopyrightMessage = (x, y) => {
    const message = document.createElement("div");
    message.textContent = "© Morozov";

    Object.assign(message.style, {
      position: "fixed",
      top: `${y}px`,
      left: `${x}px`,
      background: "rgba(0, 0, 0, 0.5)",
      color: "white",
      padding: "3px 6px",
      fontSize: "11px",
      borderRadius: "3px",
      pointerEvents: "none",
      opacity: "0.8",
      transition: "opacity 0.3s",
    });

    document.body.appendChild(message);

    setTimeout(() => {
      message.style.opacity = "0";
      setTimeout(() => document.body.removeChild(message), 300);
    }, 800);
  };

  return (
    <div>
      {/* Кнопки переключения темы */}
      <div className="theme-switcher">
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>

      <div className="wrapper_app">
        <Header />
        <ScrollToTop />
      </div>

      <Routes>
        <Route path="/portfolio" element={<StartPage />} />
        <Route path="/designe" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
        <Route path="/itProjects" element={<ItProjects />} />
        <Route path="/arts" element={<ArtsPages />} />
        <Route path="/arts/:artId" element={<ArtItemPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <div className="wrapper_app">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
