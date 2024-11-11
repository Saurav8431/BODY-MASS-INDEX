import './App.css';
import React,{useState, usestate} from "react";

function App() {

  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('');


let calcBmi = (e) =>{

  e.preventDefault();
  if(weight===0 || height === 0)
  {
    alert('please enter a valid weight and height')
  }

  else{
    let bmi = (weight/(height*height)*703)
    setBmi(bmi.toFixed(1))
  }

  if(bmi<25){
    setMessage('you are under weight')
  }
  else if (bmi>=25 && bmi<30){
    setMessage('you are healthy')
  }
  else{
    setMessage('you are over weight')
  }
}


let reload =() =>{
  window.location.reload()
}


  return (
    <div className="App">
      <div className = "container">
        <h2>BMI calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>
              Weight(lbs)
            </label>
            <input type = "text"
            placeholder = "Enter Weight Value"
            value ={weight}
            onChange={(e) =>setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>
              Height(in)
            </label>
            <input type = "text"
            placeholder = "Enter Height Value"
            value ={height}
            onChange={(e) =>setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className ="btn" type ="submit">
              submit
            </button>
            <button className = "btn btn-outline" onclick ={reload} type = "submit">
              reload
            </button>
          </div>
          <div className = "center">
            <h3>
              your BMI is :{bmi}
            </h3>
            <p>
              {message}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
