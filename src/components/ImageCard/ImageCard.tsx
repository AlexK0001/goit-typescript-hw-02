import React from 'react';

type Image = {
    id: string;
    urls: {
        small: string;
        medium: string;
        large: string;
    };
    alt_description: string | null;
    description?: string;
};

type ImageCardProps = {
    image: Image;
    onImageClick: (image: Image) => void;
    openModal: () => void;
};

export default function ImageCard({ image, onImageClick, openModal }: ImageCardProps) {
    const handleClick = () => {
        onImageClick(image);
        openModal();
    };
    return (
        <div onClick={handleClick}>
            <img src={image.urls.small} alt={image.alt_description || 'Image'} />
        </div>
    );
}
