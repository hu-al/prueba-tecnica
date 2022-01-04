import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable, usePagination } from "react-table";
import fetchEmployees from "../actions/fetchEmployees";
import { Button } from "react-bootstrap";
import styles from "./EmployeesTable.module.css";

const EmployeesTable = () => {
  const employees = useSelector((state) => state.fetchEmployees);
  const dispatch = useDispatch();

  console.log("employees", employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const data = useMemo(
    () => (employees.success ? employees.data : []),
    [employees.success]
  );

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Nombre",
        accessor: "name",
      },
      {
        Header: "Apellido",
        accessor: "last_name",
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <div className={styles.employeesTable}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </Button>
        <span>
          Página {pageIndex + 1} de {pageOptions.length}
        </span>
      </div>
    </div>
  );
};

export default EmployeesTable;
