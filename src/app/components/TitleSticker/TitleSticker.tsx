import React, { FunctionComponent } from "react";

type TitleStickerProps = {
  text?: string;
};
const TitleSticker: FunctionComponent<TitleStickerProps> = ({
  text,
}) => {
  return (
    <div className="w-full">
      <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-400 relative inline-block">
        <span className="relative text-white">
          {text}
        </span>
      </span>
    </div>
  );
};

export default TitleSticker;
