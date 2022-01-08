import React, { Fragment, useState } from 'react'

export const FileUpload = () => {
    const [file,setFile] = useState('');
    const [filename,setFilename] = useState('Choose File');

    const onChange = e =>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e =>{
        e.preventDefault();

    }


    return (
        <div>
            <Fragment>

                <form>
                    <div className='custom-file mb-4'>
                        <input type='file' className='custom-file-input' id='customFile' onChange={onChange}/>
                        <label className='custom-file-label' htmlFor='customFile'>
                            {filename}
                        </label>
                    </div>
                    <input type='submit' className='btn btn-primary btn-block mt-4' id='customFileUpload' value='Upload' />
                </form>

            </Fragment>
        </div>
    )
}


