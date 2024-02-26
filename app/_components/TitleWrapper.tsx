export default function TitleWrapper({
  children,
  title,
  id,
}: {
  children: React.ReactNode
  title?: string | null
  id?: string
}) {
  return (
    <section
      id={id}
      className="h-full flex flex-col bg-foreground px-5 pt-5 pb-7 rounded-lg gap-3 max-h-fit"
    >
      {title && <h2 className="text-heading2 font-semibold">{title}</h2>}
      {children}
    </section>
  )
}
