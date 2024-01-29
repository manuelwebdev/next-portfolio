'use client'

import Image from 'next/image'

export default function ProjectCard({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string
  title: string
  description: string
}) {
  return (
    <div className="w-full p-2 bg-secondary rounded text-white flex flex-col gap-3">
      <Image
        src={imageUrl}
        alt={`${title}: ${description}`}
        width={1000}
        height={1000}
        loading="lazy"
        className="w-full object-cover rounded-sm "
      />
      <div className="flex flex-col gap-1">
        <h2 className="text-heading3 md:text-heading2 font-bold leading-5">
          {title}
        </h2>
        <p className="text-paragraph">{description}</p>
      </div>
    </div>
  )
}
