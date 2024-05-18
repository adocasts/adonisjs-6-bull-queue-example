import mail from '@adonisjs/mail/services/main'
import queue from '@rlanz/bull-queue/services/main'
import MailJob from '../app/jobs/mail_job.js'
import { MailersList } from '@adonisjs/mail/types'

// add queue handler for sending emails via `sendLater`
mail.setMessenger((mailer) => ({
  async queue(mailMessage, config) {
    // dispatch MailJob to queue with provided mailer name as well as the mail's message and config
    await queue.dispatch(MailJob, {
      mailerName: mailer.name as keyof MailersList,
      mailMessage,
      config,
    })
  },
}))
