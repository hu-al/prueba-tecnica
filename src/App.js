import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fakeLogin } from "./actions/fakeLogin";
import fetchEmployees from "./actions/fetchEmployees";
import sendEmployee from "./actions/sendEmployee";

function App() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.fetchEmployees.data);
  const resolved = useSelector((state) => state.fetchEmployees.success);
  console.log("afuera");

  useEffect(() => {
    console.log("efecto");
    dispatch(
      sendEmployee({
        name: "Pablo",
        last_name: "Ramirez",
        birthday: "2000/01/01",
      })
    );
  }, []);

  const handleClick = () => {
    console.log("click");
    dispatch(fetchEmployees());
  };

  return (
    <div>
      <button onClick={handleClick}>Empleados</button>
    </div>
  );
}

export default App;
