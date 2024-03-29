import React from "react";
import Image from "Components/image";
export default function VideoCard({ imageUrl }) {
  return (
    <div
      style={{
        textAlign: "center",
        // background: linear-gradient(180deg, rgba(0, 0, 0, 0) 64.06%, rgba(3, 1, 13, 0.5) 100%);
        borderRadius: 5,
        // minHeight
        //overflow(img borderRadius: inherit)
      }}
    >
      <Image src={imageUrl} alt="video preview" />
    </div>
  );
}
