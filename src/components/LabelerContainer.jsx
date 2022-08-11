import { LabelStep } from './LabelStep';
import { ImageToLabel } from './ImageToLabel';

export function LabelerContainer({
  handleSetImage,
  handleSetImageWidth,
  handleSetContainerWidth,
  handleSetImagePosition,
  imageWidth,
  containerWidth,
  imagePosition,
}) {
  const step = 0;
  return (
    <>
      <LabelStep step={step} />
      <ImageToLabel
        {...{
          handleSetImage,
          handleSetImageWidth,
          handleSetContainerWidth,
          handleSetImagePosition,
          imageWidth,
          containerWidth,
          imagePosition,
        }}
      />
    </>
  );
}
