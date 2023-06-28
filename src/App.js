import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import NotFoundPage from "./pages/NotFoundPages/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import ProjectPage from "./pages/ProjectPage/ProjectPage"; // Исправленный путь импорта
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  // eslint-disable-next-line no-unused-vars
  const [showCopyright, setCopyright] = useState(false); // eslint-disable-next-line

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault(); // Предотвращаем отображение контекстного меню

      // Отображаем сообщение
      showCopyrightMessage(e.clientX, e.clientY);

      // Или выполнить другие действия, которые вам нужны
    };

    // Добавляем обработчик контекстного меню к глобальному объекту window
    window.addEventListener("contextmenu", handleContextMenu);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const showCopyrightMessage = (x, y) => {
    // Устанавливаем состояние, чтобы показать сообщение
    setCopyright(true);

    // Устанавливаем таймер для скрытия сообщения через 1 секунду
    setTimeout(() => {
      // Скрываем сообщение
      setCopyright(false);
    }, 1000);

    // Создаем элемент сообщения
    const message = document.createElement("div");
    const text = document.createElement("span");

    message.style.position = "fixed";
    message.style.top = `${y}px`;
    message.style.left = `${x}px`;
    message.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    message.style.padding = "5px";
    message.style.fontSize = "13px";
    message.style.pointerEvents = "none";

    text.textContent = "© Copyright Morozov";
    text.style.verticalAlign = "middle";

    message.appendChild(text);
    document.body.appendChild(message);

    // Удаляем сообщение из DOM после 1 секунды
    setTimeout(() => {
      document.body.removeChild(message);
    }, 1000);
  };

  return (
    <div className="wrapper_app">
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route exact path="/" element={<ProjectsList />} />{" "}
        <Route path="/project/:projectId" element={<ProjectPage />} />{" "}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
