import {FC} from 'react';
import GridItem from '../molecules/GridItem';


interface itemProps {
   data: any[],
}

const GridSection: FC <itemProps> = ({data}) => {

    return(
        <div className="grid grid-cols-3 gap-10 p-40">
            {data.map((item: any) => {
                return (
                    <GridItem 
                        title={item.title}
                        paragraph={item.paragraph}
                        src={item.src}
                        tag={item.tag}
                    />
                )
            })}
        </div>
    )
}

export default GridSection;
