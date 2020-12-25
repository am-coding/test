import {FC} from 'react';
import Button from '../atoms/Button';
import { colors } from '../../constants';

interface marketProps {
    paragraph: string,
}

const MarketSection: FC <marketProps> = ({paragraph}) => {
    return (
        <div className="flex flex-col max-w-4xl ml-auto mr-auto  -mt-28 items-center -mb-6">
            <img className="" src="/group3.png" alt="market-png" width="100%" height="auto" />
            <div className="mt-10 max-w-2xl">
                <p className="text-left text-3xl font-bold mb-5">{paragraph}</p>
                <Button 
                    title={"See how they did it"}
                    bgColor={colors.white}
                    txtColor={colors.gray}
                    border={'1px solid rgba(10, 37, 51, 0.1)'}
                />
            </div>
        </div>
    )
}

export default MarketSection;
