import app from '@adonisjs/core/services/app'
import ace from '@adonisjs/core/services/ace'

if (app.getEnvironment() === 'web') {
  await ace.boot()

  const command = await ace.exec('queue:listen', [])

  app.terminating(async () => {
    await command.terminate()
  })
}
