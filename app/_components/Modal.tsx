'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import Image from 'next/image'

// pass in close function
export default function Modal({
  children,
  triggerText,
  title,
  stack = ['react', 'next'],
  repository,
  ...props
}: {
  children: React.ReactNode
  triggerText: React.ReactNode | null
  title: string
  stack?: string[] | null
  repository?: string
}) {
  return (
    <Dialog.Root>
      {triggerText && <Dialog.Trigger>{triggerText}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 right-0 bottom-0 grid justify-end items-center overflow-y-auto">
          <Dialog.Content className="min-w-[250px] w-[80dvw] h-[100dvh] bg-white rounded-l-md flex flex-col gap-6">
            <Dialog.Close className="w-fit transition-all duration-200 hover:duration-200 bg-transparent hover:bg-slate-100 rounded-full p-3">
              <Image
                src={'./icons/x.svg'}
                alt={`close icon`}
                loading="lazy"
                width={15}
                height={15}
              />
            </Dialog.Close>
            <div className="w-full px-2">
              <Dialog.Title className="text-heading2">{title}</Dialog.Title>
              <div className="flex gap-2">
                <h3>Stack:</h3>
                <div className="flex gap-1">
                  {stack?.map((item: string) => (
                    <p
                      key={item}
                      className="border border-primary rounded-full px-2"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              {children}
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
