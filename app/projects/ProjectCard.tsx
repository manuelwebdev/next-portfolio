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
    <div className="w-full p-2 bg-secondary rounded text-white">
      <Image
        src={imageUrl}
        alt={`${title}: ${description}`}
        width={600}
        height={400}
        loading="lazy"
        className="rounded-sm"
      />
      <h2 className="text-heading2 font-bold">{title}</h2>
      <p className="text-paragraph">{description}</p>
    </div>
  )
}
