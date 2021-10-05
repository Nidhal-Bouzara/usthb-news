import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ScrapeRuns extends BaseSchema {
  protected tableName = 'scrape_runs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('rows_added').notNullable()
      table.dateTime('start_date').notNullable()
      table.dateTime('end_date').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
