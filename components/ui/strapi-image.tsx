import Image from "next/image";
import { mediaUrl } from "@/lib/strapi/client";
import type { StrapiMedia } from "@/lib/strapi/types";

interface StrapiImageProps {
  media: StrapiMedia | null | undefined;
  className?: string;
  /** falls back to the media library's alternative text */
  alt?: string;
  sizes?: string;
  priority?: boolean;
}

/** next/image for a Strapi media entry (renders nothing when the field is empty). */
export function StrapiImage({ media, className, alt, sizes, priority }: StrapiImageProps) {
  if (!media) return null;
  const known = Boolean(media.width && media.height);
  return (
    <Image
      src={mediaUrl(media.url)}
      alt={alt ?? media.alternativeText ?? ""}
      // unknown dimensions (some SVGs): let the file's own size decide instead of a guessed aspect ratio
      width={known ? media.width! : 0}
      height={known ? media.height! : 0}
      unoptimized={!known || undefined}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
