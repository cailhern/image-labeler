import { useRef } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
} from '@chakra-ui/react';

export function LabelerForm({ handleAddTag }) {
    const propertyName = useRef(null);
    const propertyValue = useRef(null);
    const propertyIcon = useRef(null);
    const propertyIconLabel = useRef(null);
    const propertyColorLabel = useRef(null);
    const propertyBgColorLabel = useRef(null);

    const handleAddTagClick = () => {
        const newTag = {
            propName: propertyName.current.value,
            type: 'property',
            value: propertyValue.current.value,
            color: propertyColorLabel.current.value,
            bgColor: propertyBgColorLabel.current.value,
            icon: propertyIcon.current.value,
            iconLabel: propertyIconLabel.current.value,
        };
        handleAddTag(newTag);
        propertyName.current.value = null;
        propertyValue.current.value = null;
        propertyColorLabel.current.value = null;
        propertyBgColorLabel.current.value = null;
        propertyIcon.current.value = null;
        propertyIconLabel.current.value = null;
    };

    return (
      <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
        >
          <Heading>Add tags</Heading>
          <FormControl m={4}>
              <FormLabel>Property Name</FormLabel>
              <Input ref={propertyName} type="text" />
            </FormControl>
          <FormControl m={4}>
              <FormLabel>Property Value</FormLabel>
              <Input ref={propertyValue} type="text" />
            </FormControl>
          <FormControl m={4}>
              <FormLabel>Icon / Emoji</FormLabel>
              <Input ref={propertyIcon} type="text" />
            </FormControl>
          <FormControl m={4}>
              <FormLabel>Icon / Emoji Label</FormLabel>
              <Input ref={propertyIconLabel} type="text" />
            </FormControl>
          <FormControl m={4}>
              <FormLabel>Color Label</FormLabel>
              <Input ref={propertyColorLabel} type="color" />
            </FormControl>
          <FormControl m={4}>
              <FormLabel>Background Color Label</FormLabel>
              <Input ref={propertyBgColorLabel} type="color" />
            </FormControl>
          <Button
              colorScheme="purple"
              alignSelf="end"
              size="lg"
              onClick={handleAddTagClick}
            >
              Add tag
            </Button>
        </Box>
    );
}
