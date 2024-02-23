'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { Suspense } from 'react'

export default function Playlists() {
  return (
    <Tabs.Root className="flex w-full flex-col" defaultValue="tab1">
      <Tabs.List
        className="border-mauve6 flex shrink-0 border-b"
        aria-label="Manage your account"
      >
        <Tabs.Trigger
          className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-foreground px-5 text-[15px] leading-none text-black outline-none transition-all duration-300 first:rounded-tl-md last:rounded-tr-md hover:cursor-pointer hover:bg-secondary hover:text-foreground hover:duration-200 data-[state=active]:border-b-2 data-[state=active]:border-b-secondary data-[state=active]:text-secondary data-[state=active]:hover:text-foreground data-[state=active]:focus:relative"
          value="tab1"
        >
          Daily Jam
        </Tabs.Trigger>
        <Tabs.Trigger
          className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-foreground px-5 text-[15px] leading-none text-black outline-none transition-all duration-300 first:rounded-tl-md last:rounded-tr-md hover:cursor-pointer hover:bg-secondary hover:text-foreground hover:duration-200 data-[state=active]:border-b-2 data-[state=active]:border-b-secondary data-[state=active]:text-secondary data-[state=active]:hover:text-foreground data-[state=active]:focus:relative"
          value="tab2"
        >
          Instrumental Jam
        </Tabs.Trigger>
        <Tabs.Trigger
          className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-foreground px-5 text-[15px] leading-none text-black outline-none transition-all duration-300 first:rounded-tl-md last:rounded-tr-md hover:cursor-pointer hover:bg-secondary hover:text-foreground hover:duration-200 data-[state=active]:border-b-2 data-[state=active]:border-b-secondary data-[state=active]:text-secondary data-[state=active]:hover:text-foreground data-[state=active]:focus:relative"
          value="tab3"
        >
          Study Jam
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="grow rounded-b-md bg-foreground py-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab1"
      >
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/21rxvdHPMHhgFTLhz9Ohdw?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Tabs.Content>
      <Tabs.Content
        className="grow rounded-b-md bg-foreground py-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab2"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <iframe
            src="https://open.spotify.com/embed/playlist/3hlmdEryvkBpiyp0oSC3tA?utm_source=generator"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Suspense>
      </Tabs.Content>

      <Tabs.Content
        className="grow rounded-b-md bg-foreground py-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        value="tab3"
      >
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/74sUjcvpGfdOvCHvgzNEDO?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Tabs.Content>
    </Tabs.Root>
  )
}
