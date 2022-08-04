import { Box, SimpleGrid } from "@chakra-ui/react";

import { LabelerForm } from "./LabelerForm";
import { ImageContainer } from "./ImageContainer";

export function SummaryView() {
	const labels = [
		{
			id: 1,
			propName: "Height",
			type: "property",
			value: "180",
			color: "tomato",
			icon: "📏",
			iconLabel: "ruler",
		},
		{
			id: 2,
			propName: "Status",
			type: "property",
			value: "Single",
			color: "tomato",
			icon: "😀",
			iconLabel: "emotional-status",
		},
	];
	return (
		<>
			<SimpleGrid
				column={2}
				spacing={10}
				display="flex"
				flexDirection="row"
				alignItems="center"
				justifyItems="center"
			>
				<Box
					m={4}
					boxSize="xl"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyItems="center"
				>
					<ImageContainer  {...[labels]}/>
				</Box>
				<LabelerForm />
			</SimpleGrid>
		</>
	);
}
