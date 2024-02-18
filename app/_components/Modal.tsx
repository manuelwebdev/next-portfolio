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
        <Dialog.Overlay className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 right-0 bottom-0 grid justify-end items-center">
          <Dialog.Content className="DialogContent min-w-[250px] w-[80dvw] h-[100dvh] bg-white rounded-l-md grid grid-rows-[min-content_auto] duration-300 overflow-y-auto">
            <Dialog.Close className="w-fit transition-all hover:transition-all duration-400 hover:duration-200 bg-[rgb(241,245,249,0.5)] hover:bg-slate-200 rounded-full p-3 m-2 sticky top-3 bg-white border-2 border-solid border-secondary">
              <Image
                src={'./icons/x.svg'}
                alt={`close icon`}
                loading="lazy"
                width={15}
                height={15}
              />
            </Dialog.Close>
            <div className="w-full h-full px-2 md:px-8">
              <Dialog.Title className="text-heading1">{title}</Dialog.Title>
              <div className="overflow-y-auto">{children}</div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
