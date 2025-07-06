import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header';
import axios from 'axios';

function App() {
  let [ users , setUsers ] = useState([]);
  let [inputUser , setInputUser] = useState("")
  let [ showUers , setShowUsers] = useState(false);
  let [validUsers , setValidUsers] = useState([])

  const getUserData =async ()=>{
    let data = users.map( async(user,index)=>{
      const response = await axios.get(`https://api.github.com/users/${user}`)
      //const data = await  response.json(); fuc*  this only works for fetch()
      //nsole.log(response)
      return response
      

    }  )
    data = await Promise.all(data) //   remember this nig -->used to convert promises  
    console.log(data)
    setValidUsers(data)
  }

  const handleChange = (e)=>{
    setInputUser( e.target.value);
  }

  const addUser = ()=>{
    if (inputUser.trim() !== "") {
      users.push(inputUser)
      setShowUsers(true)
      console.log(users)
      setInputUser("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addUser();
    }
  }

  return(
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Add New User
          </h2>
          
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Enter username..." 
              value={inputUser} 
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <button 
              onClick={addUser}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              Add User
            </button>
          </div>
        </div>

        {/* Users List Section */}
        {showUers && users.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Added Users ({users.length})
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {users.map((user, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {user.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{user}</h4>
                      <p className="text-sm text-gray-500">User #{index + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {showUers && users.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No users added yet</h3>
            <p className="text-gray-500">Add your first user above to get started!</p>
          </div>
        )}
      </div>

      <div className="flex justify-center mb-8">
        <button onClick={getUserData} className='px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md'>
          Generate Cards
        </button>
      </div>

      {validUsers.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              GitHub Profile Cards ({validUsers.length})
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {validUsers.map((user, index) => (
                <Card 
                  key={index}
                  name={  user.data.name ||user.data.login}
                  username={`@${user.data.login}`}
                  avatar={user.data.avatar_url}
                  bio={user.data.bio}
                  repos={user.data.public_repos}
                  followers={user.data.followers}
                  following={user.data.following}
                  joinedDate={new Date(user.data.created_at).getFullYear()}
                />
              ))}
            </div>
          </div>
        )}
    </div>

    
  )
}

export default App
