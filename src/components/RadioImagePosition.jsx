import { Box, GridItem, useRadio } from '@chakra-ui/react';

export function RadioImagePosition(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const { children } = props;
  return (
    <Box
      as="label"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <input {...input} />
      <GridItem
        {...checkbox}
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        rowSpan={1}
        colSpan={1}
        width="14"
        height="14"
        fontSize="sm"
        borderRadius="full"
        boxShadow="md"
        _checked={{
          bg: 'blue.600',
          color: 'white',
          borderColor: 'blue.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      />
      {children}
    </Box>
  );
}
