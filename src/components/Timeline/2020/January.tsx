import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GitCommit, GitMerge, Zap, Wind, Twitter, Camera } from 'react-feather'
import { ButtonSet, DateEntry, Notes, TimelineEntry } from '../Entry'
import { BlogPost } from '../BlogPost'

export function January() {
  return (
    <>
      <DateEntry title="January, 2020" />

      <TimelineEntry
        title="Social Network Analysis"
        timestamp="January 29, 2020"
        Icon={Zap}
        tint="purple"
      >
        <div className="flex flex-col overflow-hidden transition-shadow bg-white rounded-md shadow md:flex-row dark:bg-gray-900 hover:shadow-cardHover">
          <div className="flex flex-col justify-start px-3 py-3 space-y-2 md:w-1/2">
            <p className="flex-1 px-2 font-normal">
              I conducted a social network analysis to understand the structural
              properties of networks on twitter. I used tweepy to test and
              integrate with twitter’s REST and Streaming APIs.
            </p>
            <span />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://towardsdatascience.com/mining-twitter-data-ba4e44e6aecc"
            >
              <div className="btn">
                <span>Read technical report</span>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/paulowe/mining-twitter"
            >
              <div className="btn">
                <GitMerge size={16} />
                <span>View project on Github</span>
              </div>
            </a>
          </div>
          <div className="hidden w-full md:w-1/2 md:inline-block">
            <Image
              width="640"
              height="698"
              layout="responsive"
              src="https://d2fl8krjhnb3wd.cloudfront.net/static/img/project/twitter.png"
              alt="A preview of the twitter logo"
            />
          </div>
        </div>
      </TimelineEntry>
      <TimelineEntry
        title="First Place Award: Bergeron Entrepreneurs in Science and Technology (BEST)"
        timestamp="January 7, 2020"
        Icon={Camera}
      >
        <Notes>
          <p>
            I particiapted in the BEST Startup experience sponsored by Rogers,
            IBM, and KPM Power. My team developed and presented our
            comprehensive business plan that focused on promoting mental
            wellness and unlocking the full potential of students through an
            innovative and intuitive application. Our winning idea involves an
            app acting as a dashboard that integrates students’ school, work,
            and social needs. This experience provided an invaluable opportunity
            to enhance my skills and knowledge in the field of entrepreneurship
            and innovation.{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://yfile.news.yorku.ca/2019/12/18/york-hosts-200-students-for-inaugural-36-hour-experiential-learning-program/"
            >
              Read more about the competition
            </a>
            .{' '}
          </p>
        </Notes>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <Image
            src="https://d2fl8krjhnb3wd.cloudfront.net/static/photos/best-1.png"
            width="1072"
            height="1010"
            layout="responsive"
            className="rounded"
            alt="Photo from the competition, Toronto"
          />
          <Image
            src="https://d2fl8krjhnb3wd.cloudfront.net/static/photos/best-2.png"
            width="300"
            height="300"
            layout="responsive"
            className="rounded"
            alt="Photo from the competition, Toronto"
          />
          <Image
            src="https://d2fl8krjhnb3wd.cloudfront.net/static/photos/best-3.jpeg"
            width="1458"
            height="1944"
            layout="responsive"
            className="rounded"
            alt="Photo from the competition, Toronto"
          />
          <Image
            src="https://d2fl8krjhnb3wd.cloudfront.net/static/photos/best-4.jpg"
            width="3024"
            height="4032"
            layout="responsive"
            className="rounded"
            alt="Photo from the competition, Toronto"
          />
        </div>
      </TimelineEntry>
    </>
  )
}
