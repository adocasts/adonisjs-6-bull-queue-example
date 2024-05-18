import { Job } from '@rlanz/bull-queue'
import mail from '@adonisjs/mail/services/main'
import User from '#models/user'

interface WelcomeEmailJobPayload {
  user: User
}

export default class WelcomeEmailJob extends Job {
  // This is the path to the file that is used to create the job
  static get $$filepath() {
    return import.meta.url
  }

  /**
   * Base Entry point
   */
  async handle({ user }: WelcomeEmailJobPayload) {
    await mail.send((message) => {
      message
        .to(user.email)
        .from('test@adocasts.com')
        .subject('Welcome to our app')
        .html(`<h1>Hello ${user.email}! This was sent via WelcomeEmailJob.</h1>`)
    })
  }

  /**
   * This is an optional method that gets called when the retries has exceeded and is marked failed.
   */
  async rescue(payload: WelcomeEmailJobPayload) {}
}
