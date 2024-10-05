import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
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

type ImageGalleryProps = {
    images: Image[];
    handleImageClick: (image: Image) => void;
    openModal: () => void;
};

export default function ImageGallery({ images, handleImageClick, openModal }: ImageGalleryProps) {
    return (
        <ul className={css.images}>
            {images.map(image => (
                <li key={image.id}>
                    <ImageCard image={image} onImageClick={handleImageClick} openModal={openModal}/>
                </li>
            ))}
        </ul>
    );
}
