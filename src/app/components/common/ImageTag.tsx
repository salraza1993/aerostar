import Image from 'next/image'
import React from 'react'
type Props = {
  src: string,
  alt?: string,
  width?: number,
  height?: number,
  sizes?: string,
  style?: object,
  priority?: boolean,
  fill?: boolean,
}
function ImageTag({ src, alt, width, height, sizes, style, priority, fill }: Props) {
  const defaultStyles = { width: width || "100%", height: height || "100%" };
  return <Image
    src={src || ""}
    alt={alt || ""}
    width={(width = 0)}
    height={(height = 0)}
    sizes={sizes || ""}
    style={style || defaultStyles}
    fill={fill || true}
    priority={priority} />
}

export default ImageTag;