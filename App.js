import './Home.css';
import './App.css';


function App() {
  function hello(){
    alert("helllo");
    var str= document.getElementById("name").value;
    var friend=document.getElementById("friend").value;
    alert("Name has been taken ");
    var arr=[str];
    arr.push(friend);
    var len=arr.len();
    console.log(len);
    alert(len);
  }
  return (
    <>
     <div className="container">
        <label htmlFor='username'></label>
        <input type='text' id='name' name='name' placeholder='Enter name '/>
      </div>
      <div className="container">
        <label htmlFor='username'></label>
        <input type='text' id='fname' name='name' placeholder='Enter name of friend '/>
      </div>
     <div className="bn">
      <button onClick={hello}>Done</button>  
     </div>  
     

    </> 
  );
}

export default App;