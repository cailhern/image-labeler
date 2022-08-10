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
  Grid,
  useRadioGroup,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { FiActivity } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import { radioPositionValue } from '../utils/enums';
import { RadioImagePosition } from './RadioImagePosition';

export function ImageToLabel({
  handleSetImage,
  handleSetImageWidth,
  handleSetContainerWidth,
  handleSetImagePosition,
}) {
  const [sliderImageWidth, setSliderImageWidth] = useState(400);
  const [sliderContainerWidth, setSliderContainerWidth] = useState(640);
  const [radioSelected, setRadioSelected] = useState('Top Right');

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

  const handleRadioselected = (radioSelectedClicked) => {
    handleSetImagePosition(radioSelectedClicked);
    setRadioSelected(radioSelectedClicked);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'positionValue',
    defaultValue: radioSelected,
    onChange: handleRadioselected,
  });

  const group = getRootProps();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
    >
      <Heading size="md">
        Pick position and adjust size of the image according to the gray
        container
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
          {...group}
        >
          {radioPositionValue.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioImagePosition key={uuidv4()} {...radio}>
                {value}
              </RadioImagePosition>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
