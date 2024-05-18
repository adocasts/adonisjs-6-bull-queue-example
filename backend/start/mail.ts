import mail from '@adonisjs/mail/services/main'
import queue from '@rlanz/bull-queue/services/main'
import MailJob from '../app/jobs/mail_job.js'
import { MailersList } from '@adonisjs/mail/types'

mail.setMessenger((mailer) => ({
  async queue(mailMessage, config) {
    console.log('Dispatching MailJob event')
    await queue.dispatch(
      MailJob,
      {
        mailerName: mailer.name as keyof MailersList,
        mailMessage,
        config,
      },
      {
        delay: 5000,
      }
    )
  },
}))
