import { AspectRatio, Image } from '@chakra-ui/react';
import placeholder from '../assets/ImagePlaceholder.svg';

/**
 * A photo cropped to a fixed aspect ratio so cards keep their shape while the
 * image loads, and fall back to a local placeholder if it never does.
 *
 * `referrerPolicy="no-referrer"` matters for hot-linked photos: many sites
 * (including WordPress hosts) refuse to serve images when the request carries
 * a foreign Referer header.
 */
export default function CoverImage({
  src,
  alt,
  ratio = 16 / 9,
  imageProps,
  ...rest
}) {
  return (
    <AspectRatio ratio={ratio} w="100%" bg="gray.200" {...rest}>
      <Image
        src={src}
        alt={alt}
        fallbackSrc={placeholder}
        objectFit="cover"
        loading="lazy"
        referrerPolicy="no-referrer"
        {...imageProps}
      />
    </AspectRatio>
  );
}
