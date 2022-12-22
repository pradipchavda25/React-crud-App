import TableData from "./components/Table";
import "./App.css";
import { useState } from "react";
import UserData from "./components/Form";

function App() {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(null);

  const handleSubmit = (formValues) => {
    let newData = [...data];

    if (editing !== null) {
      newData = newData.map((d, index) => {
        if (index === editing) {
          return formValues;
        } else {
          return d;
        }
      });
    } else {
      newData.push(formValues);
    }

    setData(newData);
    setEditing(null);
  };

  const removeRow = (id) => {
    const newData = data.filter((d, index) => index !== id);
    setData(newData);
  };

  return (
    <div className="App">
      <h2>React CRUD App</h2>
      <UserData onSubmit={handleSubmit} defaultValue={data[editing]} />
      <TableData
        data={data}
        onEdit={(id) => setEditing(id)}
        onDelete={removeRow}
      />
    </div>
  );
}

export default App;
