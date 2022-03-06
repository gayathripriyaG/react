import { useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { Table } from './Components/Table';

function App() {

  let List = {
    name: "",
    age: "",
    address: "",
    Department: "",
    isMarried: ""
  };
  const [data, setData] = useState(List);
  const [tableData,setTableData] = useState(List)
  
  return (
    <div className="App">
      <Form data = {data} setData = {setData} List = {List} tableData={tableData} setTableData={setTableData}/>
      <Table  tableData= {tableData} setTableData={setTableData}/>
    </div>
  );
}

export default App;