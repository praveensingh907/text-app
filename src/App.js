import React,{useState} from 'react';
import Navbar from './compnents/Navbar';
import Text from './compnents/TextForm';
import Alert from './compnents/Alert';
import About from './compnents/About';




function App() {

  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });

    setTimeout(() => {
      setAlert(null);
    },1500);
  }


  const toggleMode = ()=>{
    if(Mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("light mode has been Enabled","success");
      document.title='TextUtils - light mode';

      // flashing title 
      // setInterval(() => {
      //   document.title='TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Download TextUtils now';
      // }, 1500);
    }else{
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("dark mode has been Enabled","success");
      document.title='TextUtils - dark mode';
    }
  }

  return (
    <>
     <Navbar title="Textutils" aboutText="About us" mode={Mode} toggleMode={toggleMode}/>
     <Alert Alert={alert}/>
     <div className="container my-3">
   
      {/* /users---->component1
      /users/home---->component2
      but if you will not write exact everytime it will open component1
      so its important to write exact */}
        
         
          <Text alert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>
      
      
      {/* <About/>  */}
       
     </div>
     
    </>
  );
}

export default App;
