import React, { useRef, useState } from 'react';
import default_image from '../Assets/default_image.svg';
import './ImageGenerator.css';

export const ImageGenerator = () => {
    const [img_url, setImg_url] = useState(default_image);
    let inputRef = useRef(null);

    const imageGenerator = async () => {
        const userInput = inputRef.current.value.trim();

        // Ensure user input is not empty
        if (!userInput) {
            alert("Please enter a description!");
            return;
        }

        try {
            const response = await fetch("https://api.openai.com/v1/images/generations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // Secure API key
                },
                body: JSON.stringify({
                    model: "dall-e-3",  // Ensure the model is specified correctly
                    prompt: userInput,
                    n: 1,
                    size: "512x512",  // Adjust the size as per your requirement
                }),
            });

            if (!response.ok) {
                // Log the response for better debugging
                const errorDetails = await response.json();
                console.error("API Error Response:", errorDetails);
                throw new Error(`Error ${response.status}: ${errorDetails.error.message || 'Unknown error'}`);
            }

            let data = await response.json();
            console.log(data);  // For debugging purposes
            setImg_url(data.data[0].url);  // Update image URL with the generated image

        } catch (error) {
            console.error("Error fetching image:", error);
            alert(`Failed to generate image: ${error.message}`);
        }
    };

    return (
        <div className='ai-image-generator'>
            <div className="header">
                AI Image <span>Generator</span>
            </div>
            <div className="image-loading">
                <div className="image">
                    <img src={img_url} alt="Generated Image" />
                </div>
                <div className="search-box">
                    <input type="text" ref={inputRef} className='search-input' placeholder='Describe the image you want to create' />
                    <div className="generate-btn" onClick={imageGenerator}>Generate</div>
                </div>
            </div>
        </div>
    );
};
