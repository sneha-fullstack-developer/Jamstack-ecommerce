import React from 'react'

const Newarrivals = () => {
    return (
        <div>
            <div class="mobile:px-10 px-4 pb-10 flex justify-center">
                <main class="w-fw">
                    <div>
                        <div class="fixed sm:top-53 right-24 desktop:right-flexiblemargin top-40 z-10">
                            <div class="flex flex-1 justify-end pr-4 relative">
                                <a aria-label="Cart" href="/cart">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="max-w-fw flex flex-col w-full">
                            <div class="pt-4 sm:pt-10 pb-8">
                                <h1 class="text-5xl font-light">New arrivals</h1>
                            </div>
                            <div>
                                <div class="flex flex-1 flex-wrap flex-row">
                                    <div class=" w-100 md:w-1/2 lg:w-1/4 p1 sm:p-2 ">
                                        <a aria-label="Timber Gray Sofa 2.0" href="/product/timber-gray-sofa-20">
                                            <div class="h-72 flex justify-center items-center bg-light hover:bg-light-200">
                                                <div class="flex flex-column justify-center items-center">
                                                    <img src="/products/couch1.png" alt="Timber Gray Sofa 2.0" class="w-3/5" />
                                                </div>
                                            </div>
                                        </a>
                                        <div>
                                            <p class="m-4 text-center text-l font-semibold mb-1">Timber Gray Sofa 2.0</p>
                                            <p class="text-center text-gray-700 mb-4">$1000</p>
                                        </div>
                                    </div>
                                    <div class=" w-100 md:w-1/2 lg:w-1/4 p1 sm:p-2 ">
                                        <a aria-label="Mod Leather Sofa" href="/product/mod-leather-sofa">
                                            <div class="h-72 flex justify-center items-center bg-light hover:bg-light-200">
                                                <div class="flex flex-column justify-center items-center">
                                                    <img src="/products/couch6.png" alt="Mod Leather Sofa" class="w-3/5" />
                                                </div>
                                            </div>
                                        </a>
                                        <div>
                                            <p class="m-4 text-center text-l font-semibold mb-1">Mod Leather Sofa</p>
                                            <p class="text-center text-gray-700 mb-4">$800</p>
                                        </div>
                                    </div>
                                    <div class=" w-100 md:w-1/2 lg:w-1/4 p1 sm:p-2 ">
                                        <a aria-label="Thetis Gray Love Seat" href="/product/thetis-gray-love-seat">
                                            <div class="h-72 flex justify-center items-center bg-light hover:bg-light-200">
                                                <div class="flex flex-column justify-center items-center">
                                                    <img src="/products/couch7.png" alt="Thetis Gray Love Seat" class="w-3/5" />
                                                </div>
                                            </div>
                                        </a>
                                        <div>
                                            <p class="m-4 text-center text-l font-semibold mb-1">Thetis Gray Love Seat</p>
                                            <p class="text-center text-gray-700 mb-4">$900</p>
                                        </div>
                                    </div>
                                    <div class=" w-100 md:w-1/2 lg:w-1/4 p1 sm:p-2 ">
                                        <a aria-label="Markus Green Love Seat" href="/product/markus-green-love-seat">
                                            <div class="h-72 flex justify-center items-center bg-light hover:bg-light-200">
                                                <div class="flex flex-column justify-center items-center">
                                                    <img src="/products/couch3.png" alt="Markus Green Love Seat" class="w-3/5" />
                                                </div>
                                            </div>
                                        </a>
                                        <div>
                                            <p class="m-4 text-center text-l font-semibold mb-1">Markus Green Love Seat</p>
                                            <p class="text-center text-gray-700 mb-4">$900</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Newarrivals