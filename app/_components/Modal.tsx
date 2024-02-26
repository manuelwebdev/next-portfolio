'use client'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

export default function Modal({
  trigger,
  children,
  title,
  className,
}: {
  trigger?: React.ReactNode | string | null
  children?: React.ReactNode
  title: string
  className?: string
}) {
  return (
    <Dialog.Root>
      {trigger && (
        <Dialog.Trigger className={className}>{trigger}</Dialog.Trigger>
      )}
      <Dialog.Portal>
        {/* animate the content when modal is open */}
        <Dialog.Overlay className="fixed bottom-0 left-0 right-0 top-0 grid items-center justify-end bg-[rgba(0,0,0,0.5)]">
          <Dialog.Content className="DialogContent grid h-[100dvh] w-[90vw] min-w-[250px] grid-rows-[min-content_auto] overflow-y-auto rounded-l-md bg-white pb-20 duration-300 md:w-[80dvw]">
            <Dialog.Close className="duration-400 sticky top-3 m-2 w-fit justify-self-end rounded-full border-2 border-solid border-secondary bg-[rgb(241,245,249,0.5)] bg-white p-3 transition-all hover:bg-slate-200 hover:transition-all hover:duration-200">
              <Image
                src={'./icons/x.svg'}
                alt={`close icon`}
                loading="lazy"
                width={15}
                height={15}
              />
            </Dialog.Close>
            <div className="h-full w-full px-2 md:px-8">
              <Dialog.Title className="text-heading1">{title}</Dialog.Title>
              <div className="overflow-y-auto">{children}</div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
