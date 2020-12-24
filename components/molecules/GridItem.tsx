import {FC} from 'react';
import Button from '../atoms/Button'
import { colors } from '../../constants';

interface itemProps {
   title: string,
   src: string,
   paragraph: string,
   tag: string,
}

const GridItem: FC <itemProps> = ({title, src, paragraph, tag}) => {

    return(
        <div className="">
            <img className="mb-6" src={src} alt="grid-item" width="100%" height="100%" />
            <span style={{ color: tag === 'retail' ? colors.orange : colors.berry }} className="uppercase font-bold text-sm">{tag}</span>
            <h1 className="font-extrabold mt-2 text-lg">{title}</h1>
            <p className="text-sm mt-1">{paragraph}</p>
        </div>
    )
}

export default GridItem;
