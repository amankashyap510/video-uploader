import React, { useState } from 'react';
import { uploadVideo } from '../services/api';

const UploadData = () => {
    const [videoData, setVideoData] = useState({ title: '', description: '', videoUrl: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setVideoData({ ...videoData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await uploadVideo(videoData);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>Upload Data</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
                <input type="file" name="videoUrl" accept="video/mp4" onChange={handleChange} required />
                <button type="submit" disabled={isLoading}>{isLoading ? 'Uploading...' : 'Upload Video'}</button>
            </form>
        </div>
    );
};

export default UploadData;
