import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './App.css';

import Header from './Header';
import TransitionModul from './Transition';
import CSSTransitionModul from './CSSTransition';
import SwitchTransitionModul from './SwitchTransition';


function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<TransitionModul/>}/>  
                <Route path="/transition" element={<CSSTransitionModul/>}/> 
                <Route path="/switchtransition" element={<SwitchTransitionModul/>}/>   
            </Routes>
        </Router>
    );
}

export default App;




