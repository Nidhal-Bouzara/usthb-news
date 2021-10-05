import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddNewspieceScraperunsKeys extends BaseSchema {
  protected tableName = 'news_pieces'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('scrape_run_id')
        .notNullable()
        .unsigned()
        .references('scrape_runs.id')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('scrape_run_id')
    })
  }
}
