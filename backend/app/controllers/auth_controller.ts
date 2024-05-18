import User from '#models/user'
import { loginValidator, registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import queue from '@rlanz/bull-queue/services/main'
import mail from '@adonisjs/mail/services/main'
import WelcomeEmailJob from '../jobs/welcome_email_job.js'

export default class AuthController {
  async register({ request }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    const user = await User.create(data)

    // sends email via WelcomeEmailJob
    // await queue.dispatch(WelcomeEmailJob, { user })

    // sends email via Bull Queue rigged up as our sendLater queue handler
    // check out start/mail.ts where this is implemented
    await mail.sendLater((message) => {
      message
        .to(user.email)
        .from('test@adocasts.com')
        .subject('Welcome to our app')
        .html(`<h1>Hello ${user.email}! This was sent via sendLater.</h1>`)
    })

    return User.accessTokens.create(user)
  }

  async login({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)

    return User.accessTokens.create(user)
  }

  async logout({ auth }: HttpContext) {
    const user = auth.user!
    await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    return { message: 'success' }
  }

  async me({ auth }: HttpContext) {
    await auth.check()
    return {
      user: auth.user,
    }
  }
}
