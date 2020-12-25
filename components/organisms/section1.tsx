import {FC} from 'react';
import FlexItem from '../molecules/FlexItem';


const Section1: FC = () => {
    return (
        <div className="pl-32 pr-32 pt-20">
            <h1 className="text-4xl ml-20 font-bold pb-12">Powering smarter decisions</h1>
            <FlexItem 
                title="For convenienence retailers"
                paragraph="Unlock new revenue by participating in scan data programs and running brand-funded promotions available exclusively via Skupos."
                src="/group1.png"
                styles={{width: '80%'}}
            />

            <FlexItem 
                title="For enterprise brands"
                paragraph="Run promotions across America’s largest independent convenience store network and increase sales efficiency with powerful retail insights."
                src="/group2.png"
            />
        </div>
    )
}

export default Section1;
