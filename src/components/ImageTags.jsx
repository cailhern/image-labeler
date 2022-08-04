import { Tag, TagLabel } from "@chakra-ui/react";

export function ImageTags( tags ) {
  const customTags = [...Object.values(tags)];
	return (
		<>
    {customTags.map(label=>{return (
			<Tag key={label.id} size="lg" mb={3} mr={2} bgColor={label.bgColor} color={label.color}>
				<TagLabel>
					<span role="img" aria-label={label.iconLabel}>
						{label.icon}
					</span>
					{label.propName}: {label.value}
				</TagLabel>
			</Tag>
    )})}
		</>
	);
}
