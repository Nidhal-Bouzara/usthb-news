import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import NewsPiece from './NewsPiece'

interface ScrapeRunModel {
  columnsAdded: number
  startDate: DateTime
  endDate: DateTime
}

export default class ScrapeRun extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public start_date: DateTime

  @column.dateTime()
  public end_date: DateTime

  @column()
  public rows_added: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // relationships
  @hasMany(() => NewsPiece, {
    localKey: 'id',
    foreignKey: 'scrape_run_id',
  })
  public scrapeResults: HasMany<typeof NewsPiece>

  constructor(params?: Partial<ScrapeRunModel>) {
    super()
    if (params) {
      const { columnsAdded, startDate, endDate } = params
      if (columnsAdded) {
        this.rows_added = columnsAdded
      }
      if (startDate) {
        this.start_date = startDate
      }
      if (endDate) {
        this.end_date = endDate
      }
    }
  }
}
