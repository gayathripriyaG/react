import React from "react";

export const Form = ({data,setData,List,tableData,setTableData}) => {
 
  let fileRef = React.useRef();
  const handleChange = (e) => {
    let { name, value, type, checked } = e.currentTarget;
    if (type === "file") {
      console.log(fileRef.current.files[0]);
    }
    value = type === "checkbox" ? checked : value;
    setData({
      ...data,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setTableData(data)
    setData(List)
  };
  return (
    <>
      <h1>User Details Forms</h1>
      <form onSubmit={handleSubmit}>
          <label>Name</label>
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter your Name"
        />
        <br />
      
        <label>Age</label>
        <input
          name="age"
          value={data.age}
          onChange={handleChange}
          type="text"
          placeholder="Enter your Age"
        />
        <br />
     
        <label>Address</label>
        <input
          name="address"
          value={data.address}
          onChange={handleChange}
          type="text"
          placeholder="Enter your Address"
        />
        <br />
      
        <label>Department </label>
        <select
          name="Department"
          value={data.Department}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="HR">HR</option>
          <option value="Marketing">Marketing</option>
          <option value="Operations">Operations</option>
          <option value="Finance">Finance</option>
        </select>
        <br />
     
        <label>Is married</label>
        <br />
        <input
          name="isMarried"
          type="checkbox"
          checked={data.isMarried}
          onChange={handleChange}
        />
        <label>Yes</label>
        <br />

   
        <input type="file" ref={fileRef} onChange={handleChange} />
        <br />
    
        <input type="submit" />
      </form>
    </>
  );
};
