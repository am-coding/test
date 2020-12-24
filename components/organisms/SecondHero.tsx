import { FC } from 'react';
import Navbar from '../molecules/Navbar';


const items = ['Products', 'Resources', 'Support'];


const SecondHero: FC = () => {
    return (
        <div className="h-screen bg-yellow">
            <Navbar 
                items={items}
            />
            <div className="flex items-center h-3/4 justify-center">
                <p className="text-center max-w-4xl p-3 font-bold text-5xl">Retailers and brands 
                    <span className="text-secondary"> transform </span> 
                    their sales and marketing strategies with Skupos. Have a closer look at how we’re helping them succeed.
                 </p>
            </div>
        </div>
    )
}

export default SecondHero;
