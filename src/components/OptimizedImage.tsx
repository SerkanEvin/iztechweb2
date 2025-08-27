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
      // Increased quality from 30 to 50 and size to 300px for better initial quality
      // This will make the initial load look better while still being fast
      return `${src}?q=50&w=300`;
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
        transition: 'opacity 0.5s ease-in-out',
        opacity: isLoading ? 0.9 : 1,
        filter: isLoading ? 'blur(3px)' : 'none',
      }}
      loading="lazy"
      decoding="async"
    />
  );
};

export default OptimizedImage;
