'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import Image from 'next/image'

// pass in close function
export default function Modal({
  trigger,
  children,
  title,
  // stack = ['react', 'next'],
  // repository,
  className,
}: {
  trigger?: React.ReactNode | string | null
  children?: React.ReactNode
  title: string
  // stack?: string[] | null
  // repository?: string
  className?: string
}) {
  return (
    <Dialog.Root>
      {trigger && (
        <Dialog.Trigger className={className}>{trigger}</Dialog.Trigger>
      )}
      <Dialog.Portal>
        {/* animate the content when modal is open */}
        <Dialog.Overlay className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 right-0 bottom-0 grid justify-end items-center overflow-y-auto">
          {/* animate the content when modal is open */}
          <Dialog.Content className="DialogContent min-w-[250px] w-[80dvw] h-[100dvh] bg-white rounded-l-md flex flex-col gap-6 duration-300 ">
            <Dialog.Close className="w-fit transition-all duration-200 hover:duration-200 bg-transparent hover:bg-slate-100 rounded-full p-3 m-2">
              <Image
                src={'./icons/x.svg'}
                alt={`close icon`}
                loading="lazy"
                width={15}
                height={15}
              />
            </Dialog.Close>
            <div className="w-full px-2 md:px-8">
              <Dialog.Title className="text-heading1 mb-6">
                {title}
              </Dialog.Title>
              {children}
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
