import React from 'react'
import Content from '../../layout/Content'
import { useAuth } from '../../contexts/AuthContext';
const Home = () => {
    const {user,setUser,updateLocalStorageUser} =useAuth();
    console.log("Home user",user)
    return (
        <div>
            <Content user={user} setUser={setUser} updateLocalStorageUser={updateLocalStorageUser}/>
        </div>
    )
}

export default Home
