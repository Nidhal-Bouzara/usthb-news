import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

interface UserModel {
  email: string
  password: string
  firstName: string
  lastName: string
}
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({
    prepare: (value: string) => value.trim().toLowerCase(),
  })
  public email: string

  @column()
  public password: string

  @column({
    prepare: (value: string) => value.trim(),
  })
  public first_name: string

  @column({
    prepare: (value: string) => value.trim(),
  })
  public last_name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      const hashed = await Hash.make(user.password)
      user.password = hashed
    }
  }

  constructor(params?: Partial<UserModel>) {
    super()
    if (params) {
      const { email, firstName, lastName, password } = params
      if (email) {
        this.email = email
      }
      if (firstName) {
        this.first_name = firstName
      }
      if (lastName) {
        this.last_name = lastName
      }
      if (password) {
        this.password = password
      }
    }
  }
}
