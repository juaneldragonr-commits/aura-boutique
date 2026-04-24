"use client";
import { useState } from "react";
import Image from "next/image";

interface ProductImageProps {
  src?: string;
  alt: string;
  productId: string;
}

export default function ProductImage({ src, alt, productId }: ProductImageProps) {
  const [imgError, setImgError] = useState(false);

  // Lógica: Si hay error de carga (404) o la URL está vacía, usamos LoremFlickr
  const finalImageUrl = (imgError || !src)
    ? `https://loremflickr.com/600/800/fashion,clothing,shirt?lock=${productId}`
    : src;

  return (
    <Image
      src={finalImageUrl}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setImgError(true)}
      priority
      sizes="(max-width: 768px) 100vw, 40vw"
    />
  );
}