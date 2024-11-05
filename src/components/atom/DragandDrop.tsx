import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF", "csv", "CSV","json","JSON","pdf","docx","txt", "docx", "pages", "rtf", "wpd", "wps","xls","xlsx","zip"];

function DragDrop(props: any) {

    const { node, children, change } = props
    const [file, setFile] = useState(null);

    const handleChange = (file: any) => {
        try {
            console.log(file, "fileeee");
            setFile(file);
            change(file)
        } catch (error) {
            console.log("first,error", error)
        }
    };

    const handleDraggingStateChange = (dragging: any) => {
        console.log(props.file, "drag in fileupload", dragging);
        props.dragging(dragging)
    }

    const handleTypeError = (error: any) => {
        // props.onTypeError(error)
    }

    return (
        <FileUploader onDrop={handleChange} onSelect={handleChange} name="csv_file" types={props.fileTypes ?? fileTypes} fileOrFiles={props.file}
            hoverTitle="Drop Here"
            onDraggingStateChange={handleDraggingStateChange}
            onTypeError={handleTypeError}
        >
            {children}
            {/* <div className="btn flex flex-col items-center justify-center p-4 border-dashed border-2 border-gray-300 rounded-md"> */}
            {/* <ArchiveIcon/> */}
            {/* <p className="px-20"> Drag file to this area to upload</p> */}
            {/* <p> or </p> */}
            {/* <div
className="border border-[#f78e1ea8] cursor-pointer px-4 gap-2 py-2 mt-2 bg-[#ffffff] text-sm font-medium text-center text-gray-900 rounded-md hover:bg-[#f78e1ea8]"
// onClick={handleViewProfile}
>Browse Files</div> */}
            {/* </div> */}
        </FileUploader>
    );
}
export default DragDrop;
