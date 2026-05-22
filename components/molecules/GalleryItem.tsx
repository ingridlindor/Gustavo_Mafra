import Image from "next/image";

interface GalleryItemProps {
  src?: string;
  photoClass?: string;
  width: number;
  height: number;
  caption: string;
  alt?: string;
}

export default function GalleryItem({
  src,
  photoClass = "p1",
  width,
  height,
  caption,
  alt = "",
}: GalleryItemProps) {
  return (
    <div className="gallery-item flex-shrink-0 scroll-snap-align-start rounded overflow-hidden">
      {src ? (
        <Image
          src={src}
          alt={alt || caption}
          width={width}
          height={height}
          className="object-cover rounded"
          style={{ width, height }}
        />
      ) : (
        <div className={`photo-art ${photoClass}`} style={{ width, height }} />
      )}
      <p className="mt-2 text-[0.5rem] tracking-[0.2em] text-[#6b6660] uppercase px-0.5">
        {caption}
      </p>
    </div>
  );
}
