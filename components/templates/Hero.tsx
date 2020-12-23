import { FC } from 'react';
import Button from '../atoms/Button';
import Image from 'next/image'
import { colors } from '../../constants';

interface heroProps {
    title?: string,
    paragraph: string,
}
 
const Hero: FC <heroProps> = ({paragraph}) => {
    return (
        <div className="flex mt-7 justify-center items-center pr-3 pl-3">
            <div className="max-w-lg p-4 ml-14">
                <h1 className="text-5xl font-bold">Connecting the <br/>convenience <br/>retail industry</h1>
                <p className="mt-6 mb-7 font-semibold text-xl">{paragraph}</p>
                <div className="grid grid-cols-2 gap-4">
                    <Button
                    title={"I'm a retailer"}
                    bgColor={colors.skGreen}
                    txtColor={colors.white}
                    border={'none'}
                    />

                    <Button
                    title={"I'm a Brand"}
                    bgColor={colors.semiWhite}
                    txtColor={colors.gray}
                    border={'1px solid rgba(10, 37, 51, 0.1)'}
                    />
                </div>
                <p className="text-custom mt-10 mb-3 text-sm">Over 14,000 retailers & brands use Skupos</p>
                <Image src="/logos.png" alt="me" width="600" height="60" />
            </div>

            <div className="mt-12">
                <img  src="/hero.png" width="100%" height="auto" alt="hero"/>
            </div>
        </div>
    )
}

export default Hero;
