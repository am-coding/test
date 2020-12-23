import React from 'react';

type ButtonProps = {
    title: string,
    bgColor: string,
    txtColor: string,
    border: string,
}

const Button = ({title, bgColor, txtColor, border} : ButtonProps) => {

    return (
        <button style={{backgroundColor: bgColor, color: txtColor, border: border}} className=" p-2 font-semibold pr-6 pl-6 rounded-full">
            {title}
        </button>
    )
}

export default Button;
