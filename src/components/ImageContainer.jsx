import { Box } from '@chakra-ui/react';
import { ImageTags } from './ImageTags';

export function ImageContainer({
  tags,
  imageUrl,
  imageWidth,
  containerWidth,
  imagePosition,
}) {
  const [valueContainerWidth, valueContainerHeight] = [
    `${containerWidth}px`,
    `${Math.floor((containerWidth * 10) / 7)}px`,
  ];
  const [valueImageWidth, valueImageHeight] = [
    `${imageWidth}px`,
    `${Math.floor((imageWidth * 10) / 7)}px`,
  ];

  const containerStyles = {
    width: valueContainerWidth,
    height: valueContainerHeight,
  };

  const bgImageProperties = {
    backgroundImage: `url(${imageUrl})`,
    width: valueImageWidth,
    height: valueImageHeight,
    imagePosition,
  };
  return (
    <Box
      m={4}
      bgColor="gray.600"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
      borderRadius="2xl"
      {...containerStyles}
    >
      <Box
        backgroundPosition="top left"
        backgroundSize="cover"
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="flex-end"
        borderRadius="2xl"
        transform="revert"
        {...bgImageProperties}
      >
        <ImageTags {...tags} />
      </Box>
    </Box>
  );
}
