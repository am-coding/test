import {FC} from 'react';
import GridItem from '../molecules/GridItem';
import Buttom from '../atoms/Button';
import { colors } from '../../constants';

interface itemProps {
   data: any[],
   loadMore?: boolean,
}

const GridSection: FC <itemProps> = ({data, loadMore}) => {

    return(
        <>
        <div className="grid grid-cols-3 gap-10 p-40">
            {data.map((item: any, index: number) => {
                return (
                    <GridItem 
                        key={index}
                        title={item.title}
                        paragraph={item.paragraph}
                        src={item.src}
                        tag={item.tag}
                    />
                )
            })}
        </div>
        <div className="text-center -mt-20 mb-24">
        {loadMore === true ? 
                <Buttom
                    title={"load more"}
                    bgColor={colors.skBlack}
                    txtColor={colors.white}
                    border={'1px solid rgba(10, 37, 51, 0.1)'}
                /> 
                : null
            }
        </div>
        </>
    )
}

export default GridSection;
