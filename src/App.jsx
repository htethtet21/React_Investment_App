import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Results from "./Components/Results"
import { useState } from "react";


function App() {
  const [Input,setInput]=useState({
  initialInvestment:10000,
  annualInvestment:1200,
  expectedReturn:6,
  duration:10,
})
const Isvalid=Input.duration >=1;
function handleChange(inputidentifier,newValue){
  setInput(preUserInput=>{
      return{
          ...preUserInput,
          [inputidentifier]: +newValue
      };
  });
}

  return ( 
  <>
  <Header/>
  <UserInput userInput={Input} onChange={handleChange}/>
  {!Isvalid && <p className="center">Please Enter geater than zero</p>}
 {Isvalid &&<Results inputs={Input}/>}
  </>
  
  );
  
  
  
}
export default App
