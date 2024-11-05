import { Plus } from "lucide-react"
import Filesvg from "../atom/svg/Filesvg"
import SingleFilesvg from "../atom/svg/SingleFilesvg"
import Closesvg from "../atom/svg/Closesvg"
import { ModelForm } from "../../containers/createmodel/ModelForm"
import Button from "../atom/button/Button"
import DragDrop from "../atom/DragandDrop"
import { useState } from "react"

// interface FileItem {
//     type: string;
//     name: string;
//     size: number;
//   }

interface FileState {
    file: File[];
    drop: boolean;
  }

const CreateModel = () => {

    const [file, setFile] = useState<FileState>({ file: [], drop: false })

    const handleOnDragging = (drag: boolean) => {
        if (drag) {
            !file.drop && setFile((prev: any) => ({ ...prev, drop: true }))
        } else {
            file.drop && setFile((prev: any) => ({ ...prev, drop: false }))
        }
    }

    const handleDropFileChange = (file:any) => {
        // console.log("file", file);
        setFile((prev: any) => ({ file:[...prev.file,file], drop: false }))
        // console.log("file after dropping",file);
        
    }

    const handleTypeError = (error:any)=>{
        console.log("error in type",error)        
    }

    const handleRemoveFile = (index: number) => {
        setFile((prevState) => ({
          ...prevState,
          file: prevState.file.filter((_, i) => i !== index),
        }));
      };

    console.log("file sample",file.file);
    

    return (
        // <div className="flex p-[1.5rem] flex-col items-start gap-[1.313rem] rounded-[10px] bg-red-200">
        //     <div className="flex flex-col items-start gap-[0.625rem]">
        //         <h1 className="text-black font-Nunito text-[24px] font-bold">Train with files</h1>
        //         <p className="text-black font-Nunito text-[16px] font-normal max-w-[42.625rem]">Easily upload and train your AI models using structured files like CSV, JSON, or other formats. Gain insights and improve your models based on real-world data.</p>
        //     </div>

        //     <div className="flex items-start gap-[21px]">
        //         <div className="flex flex-col items-start gap-[21px]">

        //             <div className="flex flex-col items-start gap-[12px]">
        //                 <h1 className="font-Nunito text-[18px] font-semibold">Upload File</h1>
        //                 <div className="flex p-[12px] flex-col justify-center items-center gap-[24px] rounded-[10px] border-[1px] border-black border-opacity-12 border-dashed bg-[#F5F4F2]">
        //                     <div className="flex flex-col items-center gap-[12px]">
        //                         <div className="flex w-[4.375rem] h-[4.375rem] justify-center items-center gap-[10px] rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none">
        //                             <Filesvg className="flex-shrink-0" />
        //                         </div>
        //                         <button className="flex h-[2.75rem] px-[16px] justify-center gap-[8px] rounded-[10px] border-[1px] border-[#4D4DFF] font-Nunito text-[16px] font-semibold items-center">
        //                             <Plus />
        //                             Browse files
        //                         </button>
        //                         <div className="text-center font-Nunito italic text-[14px] font-normal">
        //                             Only CSV (.csv), JSON (.json), and Excel (.xlsx), zip files are accepted.
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="flex flex-col items-start gap-[12px]">
        //               <h1 className="font-Nunito text-[18px] font-semibold">Files uploaded</h1> 
        //               <div className="flex p-[12px] items-start content-start gap-[12px] flex-grow shrink-0 balance-0 flex-wrap">
        //                 <div className="flex h-[2rem] px-[16px] justify-center items-center gap-[8px] rounded-[50px] bg-[#F5F4F2]">
        //                   <div className="flex items-center gap-[8px]">
        //                    <SingleFilesvg />
        //                    <h1 className="font-Nunito text-[16px] font-normal">IT Law</h1>
        //                    <h1 className="font-Nunito text-[14px] font-normal text-gray-300">3.4MB</h1>
        //                    <Closesvg />
        //                   </div>  
        //                 </div>
        //               </div> 
        //             </div>

        //         </div>

        //         <ModelForm />

        //     </div>

        //     <div className="flex justify-end items-start gap-[10px] w-full h-[44px]">
        //        <Button theme="secondary" className="w-[8.938rem] h-full px-[16px] justify-center items-center gap-[8px] rounded-[10px] font-Nunito text-[20px] font-semibold">Cancel</Button>
        //        <Button theme="custom" className="h-full w-[9.688rem] px-[16px] justify-between items-center bg-[#8080FF] rounded-[10px] font-Nunito text-[20px] font-semibold text-white">Create Model</Button>
        //     </div>

        // </div>
        <div className="p-6 bg-white grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[900px]">
            <div className="flex flex-col items-start gap-[0.625rem] col-span-full">
                <h1 className="text-black font-Nunito text-[24px] font-bold">Train with files</h1>
                <p className="text-black font-Nunito text-[16px] font-normal">Easily upload and train your AI models using structured files like CSV, JSON, or other formats. Gain insights and improve your models based on real-world data.</p>
            </div>

            <div className="flex flex-col items-start gap-[21px]">

                <div className="flex flex-col items-start gap-[12px]">
                    <h1 className="font-Nunito text-[18px] font-semibold">Upload File</h1>

                    <DragDrop change={handleDropFileChange} file={file?.file} dragging={handleOnDragging} onTypeError={handleTypeError}>
                    {/* fileTypes={file?.file?.type} */}
                        <div className="flex p-[12px] flex-col justify-center items-center gap-[24px] rounded-[10px] border-[1px] border-black border-opacity-12 border-dashed bg-[#F5F4F2]">
                            <div className="flex flex-col items-center gap-[12px]">
                                <div className="flex w-[4.375rem] h-[4.375rem] justify-center items-center gap-[10px] rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none">
                                    <Filesvg className="flex-shrink-0" />
                                </div>
                                <button className="flex h-[2.75rem] px-[16px] justify-center gap-[8px] rounded-[10px] border-[1px] border-[#4D4DFF] font-Nunito text-[16px] font-semibold items-center hover:bg-[#4D4DFF] hover:text-white">
                                    <Plus />
                                    Browse files
                                </button>
                                <div className="text-center font-Nunito italic text-[14px] font-normal">
                                    Only CSV (.csv), JSON (.json), and Excel (.xlsx), zip files are accepted.
                                </div>
                            </div>
                        </div>
                    </DragDrop>

                </div>

                <div className="flex flex-col items-start gap-[12px]">
                    <h1 className="font-Nunito text-[18px] font-semibold">Files uploaded</h1>
                    <div className="flex p-[12px] items-start content-start gap-[12px] flex-grow shrink-0 balance-0 flex-wrap">
                        {file.file.length>0 && file.file.map((file: File,index: number) => (
                            <div key={index}
                             className="flex min-h-[2rem] px-[16px] justify-center items-center gap-[8px] rounded-[50px] bg-[#F5F4F2]">
                            <div className="flex flex-col md:flex-row items-center gap-[8px] pr-3">
                                <SingleFilesvg className="flex shrink-0"/>
                                <h1 className="font-Nunito text-md font-normal">{file.name}</h1>
                                <div className="flex gap-3 items-center"><h1 className="font-Nunito text-md font-normal text-gray-300">{(file.size / 1048576).toFixed(4)}MB</h1>
                                <Closesvg onClick={() => handleRemoveFile(index)} className="hover:bg-red-400 rounded-md flex shrink-0"/></div>
                            </div>
                        </div>))}
                    </div>
                </div>

            </div>

            <ModelForm />

            <div className="flex justify-end items-end gap-[10px] w-full h-[44px] col-span-full">
                <Button theme="secondary" className="w-[8.938rem] h-full px-[16px] justify-center items-center gap-[8px] rounded-[10px] font-Nunito text-md font-semibold hover:bg-[#8080FF] hover:text-white">Cancel</Button>
                <Button theme="custom" className="h-full w-[9.688rem] px-[16px] justify-center items-center bg-[#8080FF] hover:bg-[#1616ff] rounded-[10px] font-Nunito text-md font-semibold text-white">Create Model</Button>
            </div>


        </div>)
}

export default CreateModel