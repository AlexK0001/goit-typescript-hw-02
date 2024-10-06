import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import React from 'react';
import { Image } from '../types';


type ImageGalleryProps = {
    images: Image[];
    handleImageClick: (image: Image) => void;
    // openModal: () => void;
};

export default function ImageGallery({ images, handleImageClick }: ImageGalleryProps) {
    return (
        <ul className={css.images}>
            {images.map(image => (
                <li key={image.id}>
                    <ImageCard image={image} onImageClick={handleImageClick} />
                </li>
            ))}
        </ul>
    );
}
