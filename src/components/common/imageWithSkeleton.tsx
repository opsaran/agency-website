import { Skeleton, useTheme } from "@mui/material";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

const ImageWithSkeleton: React.FunctionComponent<ImageProps> = (props) => {
  const { children, onLoad, alt = "", src = "/", ...otherProps } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const {
    palette: { text },
  } = useTheme();
  return (
    <>
      <Image
        alt={alt}
        src={src}
        onLoad={() => setIsLoaded(true)}
        {...otherProps}
      />
      {!isLoaded && (
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            backgroundColor: text.secondary,
            borderRadius: "4px",
            height: "100%",
          }}
        />
      )}
    </>
  );
};

export default ImageWithSkeleton;
