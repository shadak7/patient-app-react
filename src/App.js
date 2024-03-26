import { useState } from "react";
import useFetch from "./useFetch";
import Table from "./PatientTable/Table";
import "./App.css";
import RangeSlider from "./RangeSlider";
const App = () => {
  const { data, loading, error } = useFetch('https://hapi.fhir.org/baseR4/Patient?_pretty=true');
  const [rangeValue, setRangeValue] = useState([0, 100]);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  

  const handleChange = (event, newValue) => {
    setRangeValue(newValue);
  };
  return (
    <main>
      <RangeSlider value={rangeValue} handleChange={handleChange}/>
      <table className="tb_patient_info" width="100%" cellPadding="0" cellSpacing="0">
      <Table data={data} ageRange={rangeValue}/>
      </table>
    </main>
  )
}

export default App;