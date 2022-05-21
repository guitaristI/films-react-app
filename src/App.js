import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import SinglePage from "./Pages/SinglePage";

function App() {
    return (
        <div>
            <Navbar/>
            <div className="container">

                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route exact path='/home' element={<HomePage/>}/>
                    <Route exact path='/about' element={<AboutPage/>}/>
                    <Route path='/singleShow/:id' element={<SinglePage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

