import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ResponseProps } from '@ioc:EidelLev/Inertia'
import ScrapeRun from 'App/Models/ScrapeRun'
import { HomePageProps } from 'resources/js/Pages/Home/Home'
import { NewsItem } from 'resources/js/Pages/Home/sections/Content/components/Card/Card'

export default class NewsPiecesController {
  public async index({ inertia }: HttpContextContract) {
    const lastRun = (await ScrapeRun.query().orderBy('id').limit(1).preload('scrapeResults'))[0]
    let news: NewsItem[] = lastRun.scrapeResults

    news = news.map((item) => ({
      id: item.id,
      title: item.title,
      posted: item.posted,
      link: item.link,
      img: item.img,
    }))
    news = news.sort((a, b) => {
      const linkA: string[] = a.link.split('/')
      const linkANumber = Number(linkA[linkA.length - 1])
      const linkB: string[] = b.link.split('/')
      const linkBNumber = Number(linkB[linkB.length - 1])
      return linkBNumber - linkANumber
    })
    const props: HomePageProps = {
      news,
    }
    return inertia.render('Home/Home', props as unknown as ResponseProps)
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
