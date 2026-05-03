import  {useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/userCard.jsx'

function App() {
const [userData, setUserData] = useState(null)

const response = async () => {
  const url = 'https://api.freeapi.app/api/v1/public/randomusers/user/random';
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const data = await fetch(url, options)
  
  return data.json()
}

useEffect(()=>{ 
  const fetchUser = async () => {
    try {
      const res = await response()
      const user = res?.data
      setUserData(user)
    }
    catch(err){
      console.log(err)
    }
  }
  fetchUser()
}
,[])


console.log(userData)
return (
  <>{ 

    <UserCard data={userData} />

  }
  </>
)
}

export default App
