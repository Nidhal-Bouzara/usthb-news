/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Event from '@ioc:Adonis/Core/Event'
import NewsPiece from 'App/Models/NewsPiece'
import ScrapeRun from 'App/Models/ScrapeRun'
import { DateTime } from 'luxon'
import puppeteer from 'puppeteer'
import { NewsItem } from 'resources/js/Pages/Home/sections/Content/components/Card/Card'

Event.on('init:scrape', async () => {
  const scrapeRun = new ScrapeRun({ startDate: DateTime.now() })
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.usthb.dz/fr/actus2')
  let news: NewsItem[] = []
  let nextPageExists: boolean = true
  let currentPage: number = 1
  while (nextPageExists) {
    news = news.concat(
      await page.evaluate(() => {
        return [...document.querySelectorAll('div.details')].map((item) => {
          const indexOfImageUrl = (item as any).style.backgroundImage.indexOf('url') // item does include style but it won't accept it so this is a quick fix
          return {
            title: item.querySelector('h3')!.innerText,
            posted: item.querySelector('p')!.innerText.split(':')[1].trim(),
            img: (item as any).style.backgroundImage.slice(indexOfImageUrl + 5, -2), // this gets only the url string
            link: (item.querySelector('h3 > a') as HTMLAnchorElement).href,
          }
        })
      })
    )
    const nextPageLink = await page.evaluate(() => {
      const linksList = document.querySelector('ul.pagination')?.querySelectorAll('li')
      return linksList![linksList!.length - 1].querySelector('a')?.href
    })
    let nextPageLinkNumber: string[] | number = nextPageLink?.split('/')!
    nextPageLinkNumber = Number(nextPageLinkNumber[nextPageLinkNumber!.length - 1])
    if (nextPageLink !== undefined && nextPageLinkNumber > currentPage) {
      currentPage = nextPageLinkNumber
      await page.goto(nextPageLink)
    } else {
      nextPageExists = false
    }
  }
  scrapeRun.end_date = DateTime.now()
  scrapeRun.rows_added = news.length
  const runId: number = (await scrapeRun.save()).id
  news.forEach(async (item) => {
    const News = new NewsPiece({
      ...item,
      scrapeRunId: runId,
    })
    await News.save()
  })
})
