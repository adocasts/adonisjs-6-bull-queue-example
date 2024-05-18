![Adocasts](https://github.com/adocasts/.github/blob/main/assets/brand-banner-rounded.png?raw=true)
# How To Easily Add and Implement a Queue in AdonisJS 6

In this lesson, we'll learn how to implement a queue using [@rlanz/bull-queue](https://github.com/RomainLanz/adonis-bull-queue) package for AdonisJS 6.
We'll create a job to send welcome emails to new users, replace AdonisJS' in-memory mail queue with @rlanz/bull-queue, and hook into the AdonisJS licecycle
to start and stop the queue listener with our web server.



(Coming Soon)
<!-- [Ready to learn? Click here to view the lesson](https://adocasts.com/lessons/how-to-easily-add-and-implement-a-queue-in-adonisjs-6) -->



You'll learn:
- How to install @rlanz/bull-queue for AdonisJS 6
- How to create a job
- How to dispatch a job into the queue
- How to replace AdonisJS' in-memory mail queue with @rlanz/bull-queue for use with mail.sendLater
- How to hook into AdonisJS 6 lifecycle events and programmatic command execution to start and stop the queue listener with your web server



Curious where to look?
- Jobs: `/backend/app/jobs/*.ts`
- Dispatch: `/backend/app/controllers/auth_controller.ts -> register()`
- SendLater Queue: `/backend/start/mail.ts`
- Start/Stop With Server: `/backend/start/queue.ts`



[![YouTube Badge](https://img.shields.io/youtube/channel/subscribers/UCTEKX3KQAJi7_0-_rSz0Edg?logo=YouTube&style=for-the-badge)](https://youtube.com/adocasts)
[![Twitter Badge](https://img.shields.io/twitter/follow/adocasts?logo=twitter&logoColor=white&style=for-the-badge)](https://twitter.com/adocasts)
[![Twitch Badge](https://img.shields.io/twitch/status/adocasts?logo=twitch&logoColor=white&style=for-the-badge)](https://twitch.tv/adocasts)
