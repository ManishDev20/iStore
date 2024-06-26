import React from 'react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = () => {
    const [dropedFile, setDropedFile] = useState([])

    const onDrop = (acceptedFile) => {
        setDropedFile(acceptedFile)
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className='w-[300px] p-2 min-h-[200px] border-2 border-dashed rounded cursor-pointer flex flex-col justify-center items-center ' {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive
                    ?
                    <p>Drop the files here ...</p>
                    :
                    <div className='flex flex-col items-center gap-3'>
                        <svg width="24px" height="16px" viewBox="0 0 24 16" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <title>cloud_upload</title>
                            <desc>Created with Sketch.</desc>
                            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Outlined" transform="translate(-270.000000, -2284.000000)">
                                    <g id="File" transform="translate(100.000000, 2226.000000)">
                                        <g id="Outlined-/-File-/-cloud_upload" transform="translate(170.000000, 54.000000)">
                                            <g>
                                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                                <path d="M19.35,10.04 C18.67,6.59 15.64,4 12,4 C9.11,4 6.6,5.64 5.35,8.04 C2.34,8.36 0,10.91 0,14 C0,17.31 2.69,20 6,20 L19,20 C21.76,20 24,17.76 24,15 C24,12.36 21.95,10.22 19.35,10.04 Z M19,18 L6,18 C3.79,18 2,16.21 2,14 C2,11.95 3.53,10.24 5.56,10.03 L6.63,9.92 L7.13,8.97 C8.08,7.14 9.94,6 12,6 C14.62,6 16.88,7.86 17.39,10.43 L17.69,11.93 L19.22,12.04 C20.78,12.14 22,13.45 22,15 C22,16.65 20.65,18 19,18 Z M8,13 L10.55,13 L10.55,16 L13.45,16 L13.45,13 L16,13 L12,9 L8,13 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p>Upload file</p>
                    </div>
            }
            {
                dropedFile.length > 0 && (
                    <div>

                        {
                            dropedFile.map(
                                (file) => {
                                    return (
                                        <ul className=''>
                                            <li key={file.name} className='flex-col flex justify-center items-center'>
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt={file.name}
                                                    style={{ maxWidth: '100%', maxHeight: '100px', marginTop: '10px', alignSelf: 'center' }}
                                                />
                                                {file.name} - {file.size} bytes
                                            </li>
                                        </ul>
                                    )
                                }
                            )
                        }

                    </div>
                )
            }
        </div>
    );
}


export default Dropzone;
