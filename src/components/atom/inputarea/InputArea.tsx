import { KeyboardEventHandler } from "react";

interface InputAreaProps {
    id?: string;
    type?: string;
    value?: string;
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
    placeholder?: string;
    inputclassName?: string;
    labelclassName?: string,
}

const InputArea: React.FC<InputAreaProps> = ({
    id,
    type,
    value,
    label,
    onChange,
    handleKeyDown,
    placeholder,
    inputclassName,
    labelclassName
}) => {
    return (
        <div className="relative w-full basis-1/4">
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                required
                className={`flex py-[12px] px-3 items-center gap-[10px] font-Nunito text-[16px] not-italic font-normal mt-1 peer appearance-none w-full h-[44px] border border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-indigo-500 ${inputclassName}`}
            />
            <label className={`${labelclassName} absolute left-1 transition-all pointer-events-none duration-300 ease-in-out bg-white px-2 text-sm text-gray-500 font-Nunito text-[16px] not-italic font-normal origin-[0] 
                    ${value ? 'top-2 -translate-y-4 scale-75' : 'top-1/2 -translate-y-1/2 scale-100'} 
                    peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600`}
            >{label}</label>
        </div>
    )
}

export default InputArea