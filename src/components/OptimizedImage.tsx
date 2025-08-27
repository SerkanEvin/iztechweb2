import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  quality?: 'low' | 'high';
  fallbackSrc?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  quality = 'high',
  fallbackSrc = '/insan.png',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setError(true);
      return;
    }

    const img = new Image();
    let isMounted = true;

    const loadImage = () => {
      try {
        // First load low quality image
        const lowQualitySrc = getLowQualitySrc(src);
        
        const img = new Image();
        img.src = lowQualitySrc;
        
        img.onload = () => {
          if (!isMounted) return;
          setImageSrc(lowQualitySrc);
          setIsLoading(false);
          
          // Then load high quality in the background
          if (quality === 'high') {
            const hiResImg = new Image();
            hiResImg.src = src;
            hiResImg.onload = () => {
              if (isMounted && !error) {
                setImageSrc(src);
              }
            };
            hiResImg.onerror = () => {
              console.error('Error loading high quality image:', src);
            };
          }
        };
        
        img.onerror = () => {
          console.error('Error loading low quality image:', lowQualitySrc);
          if (isMounted) {
            setError(true);
            setIsLoading(false);
          }
        };
      } catch (err) {
        console.error('Error in image loading:', err);
        if (isMounted) {
          setError(true);
          setIsLoading(false);
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [src, quality]);

  const getLowQualitySrc = (src: string): string => {
    try {
      // If you have a specific low quality version, you can modify this function
      // For now, we'll use the same image but with a query parameter
      // In a real app, you might want to use a CDN that supports image transformations
      return `${src}?q=30&w=200`;
    } catch (err) {
      console.error('Error generating low quality src:', err);
      return src;
    }
  };

  if (error) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={props.className}
        style={props.style}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <img
      src={imageSrc || fallbackSrc}
      alt={alt}
      className={props.className}
      style={{
        ...props.style,
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoading ? 0.8 : 1,
        filter: isLoading ? 'blur(5px)' : 'none',
      }}
      loading="lazy"
      decoding="async"
    />
  );
};

export default OptimizedImage;
