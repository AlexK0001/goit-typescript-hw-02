import React from 'react';
import { Image } from '../types';


type ImageCardProps = {
    image: Image;
    onImageClick: (image: Image) => void;
    // openModal: () => void;
};

export default function ImageCard({ image, onImageClick }: ImageCardProps) {
    const handleClick = () => {
        onImageClick(image);
        // openModal();
    };
    return (
        <div onClick={handleClick}>
            <img src={image.urls.small} alt={image.alt_description || 'Image'} />
        </div>
    );
}
