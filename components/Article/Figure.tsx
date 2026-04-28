import React from "react"

interface FigureProps {
  src: string
  alt?: string
  caption?: string
  className?: string
}

export default function Figure({ src, alt, caption, className }: FigureProps) {
  return (
    <figure className={`my-6 ${className || ""}`}>
      <img src={src} alt={alt || ""} className="w-full rounded-md object-cover" />
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-500">{caption}</figcaption>
      )}
    </figure>
  )
}
