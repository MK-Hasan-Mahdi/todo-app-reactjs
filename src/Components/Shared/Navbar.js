import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>

        <li><Link className='shadow md:mr-3' to='/'>Home</Link></li>
        <li><Link className='shadow md:mr-3' to='/completedtasks'>Completed Tasks</Link></li>
        <li><Link className='shadow md:mr-3' to='/todo'>To-Do</Link></li>
        <li><Link className='shadow md:mr-3' to='/calendar'>Calendar</Link></li>


    </>
    return (
        <div class="navbar md:px-16 px-2 text-black md:text-white my-nav bg-[#261c1b]">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menu
                        }
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">Todo App</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {
                        menu
                    }
                </ul>
            </div>

        </div>
    );
};

export default Navbar;