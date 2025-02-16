import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import './App.css'
import Login from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
            </Routes>
        </div>
    )
}

export default App
