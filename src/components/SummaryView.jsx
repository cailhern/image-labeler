import { useState } from 'react';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import { LabelerForm } from './LabelerForm';
import { ImageContainer } from './ImageContainer';
import { mockedTags } from '../utils/enums';
import { LabelerContainer } from './LabelerContainer';

export function SummaryView() {
  const [tags, setTags] = useState(mockedTags);
  const [imageUrl, setImageUrl] = useState('/src/assets/images/profile.jpg');
  const [imageWidth, setImageWidth] = useState(400);
  const [containerWidth, setContainerWidth] = useState(640);
  const [imagePosition, setImagePosition] = useState('Top Right');

  const handleAddTag = (newTag) => {
    setTags((prevTags) => [...prevTags, newTag]);
  };

  const handleSetImage = (newImageUrl) => {
    setImageUrl(`/src/assets/images/${newImageUrl}`);
  };

  const handleSetImageWidth = (imageWidthProvided) => {
    setImageWidth(imageWidthProvided);
  };

  const handleSetContainerWidth = (containerWidthProvided) => {
    setContainerWidth(containerWidthProvided);
  };

  const handleSetImagePosition = (imagePositionProvided) => {
    setImagePosition(imagePositionProvided);
  };

  return (
    <>
      <Heading
        fontSize="6xl"
        display="flex"
        alignItems="center"
        justifyItems="center"
        justifyContent="center"
        m={8}
      >
        Tinder Labeler
      </Heading>
      <SimpleGrid
        column={2}
        spacing={10}
        display="flex"
        flexDirection="row"
        justifyItems="center"
        justifyContent="space-evenly"
      >
        <ImageContainer
          {...{
            tags,
            imageUrl,
            imageWidth,
            containerWidth,
            imagePosition,
          }}
        />
        <LabelerForm handleAddTag={handleAddTag} />
        <LabelerContainer
          handleSetImage={handleSetImage}
          handleSetImageWidth={handleSetImageWidth}
          handleSetContainerWidth={handleSetContainerWidth}
          handleSetImagePosition={handleSetImagePosition}
        />
      </SimpleGrid>
    </>
  );
}
