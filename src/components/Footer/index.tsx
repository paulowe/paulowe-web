import React from 'react'
import Link from 'next/link'
import { CenteredColumn } from '../Layouts'

export function Footer() {
  return (
    <CenteredColumn>
      <div className="h-px bg-gray-200 dark:bg-gray-800 timeline-stroke" />
      <div className="grid grid-cols-1 gap-4 p-6 py-24 bg-gray-100 sm:grid-cols-3 dark:bg-gray-900 sm:bg-gray-50 sm:dark:bg-gray-1000">
        <div className="flex flex-col space-y-4">
          <Link href="/" as="/" passHref>
            <a className="black-link">Home</a>
          </Link>

          <Link href="/about" as="/about" passHref>
            <a className="black-link">About</a>
          </Link>

          <a
            href="https://github.com/paulowe"
            target="_blank"
            rel="noopener noreferrer"
            className="black-link"
          >
            GitHub
          </a>
          <a
            href="https://www.kaggle.com/paulowe/code"
            target="_blank"
            rel="noopener noreferrer"
            className="black-link"
          >
            Kaggle
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/paulsmessage" as="/paulsmessage" passHref>
            <a className="black-link">AI Blog</a>
          </Link>

          <a
            href="https://d2fl8krjhnb3wd.cloudfront.net/static/docs/cv-pcowe.pdf"
            rel="noopener noreferrer"
            className="black-link"
          >
            Deep Learning Apps
          </a>

          <Link href="/security" as="/security" passHref>
            <a className="black-link">Security Checklist</a>
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/bookmarks" as="/bookmarks" passHref>
            <a className="black-link">Bookmarks</a>
          </Link>

          <Link href="/hn" as="/hn" passHref>
            <a className="black-link">Hacker News</a>
          </Link>

          <Link href="/stack" as="/stack" passHref>
            <a className="black-link">My Stack</a>
          </Link>
        </div>
      </div>
    </CenteredColumn>
  )
}
