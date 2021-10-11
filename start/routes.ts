/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Event from '@ioc:Adonis/Core/Event'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

/*
| Initiating the scraper task scheduler
*/
import schedule from 'node-schedule'
schedule.scheduleJob('32 17 * * *', () => {
  Event.emit('init:scrape', null)
})

Route.get('/', 'NewsPiecesController.index')

// Forcefully fire the scraping event when needed
Route.get('/news/force-scrape', ({ response }) => {
  Event.emit('init:scrape', null)
  response.redirect().toRoute('/')
})

Route.post('/login', async ({ request, response }) => {
  const loginPostSchema = schema.create({
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({ trim: true }, [rules.required(), rules.minLength(10)]),
    first_name: schema.string.optional({ trim: true }),
    last_name: schema.string.optional({ trim: true }, [rules.requiredIfExists('first_name')]),
  })

  const payload = await request.validate({ schema: loginPostSchema })

  console.log(payload)
  response.redirect('/')
})
