import React from 'react'

const Home = () => {
    return (
        <div>
            <div class="mobile:px-10 px-4 pb-10 flex justify-center">
                <main class="w-fw">
                    
                    <div class="flex justify-center">
                        <div class=" mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0 px-4 pt-8 flex flex-col w-fw ">
                            <div class="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
                                <a aria-label="Home" href="/">
                                    <img src="/logo.png" alt="logo" width="90" height="28" />
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
                                
                            </div>
                        </div>
                        
                    </div>
                    <div class="w-full">
                        <div class="bg-blue-300 p-6 pb-10 smpb-6 flex lg:flex-row flex-col">
                            <div class="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
                                <div class="border-l border-gray-900 px-3 pt-1 mb-10">
                                    <p class="text-xs tracking-wider m-0 leading-tight">SOFAS</p>
                                    <p class="text-xs tracking-wider m-0 leading-tight">2021</p>
                                </div>
                                <div>
                                    <p class="text-4xl xl:text-5xl font-bold tracking-widest leading-none">Mod Leather Sofa</p>
                                    <p class="py-6 tracking-wide">FROM <span>$200</span></p>
                                    <button class="text-sm font-bold tracking-wider bg-transparent hover:bg-black text-black font-semibold hover:text-white py-4 px-12 border-2 border-black hover:border-transparent">
                                        <div>Shop Now</div>
                                    </button>
                                </div>
                                <div class="flex flex-1 flex-col justify-end pb-10 mt-4">
                                    <p class="font-light text-xs tracking-tight m-0 leading-tight mb-2">Design by</p>
                                    <p class="text-xxs font-semibold tracking-tight m-0 leading-tight">Jason Bourne</p>
                                </div>
                            </div>
                            <div class="flex flex-1 justify-center items-center relative">
                                <div class="z-10"><img src="/products/couch6.png" class="w-136" alt="Showcase item" /></div>
                                <div class="absolute w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88 bg-white z-0 rounded-full">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" lg:my-8 lg:grid-cols-2 grid-cols-1 grid gap-4 my-4  ">
                        <div class=" mb-4 lg:mb-0 bg-light p-8 pb-0 hover:bg-light-200">
                            <a aria-label="New arrivals" href="/category/new-arrivals">
                                <div class="flex flex-column justify-center items-center h-56">
                                    <img src="/products/couch1.png" alt="New arrivals" class="w-3/5" />
                                </div>
                                <div class="mb-8">
                                    <p class="text-3xl font-semibold mb-1">New arrivals</p>
                                    <p class="text-xs text-gray-700">4 items</p>
                                </div>
                            </a>
                        </div>
                        <div class=" mb-4 lg:mb-0 bg-light p-8 pb-0 hover:bg-light-200">
                            <a aria-label="Sofas" href="/category/sofas">
                                <div class="flex flex-column justify-center items-center h-56">
                                    <img src="/products/couch5.png" alt="Sofas" class="w-3/5" />
                                </div>
                                <div class="mb-8">
                                    <p class="text-3xl font-semibold mb-1">Sofas</p>
                                    <p class="text-xs text-gray-700">10 items</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="pt-10 pb-6 flex flex-col items-center">
                        <h2 class="text-4xl mb-3">Trending Now</h2>
                        <p class="text-gray-600 text-sm">Find the perfect piece or accessory to finish off your favorite room in the house.</p>
                    </div>
                    <div class="my-8 flex flex-col lg:flex-row justify-between">
                        <div class="lg:w-flex-fourth bg-light px-6 pt-10 pb-2 lg:p-6 lg:pb-0 hover:bg-light-200 lg:mb-0 mb-4">
                            <a aria-label="Timber Gray Sofa 2.0" href="/product/timber-gray-sofa-20">
                                <div class="flex flex-column justify-center items-center h-32">
                                    <img src="/products/couch1.png" alt="Timber Gray Sofa 2.0" class="w-3/5" />
                                </div>
                                <div class="">
                                    <p class="text-xl font-semibold mb-1">Timber Gray Sofa 2.0</p>
                                    <p class="text-xs text-gray-700 mb-4">new arrivals</p>
                                </div>
                            </a>
                        </div>
                        <div class="lg:w-flex-fourth bg-light px-6 pt-10 pb-2 lg:p-6 lg:pb-0 hover:bg-light-200 lg:mb-0 mb-4">
                            <a aria-label="Carmel Brown Sofa" href="/product/carmel-brown-sofa">
                                <div class="flex flex-column justify-center items-center h-32">
                                    <img src="/products/couch5.png" alt="Carmel Brown Sofa" class="w-3/5" />
                                </div>
                                <div class="">
                                    <p class="text-xl font-semibold mb-1">Carmel Brown Sofa</p>
                                    <p class="text-xs text-gray-700 mb-4">sofas</p>
                                </div>
                            </a>
                        </div>
                        <div class="lg:w-flex-fourth bg-light px-6 pt-10 pb-2 lg:p-6 lg:pb-0 hover:bg-light-200 lg:mb-0 mb-4">
                            <a aria-label="Mod Leather Sofa" href="/product/mod-leather-sofa">
                                <div class="flex flex-column justify-center items-center h-32">
                                    <img src="/products/couch6.png" alt="Mod Leather Sofa" class="w-3/5" />
                                </div>
                                <div class="">
                                    <p class="text-xl font-semibold mb-1">Mod Leather Sofa</p>
                                    <p class="text-xs text-gray-700 mb-4">new arrivals</p>
                                </div>
                            </a>
                        </div>
                        <div class="lg:w-flex-fourth bg-light px-6 pt-10 pb-2 lg:p-6 lg:pb-0 hover:bg-light-200 lg:mb-0 mb-4">
                            <a aria-label="Thetis Gray Love Seat" href="/product/thetis-gray-love-seat">
                                <div class="flex flex-column justify-center items-center h-32">
                                    <img src="/products/couch7.png" alt="Thetis Gray Love Seat" class="w-3/5" />
                                </div>
                                <div class="">
                                    <p class="text-xl font-semibold mb-1">Thetis Gray Love Seat</p>
                                    <p class="text-xs text-gray-700 mb-4">new arrivals</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home
