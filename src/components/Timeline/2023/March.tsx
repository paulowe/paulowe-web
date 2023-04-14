import * as React from 'react'
import { Zap, CheckCircle, Camera, GitCommit, Plus } from 'react-feather'
import Image from 'next/image'
import { DateEntry, Notes, TimelineEntry } from '../Entry'

export function March() {
  return (
    <>
      <DateEntry title="Present" />
      {/* <TimelineEntry
        title="Google and BMO's Analytics Teams Meet in Toronto"
        timestamp="March 16, 2023"
        Icon={Camera}
      >
        <p>
          Innovation takes center stage as Google and BMO&apos;s Cloud and
          Advanced Analytics teams convene to share expertise and insights on
          the future of marketing.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <Image
            src="https://d2fl8krjhnb3wd.cloudfront.net/static/photos/analytics-h0.png"
            width="2362"
            height="1772"
            layout="responsive"
            className="rounded"
            alt="Photo from the competition, Toronto"
          />
          <Image
            src="https://d2fl8krjhnb3wd.cloudfront.net/static/photos/analytics-h1.png"
            width="2362"
            height="1772"
            layout="responsive"
            className="rounded"
            alt="Photo from the competition, Toronto"
          />
          <Image
            src="https://d2fl8krjhnb3wd.cloudfront.net/static/photos/analytics-h2.png"
            width="2362"
            height="1772"
            layout="responsive"
            className="rounded"
            alt="Photo from the competition, Toronto"
          />
        </div>
      </TimelineEntry> */}
      <TimelineEntry
        title="Convolutional Neural Networks for Sustainable Agriculture"
        timestamp="March 11, 2023"
        Icon={Plus}
        tint="blue"
      >
        <div className="flex flex-col overflow-hidden transition-shadow bg-white rounded-md shadow md:flex-row dark:bg-gray-900 hover:shadow-cardHover">
          <div className="flex flex-col justify-start px-3 py-3 space-y-2 md:w-1/2">
            <p className="flex-1 px-2 font-normal">
              This notebook demonstrates how I trained an ensemble ConvNet for
              image classification on the iCassava 2019 dataset. The project
              aims to create a powerful model to support sustainable agriculture
              and help secure the future of farming in Tanzania.
            </p>
            <span />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/static/docs/CropNet-4-Tanzania.html"
            >
              <div className="btn">
                <span>View Notebook</span>
              </div>
            </a>
          </div>
          <div className="hidden w-full md:w-1/2 md:inline-block">
            <Image
              width="640"
              height="698"
              layout="responsive"
              src="https://d2fl8krjhnb3wd.cloudfront.net/static/img/project/cropnet.png"
              alt="A preview of the CropNet Methodology"
            />
          </div>
        </div>
      </TimelineEntry>
    </>
  )
}
