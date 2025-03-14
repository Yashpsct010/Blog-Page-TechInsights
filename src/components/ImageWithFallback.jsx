import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageWithFallback = ({ src, alt, className, ...props }) => {
    const [error, setError] = useState(false);

    const fallbackImage = "https://placehold.co/800x600?text=TechInsights";

    const handleError = () => {
        setError(true);
    };

    return (
        <img
            src={error ? fallbackImage : src}
            alt={alt}
            className={className}
            onError={handleError}
            {...props}
        />
    );
};

ImageWithFallback.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ImageWithFallback;
