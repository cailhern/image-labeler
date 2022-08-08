import { LabelStep } from './LabelStep';
import { ImageToLabel } from './ImageToLabel';

export function LabelerContainer({
  handleSetImage,
  handleSetImageWidth,
  handleSetContainerWidth,
}) {
  const step = 0;
  return (
    <>
      <LabelStep step={step} />
      <ImageToLabel
        handleSetImage={handleSetImage}
        handleSetImageWidth={handleSetImageWidth}
        handleSetContainerWidth={handleSetContainerWidth}
      />
    </>
  );
}
