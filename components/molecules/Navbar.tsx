import { FC } from 'react';
import Button from '../atoms/Button';
import Link from 'next/link'
import Image from 'next/image'
import { colors } from '../../constants';

interface navItemsProps {
    items: string[],
}

const Navbar: FC<navItemsProps> = ({items}) => {

    const navItems = items.map((item: string, index: number) => {
        return <li key={index} className="list-none text-white">{item}</li>
    })

    return (
        <div className="grid grid-cols-3 items-center p-2 border-b-2 border-gray-300 h-20">
           <div className="grid grid-cols-3 text-center font-semibold">
                {navItems}
            </div> 
            <h1 className="text-primary flex justify-center items-center font-bold text-2xl">
                <Image src="/Light.png" alt="logo" width="54" height="54"/>Skupos
            </h1>
            <div className="justify-end items-center flex mr-12">
                <h2 className="mr-9 font-semibold">
                 <Link href="/">Log in</Link>
                </h2>
            <Button
                title={'Get Started'}
                bgColor={colors.skGreen}
                txtColor={colors.white}
                border={'none'}
             />
            </div>
        </div>
    )
} 

export default Navbar;
