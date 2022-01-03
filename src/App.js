import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Employees from "./components/Employees";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="employees" element={<Employees />} />
        <Route path="upload" element={<Upload />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
