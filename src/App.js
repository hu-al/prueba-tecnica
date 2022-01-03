import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Employees from "./components/Employees";
import styles from "./App.module.css";
import AuthCheck from "./components/AuthCheck";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.fakeLogin.isLogged);

  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="employees"
          element={
            <AuthCheck>
              <Employees />
            </AuthCheck>
          }
        />
        <Route
          path="upload"
          element={
            <AuthCheck>
              <Upload />
            </AuthCheck>
          }
        />
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={<Navigate to={isLogged ? "/employees" : "/"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
