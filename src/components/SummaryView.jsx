import { useState } from 'react';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import { LabelerForm } from './LabelerForm';
import { ImageContainer } from './ImageContainer';
import { mockedTags } from '../utils/enums';

export function SummaryView() {
  const [tags, setTags] = useState(mockedTags);

  const handleAddTag = (newTag) => {
    setTags((prevTags) => [...prevTags, newTag]);
  };

  return (
    <>
      <Heading fontSize="6xl">App</Heading>
      <SimpleGrid
        column={2}
        spacing={10}
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyItems="center"
      >
        <ImageContainer {...tags} />
        <LabelerForm handleAddTag={handleAddTag} />
      </SimpleGrid>
    </>
  );
}
