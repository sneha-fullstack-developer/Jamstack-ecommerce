import React from 'react'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
const  Navbar = () => {
    const history = useHistory();
    const routeto =() =>{
        history.push("/home/newarrivals")
    }


    return (
        <div>
            <div>
            <nav>
                <div class="flex justify-cente">
                    <div class=" mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0 px-4 pt-8 flex flex-col w-fw ">
                        <div class="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
                            <NavLink aria-label="Home" to="/">
                                <img src={logo} alt="logo" width="90" height="28"/>
                            </NavLink>
                            </div>
                            <div class="flex flex-wrap mt-1">
                                <NavLink aria-label="Home" to="/home">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Home</p>
                                </NavLink>
                                <NavLink aria-label="new arrivals" to="/newarrivals">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">New arrivals</p>
                                </NavLink>
                                <NavLink aria-label="sofas" to="/sofas">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Sofas</p>
                                </NavLink>
                                <NavLink aria-label="living room" to="/livingroom">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Living room</p>
                                </NavLink>
                                <NavLink aria-label="on sale" to="/onsale">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">On sale</p>
                                </NavLink>
                                <NavLink aria-label="chairs" to="/chairs">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Chairs</p>
                                </NavLink>
                                <NavLink aria-label="All categories" to="/all">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4  ">All</p>
                                </NavLink>
                                <NavLink aria-label="Signin/SignUp" to="/auth">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4  ">SignUp/Signin</p>
                                </NavLink>                                
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            
        </div>
    )
}
export default Navbar;
