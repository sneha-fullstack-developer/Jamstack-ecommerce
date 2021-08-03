import React from 'react'
import logo from '../../images/logo.png'
const  Navbar = () => {
    return (
        <div>
            <div>
            <nav>
                <div class="flex justify-cente">
                    <div class=" mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0 px-4 pt-8 flex flex-col w-fw ">
                        <div class="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
                            <a aria-label="Home" href="/">
                                <img src={logo} alt="logo" width="90" height="28"/>
                            </a>
                            </div>
                            <div class="flex flex-wrap mt-1">
                                <a aria-label="Home" href="/">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Home</p>
                                </a>
                                <a aria-label="new arrivals" href="/category/new-arrivals">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">New arrivals</p>
                                </a>
                                <a aria-label="sofas" href="/category/sofas">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Sofas</p>
                                </a>
                                <a aria-label="living room" href="/category/living-room">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Living room</p>
                                </a>
                                <a aria-label="on sale" href="/category/on-sale">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">On sale</p>
                                </a>
                                <a aria-label="chairs" href="/category/chairs">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4 ">Chairs</p>
                                </a>
                                <a aria-label="All categories" href="/categories">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4  ">All</p>
                                </a>
                                <a aria-label="Signin/SignUp" href="/auth">
                                    <p class=" sm:mr-8 sm:mb-0 mb-4 text-left text-smaller mr-4  ">SignUp/Signin</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            
        </div>
    )
}
export default Navbar;
