import { Tag, TagLabel } from "@chakra-ui/react";

export function ImageTags( labels ) {
  const customLabel = labels[0];
	return (
		<>
    
    {customLabel.map(label=>{return (
			<Tag key={label.id} size="lg" mb={3} mr={2}>
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
