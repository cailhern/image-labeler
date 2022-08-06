import { Box, Heading } from '@chakra-ui/react';
import { ImageTags } from './ImageTags';
import profileImage from '../assets/images/profile.jpg';

export function ImageContainer(tags) {
    return (
      <Box
          m={4}
          boxSize="xl"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
        >
          <Heading
              size="2xl"
              display="flex"
              alignItems="center"
              justifyItems="center"
              m={8}
            >
              Tinder Labeler
            </Heading>
          <Box
              boxSize="xl"
              backgroundImage={profileImage}
              backgroundPosition="center"
              backgroundSize="cover"
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              justifyContent="flex-end"
              borderRadius="2xl"
            >
              <ImageTags {...tags} />
            </Box>
        </Box>
    );
}
