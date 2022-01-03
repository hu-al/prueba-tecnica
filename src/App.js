import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchEmployees from "./actions/fetchEmployees";

function App() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.fetchEmployees.data.employees);
  const resolved = useSelector((state) => state.fetchEmployees.success);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  if (!resolved) {
    return <div>Not resoled</div>;
  }
  return (
    <div>
      {employees.map((item) => (
        <div>{JSON.stringify(item)}</div>
      ))}
    </div>
  );
}

export default App;
