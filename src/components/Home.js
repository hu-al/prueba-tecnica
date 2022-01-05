import { useSelector } from "react-redux";

const Home = () => {
  const name = useSelector((state) => state.fakeLogin.name);
  const isLogged = useSelector((state) => state.fakeLogin.isLogged);
  if (isLogged) return <div>Bienvenido, {name}</div>;

  return <div>Prueba técnica</div>;
};

export default Home;
