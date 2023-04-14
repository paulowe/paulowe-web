import * as postmark from 'postmark'
import { HNPost } from '~/pages/hn'

export const client = new postmark.ServerClient(process.env.POSTMARK_CLIENT_ID)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface HNDigestProps {
  email: string
  date: string
  posts: HNPost[]
  unsubscribe_url: string
}

interface EmailMeProps {
  subject: string
  body: string
}

export function emailMe({ subject, body }: EmailMeProps) {
  return client.sendEmail({
    From: 'paul.owe@live.com',
    To: 'paul.owe@live.com',
    Subject: subject,
    TextBody: body,
  })
}
