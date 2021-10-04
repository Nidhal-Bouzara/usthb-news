import Factory from '@ioc:Adonis/Lucid/Factory'
import NewsPiece from 'App/Models/NewsPiece'

const NewsPieceFactory = Factory.define(NewsPiece, ({ faker }) => {
  return {
    name: faker.lorem.text(),
    posted: faker.date.recent().toDateString(),
  }
}).build()

export default NewsPieceFactory
