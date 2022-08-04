import { ImageTags } from "./ImageTags";
import profileImage from "../assets/images/profile.jpg";
import { Box, Heading } from "@chakra-ui/react";

export function ImageContainer(labels) {
  const customLabel = labels[0];
	return (
		<>
			<Heading
				size="2xl"
				display="flex"
				alignItems="center"
				justifyItems="center"
			>
				Image Labeler
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
				<ImageTags {...[customLabel]} />
			</Box>
		</>
	);
}
