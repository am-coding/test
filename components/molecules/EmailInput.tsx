import { FC } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { colors } from "../../constants";


const  EmailInput: FC = () => {
    return (
        <div className="flex flex-col items-center">
            <Input
                placeholder="Enter your Email address"
             />
             <Button
                title={"Subscribe"}
                bgColor={colors.skBlack}
                txtColor={colors.white}
                border={'1px solid rgba(10, 37, 51, 0.1)'}
             />
        </div>
    )
}

export default EmailInput;
