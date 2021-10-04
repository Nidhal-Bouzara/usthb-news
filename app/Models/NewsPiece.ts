import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class NewsPiece extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public posted: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  constructor(params?: { name: string; posted: Date | string }) {
    super()
    if (params) {
      const { name, posted } = params
      this.name = name
      this.posted = typeof posted === 'string' ? posted : posted.toDateString()
    }
  }
}
