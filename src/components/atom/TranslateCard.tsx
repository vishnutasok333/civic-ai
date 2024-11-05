// import DropDown from "./dropdown/DropDown"

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
// import { useState } from "react"

interface TranslateCardProps {
    lang1: string,
    lang2: string,
    setLang1: React.Dispatch<React.SetStateAction<string>>;
    setLang2: React.Dispatch<React.SetStateAction<string>>;
}

const TranslateCard: React.FC<TranslateCardProps> = ({ lang1, setLang1, lang2, setLang2 }) => {


    return (<div className="flex flex-row">
        <div className="flex flex-col items-start gap-[8px] shrink-0">
            {/* <h1 className="font-Nunito text-[18px] font-normal">From</h1> */}
            <div className="xl:w-[256px] min-w-[110px] bg-white rounded-[10px]">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"><h1 className="flex gap-2">from</h1></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={lang1}
                        label="from"
                        onChange={(e) => setLang1(e.target.value)}
                    >
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="Spanish">Spanish</MenuItem>
                        <MenuItem value="Hindi">Hindi</MenuItem>
                    </Select>
                </FormControl>
            </div>

        </div>

        <div className="flex shrink-0 w-[50px] h-[50px] justify-center items-center gap-[10px] rounded-[10px] bg-[#F5F5FF]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.0307 17.0306L17.0307 20.0306C16.89 20.1713 16.6991 20.2503 16.5001 20.2503C16.3011 20.2503 16.1102 20.1713 15.9695 20.0306C15.8287 19.8898 15.7497 19.699 15.7497 19.4999C15.7497 19.3009 15.8287 19.11 15.9695 18.9693L17.6898 17.2499H4.5001C4.30119 17.2499 4.11042 17.1709 3.96977 17.0303C3.82912 16.8896 3.7501 16.6988 3.7501 16.4999C3.7501 16.301 3.82912 16.1103 3.96977 15.9696C4.11042 15.8289 4.30119 15.7499 4.5001 15.7499H17.6898L15.9695 14.0306C15.8287 13.8898 15.7497 13.699 15.7497 13.4999C15.7497 13.3009 15.8287 13.11 15.9695 12.9693C16.1102 12.8286 16.3011 12.7495 16.5001 12.7495C16.6991 12.7495 16.89 12.8286 17.0307 12.9693L20.0307 15.9693C20.1005 16.039 20.1558 16.1217 20.1935 16.2127C20.2313 16.3038 20.2507 16.4014 20.2507 16.4999C20.2507 16.5985 20.2313 16.6961 20.1935 16.7871C20.1558 16.8782 20.1005 16.9609 20.0307 17.0306ZM6.96948 11.0306C7.11021 11.1713 7.30108 11.2503 7.5001 11.2503C7.69912 11.2503 7.89 11.1713 8.03073 11.0306C8.17146 10.8898 8.25052 10.699 8.25052 10.4999C8.25052 10.3009 8.17146 10.11 8.03073 9.9693L6.31041 8.24993H19.5001C19.699 8.24993 19.8898 8.17091 20.0304 8.03026C20.1711 7.88961 20.2501 7.69884 20.2501 7.49993C20.2501 7.30102 20.1711 7.11025 20.0304 6.9696C19.8898 6.82895 19.699 6.74993 19.5001 6.74993H6.31041L8.03073 5.03055C8.17146 4.88982 8.25052 4.69895 8.25052 4.49993C8.25052 4.30091 8.17146 4.11003 8.03073 3.9693C7.89 3.82857 7.69912 3.74951 7.5001 3.74951C7.30108 3.74951 7.11021 3.82857 6.96948 3.9693L3.96948 6.9693C3.89974 7.03896 3.84443 7.12168 3.80668 7.21272C3.76894 7.30377 3.74951 7.40137 3.74951 7.49993C3.74951 7.59849 3.76894 7.69609 3.80668 7.78713C3.84443 7.87818 3.89974 7.9609 3.96948 8.03055L6.96948 11.0306Z" fill="#050A30" />
            </svg>
        </div>

        <div className="flex flex-col items-start gap-[8px] shrink-0">
            {/* <h1 className="font-Nunito text-[18px] font-normal">To</h1> */}
            {/* <select
                    className="pt-0 pr-3 pb-0 pl-6 md:w-[17.313rem] h-[50px] flex items-center gap-[10px] rounded-[10px] bg-[#FFFF] border border-gray-300"
                //   value={fromLanguage}
                //   onChange={(e) => setFromLanguage(e.target.value)}
                >
                    <option value="English">English</option>
                    <option value="Maldrin">Maldrin</option>
                </select> */}
            <div className="xl:w-[256px] min-w-[110px] bg-white rounded-[10px]">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"><h1 className="flex gap-2">To</h1></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={lang2}
                        label="to"
                        onChange={(e) => setLang2(e.target.value)}
                    >
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="Spanish">Spanish</MenuItem>
                        <MenuItem value="Hindi">Hindi</MenuItem>
                    </Select>
                </FormControl>
            </div>

        </div>
    </div>)
}

export default TranslateCard