import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, 'onLoad'> {
    className?: string;
    onLoad?: () => void;
}

const CustomImage = ({ onLoad, src, className, alt, ...rest }: Props) => {
    const [imageLoading, setImageLoading] = useState(true);

    const handleImageLoad = () => {
        setImageLoading(false);
        onLoad && onLoad();
    };

    const handleImageError = () => {
        setImageLoading(false);
    };

    return (
        <div>
            <Image
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                onError={handleImageError}
                {...rest}
            />
        </div>
    );
};

export default CustomImage;
