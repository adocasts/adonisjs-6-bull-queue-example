import { Job } from '@rlanz/bull-queue'
import mail from '@adonisjs/mail/services/main'
import { MailersList, MessageBodyTemplates, NodeMailerMessage } from '@adonisjs/mail/types'

interface MailJobPayload {
  mailerName: keyof MailersList
  mailMessage: {
    message: NodeMailerMessage
    views: MessageBodyTemplates
  }
  config: unknown
}

export default class MailJob extends Job {
  // This is the path to the file that is used to create the job
  static get $$filepath() {
    return import.meta.url
  }

  /**
   * Base Entry point
   */
  async handle({ mailerName, mailMessage, config }: MailJobPayload) {
    // use @adonisjs/mail with the provided mailer name to send the complied message
    await mail.use(mailerName).sendCompiled(mailMessage, config)
  }

  /**
   * This is an optional method that gets called when the retries has exceeded and is marked failed.
   */
  async rescue(payload: MailJobPayload) {}
}
