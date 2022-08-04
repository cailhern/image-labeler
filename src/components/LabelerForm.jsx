import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Spacer,
} from "@chakra-ui/react";

export function LabelerForm() {
	return (
		<>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyItems="center"
			>
					<Heading>ASDASDA</Heading>
				<FormControl m={4}>
					<FormLabel>Property Name</FormLabel>
					<Input type="text" />
				</FormControl>
				<FormControl m={4}>
					<FormLabel>Property Value</FormLabel>
					<Input type="text" />
				</FormControl>
				<FormControl m={4}>
					<FormLabel>Icon / Emoji</FormLabel>
					<Input type="text" />
				</FormControl>
				<FormControl m={4}>
					<FormLabel>Icon / Emoji Label</FormLabel>
					<Input type="text" />
				</FormControl>
				<Button colorScheme="purple" alignSelf="end" size="lg">
					Add tag
				</Button>
			</Box>
		</>
	);
}
