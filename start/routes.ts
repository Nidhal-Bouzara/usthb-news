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

Route.get('/news/create', 'NewsPiecesController.create')
