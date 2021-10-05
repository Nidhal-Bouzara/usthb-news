import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterNewsPieces extends BaseSchema {
  protected tableName = 'news_pieces'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      // dropped columns
      table.dropColumn('name')
      // new columns
      table.string('img').nullable()
      table.string('link')
      table.string('title')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumns('img link title')
      table.string('name')
    })
  }
}
