export default function TitleWrapper({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className="h-full flex flex-col bg-foreground px-5 pt-5 pb-7 rounded-lg gap-3">
      <h2 className="text-heading2 font-semibold">{title}</h2>
      {children}
    </div>
  )
}
