// react style 1 example
import './App.css';
function App() {
  return (
    <div className="App">
      <District name="Noakhali" speciality="Bivag"  ></District>
      <District name="Chittagong" speciality="SeaBeach"></District>
      <District name="Faridpur" speciality="Khejur Gur" ></District>
      <District name="Chandpur" speciality="Hilsha" ></District>
    </div>
  );
}
const districtStyle = {
  backgroundColor: 'whitesmoke',
  boxShadow: '3px 5px 6px',
  borderRadius: '20px',
  padding: '20px',
  margin: '20px'
}
function District(props){
  return (
    <div style={districtStyle} >
      <h2> Name : {props.name} </h2>
      <p> Speciality : {props.speciality} </p>
    </div>
  )
}
export default App;
