import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersTables extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email').unique()
      table.string('password')
      table.string('first_name')
      table.string('last_name')
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
