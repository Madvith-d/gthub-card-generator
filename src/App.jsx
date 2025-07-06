import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header';
function App() {
  let [ users , setUsers ] = useState([]);
  let [inputUser , setInputUser] = useState("")
  let [ showUers , setShowUsers] = useState(false);

  const getUserData = ()=>{


  }

  const handleChange = (e)=>{
    setInputUser( e.target.value);
  }

  const addUser = ()=>{
    users.push(inputUser)
    setShowUsers(true)
    console.log(users)
    setInputUser("")

  }

  return(
    <>
     <Header />
     <input type="text" name="" id="" value={inputUser} onChange={handleChange} />  <button onClick={addUser}>Add User </button>
     

     <div>
      <h3>Added users :</h3>
      {
       showUers && ( 
        users.map((user,index)=>(
          <h4 key = {index}>{user}</h4>
        ))

        
       )
     }
     </div>

     
    
    </>
  )
  
}

export default App
