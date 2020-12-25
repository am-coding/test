import { FC } from 'react';

interface ButtonProps {
    title: string,
    bgColor: string,
    txtColor: string,
    border: string,
}

const Button: FC<ButtonProps> = ({
    title,
    bgColor,
    txtColor,
    border
}) => {

    return (
        <button style={{backgroundColor: bgColor, color: txtColor, border: border}} className="p-3 font-semibold pr-7 pl-7 rounded-full">
            {title}
        </button>
    )
}

export default Button;