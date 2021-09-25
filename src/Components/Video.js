import { useRef } from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";

const Video = ({ url, title }) => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <div ref={containerRef}>
      {lockRef.current && (
        <iframe
          width="420px"
          height="auto"
          src={url}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default Video;