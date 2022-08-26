import React, { useState } from 'react'
import Button from '../button/Button';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File | string | Blob | undefined | any>();
    const [isFilePicked, setIsFilePicked] = useState(false);

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changeHandler = (event: any) => {
        setSelectedFile((event.target).files[0]);
        // setIsSelected(true);
    };

    const handleSubmission = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault()
        const formData = new FormData();

        formData.append('File', selectedFile);

        fetch(
            'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
            {
                method: 'POST',
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };



    return (
        <div>
            <form className='flex items-center my-3'
            // onSubmit={handleSubmission}
            >

                <input type="file" name="file" className='w-full bg-[#F1F3FF]' placeholder='Select an audio file' onChange={changeHandler} />
                <div>
                    <Button type='submit'
                        onClick={handleSubmission}
                    >Add Audio</Button>
                </div>
            </form>
        </div>
    )
}

export default FileUpload
