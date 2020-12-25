import { FC } from "react";
import EmailInput from "../molecules/EmailInput";

interface ctaProps {
    bgColor: string,
    title: string,
}

const CallToAction: FC <ctaProps> = ({bgColor, title}) => {
    return(
        <div style={{height: '80vh', backgroundColor: bgColor}} className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center pb-10 max-w-3xl">
                {title}
            </h1>
            <EmailInput />
        </div>
    )
}

export default CallToAction;
