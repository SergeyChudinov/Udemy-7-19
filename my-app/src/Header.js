import {NavLink} from 'react-router-dom'; 
import './Header.css';

const Header = () => {

    return (
        <>
            <div>
                <ul>
                    <li className='headerLi'><NavLink className='navLink' style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
                        end  to='/'>Transition </NavLink></li>
                    <li className='headerLi'><NavLink className='navLink' style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
                        end  to='/transition'>CSSTransition</NavLink></li>
                    <li className='headerLi'><NavLink className='navLink' style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
                        end  to='/switchtransition'>SwitchTransition</NavLink></li>
                </ul>                
            </div>
        </>
    )
}
export default Header;