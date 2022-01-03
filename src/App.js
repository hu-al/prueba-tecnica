import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fakeLogin } from "./actions/fakeLogin";
import fetchEmployees from "./actions/fetchEmployees";

function App() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.fetchEmployees.data);
  const resolved = useSelector((state) => state.fetchEmployees.success);
  console.log("afuera");
  useEffect(() => {
    console.log("efecto");
    dispatch(fakeLogin("aldo", "1234"));
  }, []);

  if (!resolved) {
    return <div>Not resoled</div>;
  }
  return <div>hola</div>;
}

export default App;
