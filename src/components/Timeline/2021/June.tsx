import * as React from 'react'
import { Zap, GitCommit, GitMerge, Camera } from 'react-feather'
import Image from 'next/image'
import { DateEntry, TimelineEntry } from '../Entry'

export function June() {
  return (
    <>
      <DateEntry title="June, 2021" />
      <TimelineEntry
        title="Exploring the Global Reach of Bilingualism on Twitter: A Geographic Visualization Study"
        timestamp="June 05, 2021"
        Icon={Camera}
        tint="red"
      >
        <div className="flex flex-col overflow-hidden transition-shadow bg-white rounded-md shadow md:flex-row dark:bg-gray-900 hover:shadow-cardHover">
          <div className="flex flex-col justify-start px-3 py-3 space-y-2 md:w-1/2">
            <p className="flex-1 px-2 font-normal">
              This research project examines the language use and connections of
              bilingual Twitter users. Using a network analysis approach, the
              study explores the connections between bilingual Twitter
              communities, focusing on users who tweet in mutliple languages.
              The research also includes a geographic visualization component,
              mapping the locations of bilingual Twitter communities.
            </p>
            <span />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=0CU6C0kJoCA&t=103s"
            >
              <div className="btn">
                <span>Watch video</span>
              </div>
            </a>
          </div>
          <div className="hidden w-full md:w-1/2 md:inline-block">
            <Image
              width="640"
              height="698"
              layout="responsive"
              src="/static/img/project/cam1.png"
              alt="Paul's Research expo presentation - June 2021"
            />
          </div>
        </div>
      </TimelineEntry>
    </>
  )
}
