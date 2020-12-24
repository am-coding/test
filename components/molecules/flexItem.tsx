import {FC} from 'react';
import Link from 'next/link';
interface itemProps {
    title: string,
    paragraph: string,
    src: any,
    styles?: object,
}

const FlexItem: FC <itemProps> = ({title, paragraph, src, styles}) => {
    return (
        <div className="grid grid-cols-2 gap-20 items-center pr-20 pl-20 pb-20">
            <img src={src} width="100%" height="auto" />
            <div style={styles}>
                <h1 className="text-4xl font-bold mb-3">{title}</h1>
                <p className="max-w-sm mb-3">{paragraph}</p>
                <Link href="/"><p className="border-b-2 absolute">Learn more</p></Link>
            </div>
        </div>
    )
}

export default FlexItem;
