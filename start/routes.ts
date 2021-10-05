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
import NewsPiece from 'App/Models/NewsPiece'

// types
import { ResponseProps } from '@ioc:EidelLev/Inertia'
import { NewsItem } from 'resources/js/Pages/Home/sections/Content/components/Card/Card'
import { HomePageProps } from 'resources/js/Pages/Home/Home'
import { NewsProps } from 'resources/js/Pages/News'

Route.get('/', async ({ inertia }) => {
  let news: NewsPiece[] | NewsItem[] = await NewsPiece.all()
  news = news.map((item) => ({
    id: item.id,
    title: item.name,
    posted: item.posted,
  }))
  const props: HomePageProps = {
    news,
  }
  return inertia.render('Home/Home', props as unknown as ResponseProps)
})

Route.get('/news', async ({ inertia }) => {
  const newsC = await new NewsPiece({ name: 'this is a new test', posted: new Date() })
  const news = await NewsPiece.all()
  const bongo = await newsC.save()
  console.log(bongo.name, bongo.posted)

  const props: NewsProps = {
    news: news.map((NewsItem) => ({ title: NewsItem.name, posted: new Date(NewsItem.posted) })),
  }
  return inertia.render('News', props as unknown as ResponseProps)
})

Route.get('/news/create', 'NewsPiecesController.create')
