import {
  Heading,
  Box,
  Slider,
  SliderTrack,
  SliderMark,
  SliderFilledTrack,
  SliderThumb,
  Input,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from 'react';
import { FiActivity } from 'react-icons/fi';

export function ImageToLabel({
  handleSetImage,
  handleSetImageWidth,
  handleSetContainerWidth,
}) {
  const [sliderImageWidth, setSliderImageWidth] = useState(400);
  const [sliderContainerWidth, setSliderContainerWidth] = useState(640);
  const baseImage = useRef(null);

  const handleSetImageClick = () => {
    // eslint-disable-next-line
        const imagePath = baseImage.current.value.replace(/^.*[\\\/]/, "");
    handleSetImage(imagePath);
    baseImage.current.value = null;
  };

  const handleSetImageWidthChange = (width) => {
    const maxWidth = width >= sliderContainerWidth ? sliderContainerWidth : width;
    handleSetImageWidth(maxWidth);
    setSliderImageWidth(maxWidth);
  };

  const handleSetContainerWidthChange = (width) => {
    handleSetContainerWidth(width);
    setSliderContainerWidth(width);
  };

  const radioArray = [
    { value: 1, position: 'Top Left', isChecked: true },
    { value: 2, position: 'Top Center', isChecked: false },
    { value: 3, position: 'Top Right', isChecked: false },
    { value: 4, position: 'Center Left', isChecked: false },
    { value: 5, position: 'Center Center', isChecked: false },
    { value: 6, position: 'Center Right', isChecked: false },
    { value: 7, position: 'Bottom Left', isChecked: false },
    { value: 8, position: 'Bottom Center', isChecked: false },
    { value: 9, position: 'Bottom Right', isChecked: false },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
    >
      <Heading size="md">
        Pick position and adjust size of the image according to the
        gray container
      </Heading>
      <FormControl>
        <FormLabel>Select base image</FormLabel>
        <Input
          type="file"
          ref={baseImage}
          onChange={handleSetImageClick}
        />
      </FormControl>
      <Heading fontSize="lg" mt={20}>
        Container width
      </Heading>
      <Slider
        min={640}
        max={1080}
        defaultValue={640}
        mt={8}
        aria-label="slider"
        onChange={(val) => handleSetContainerWidthChange(val)}
      >
        <SliderMark
          value={sliderContainerWidth}
          textAlign="center"
          bg="red.500"
          color="white"
          mt="-10"
          ml="-5"
          w="14"
        >
          {sliderContainerWidth}
          px
        </SliderMark>
        <SliderTrack bg="red.200">
          <SliderFilledTrack bg="red" />
        </SliderTrack>
        <SliderThumb boxSize={8}>
          <Box color="red" as={FiActivity} />
        </SliderThumb>
      </Slider>
      <Heading fontSize="lg" mt={20}>
        Image width
      </Heading>
      <Slider
        min={400}
        max={1080}
        defaultValue={400}
        mt={8}
        aria-label="slider"
        onChange={(val) => handleSetImageWidthChange(val)}
      >
        <SliderMark
          value={sliderImageWidth}
          textAlign="center"
          bg="red.500"
          color="white"
          mt="-10"
          ml="-5"
          w="14"
        >
          {sliderImageWidth}
          px
        </SliderMark>
        <SliderTrack bg="red.200">
          <SliderFilledTrack bg="red" />
        </SliderTrack>
        <SliderThumb boxSize={8}>
          <Box color="red" as={FiActivity} />
        </SliderThumb>
      </Slider>
      <Box
        display="flex"
        flexDirection="row"
        justifyItems="center"
        justifyContent="space-around"
        mt={20}
      >
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(3, 1fr)"
          gap={6}
        >
          {radioArray.map((radio) => (
            <GridItem
              key={uuidv4()}
              rowSpan={1}
              colSpan={1}
              width="32"
              height="32"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg={
                                        radio.isChecked
                                          ? 'blue.600'
                                          : 'blue.200'
                                    }
              color={
                                        radio.isChecked
                                          ? 'whiteAlpha.900'
                                          : 'blackAlpha.900'
                                    }
              borderRadius="full"
            >
              {radio.position}
            </GridItem>
          ))}
        </Grid>
        <RadioGroup defaultValue="1" name="positionImage">
          <Stack spacing={4} direction="row">
            <Radio value="1">Top Left</Radio>
            <Radio value="2">Top Center</Radio>
            <Radio value="3">Top Right</Radio>
          </Stack>
          <Stack spacing={4} direction="row">
            <Radio value="4">Center Left</Radio>
            <Radio value="5">Center Center</Radio>
            <Radio value="6">Center Right</Radio>
          </Stack>
          <Stack spacing={4} direction="row">
            <Radio value="7">Bottom Left</Radio>
            <Radio value="8">Bottom Center</Radio>
            <Radio value="9">Bottom Right</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
}
