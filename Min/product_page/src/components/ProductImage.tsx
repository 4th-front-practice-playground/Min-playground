interface ProductImageProps {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="flex w-full items-center justify-center md:max-w-[530px]">
      <img
        className="h-auto w-full max-w-[530px] object-contain shadow-tv"
        src={src}
        alt={alt}
      />
    </div>
  );
}
