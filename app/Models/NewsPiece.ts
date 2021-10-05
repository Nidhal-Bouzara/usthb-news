import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

interface NewsPieceModel {
  title: string
  posted: string
  img: string
  link: string
  scrapeRunId: number
}

export default class NewsPiece extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public posted: string

  @column()
  public img: string

  @column()
  public link: string

  @column()
  public scrape_run_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  constructor(params?: Partial<NewsPieceModel>) {
    super()
    if (params) {
      const { title, link, img, posted, scrapeRunId } = params
      if (title) {
        this.title = title
      }
      if (link) {
        this.link = link
      }
      if (img) {
        this.img = img
      }
      if (posted) {
        this.posted = posted
      }

      if (scrapeRunId) {
        this.scrape_run_id = scrapeRunId
      }
    }
  }
}
