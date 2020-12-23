import React from 'react';
import Button from './Button';
import Link from 'next/link'
import Image from 'next/image'

type navItemsProps = {
    items: string[],
}

const Navbar = ({items} : navItemsProps) => {

    const navItems = items.map((item: string) => {
        return <li className="list-none text-white">{item}</li>
    })

    return (
        <div className="grid grid-cols-3 items-center p-2 border-b-2 h-20">
           <div className="grid grid-cols-3 text-center font-semibold">
                {navItems}
            </div> 
            <h1 className="text-primary flex justify-center items-center font-bold text-2xl">
                <Image src="/light.png" alt="logo" width="54" height="54"/>Skupos
            </h1>
            <div className="justify-end items-center flex mr-12">
                <h2 className="mr-9 font-semibold">
                 <Link href="">Log in</Link>
                </h2>
            <Button
                title={'Get Started'}
                bgColor={'#00B481'}
                txtColor={'#fff'}
                border={'none'}
             />
            </div>
        </div>
    )
} 

export default Navbar;
