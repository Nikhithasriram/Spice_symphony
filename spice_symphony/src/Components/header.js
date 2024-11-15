import React from 'react'

function Header() {
    return (
        <div className='p-5 flex justify-between '>
            <div className='flex'>
                <div className='py-1'>Logo</div>
                <div className='px-4 text-2xl'>Spice symphony</div>
            </div>
            <div>
                <nav className='list-none flex space-x-6 px-2'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Menu</li>
                    <li>Gallery</li>
                    <li>Reserve</li>
                    <li className='text-yellow-500'>Contact</li>
                    <li>Order Now</li>

                </nav>
            </div>
        </div>
    )
}

export default Header