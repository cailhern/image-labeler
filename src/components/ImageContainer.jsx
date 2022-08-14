import { Box, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ImageTags } from './ImageTags';

export function ImageContainer({
  tags,
  imageUrl,
  imageWidth,
  containerWidth,
  imagePosition,
}) {
  const [valueContainerWidth] = [`${containerWidth}px`];

  const [valueImageWidth, valueImageHeight] = [
    `${imageWidth}px`,
    `${Math.floor((imageWidth * 10) / 7)}px`,
  ];

  const containerStyles = {
    width: valueContainerWidth,
  };

  const [imageProperties, setImageProperties] = useState({});

  const imagePositionProperties = (positionY, positionX) => {
    const {
      left, right, top, bottom, center, ...cleanPosition
    } = imageProperties;
    setImageProperties({
      ...cleanPosition,
      [positionX]: '0',
      [positionY]: '0',
    });
  };

  useEffect(() => {
    const [positionY, positionX] = imagePosition.toLowerCase().split(' ');
    imagePositionProperties(positionY, positionX);
  }, [imagePosition]);

  return (
    <Box
      position="relative"
      bgColor="gray.600"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      borderRadius="2xl"
      overflow="hidden"
      {...containerStyles}
    >
      <Image
        src={imageUrl}
        position="absolute"
        width={valueImageWidth}
        maxHeight={valueImageHeight}
        {...imageProperties}
      />
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="flex-end"
        height="100%"
        {...containerStyles}
      >
        <ImageTags {...tags} />
      </Box>
    </Box>
  );
}
