import React from 'react'

const Login = ({ triggerRegister }) => {
    return (
        <div >
            <div className="flex flex-1 justify-center ">
                <div className="w-2/5 ">
                    <h3 className="my-4">Sign In</h3>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  ">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                name="username"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                name="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-400 text-white hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm" href="#" onClick={() => triggerRegister()}>
                                Register here
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login