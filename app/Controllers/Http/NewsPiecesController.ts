import { Inertia } from '@inertiajs/inertia'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import NewsPieceFactory from 'Database/factories/NewsPieceFactory'

export default class NewsPiecesController {
  public async index({}: HttpContextContract) {}

  public async create({ inertia }: HttpContextContract) {
    await NewsPieceFactory.createMany(10)
    return inertia.redirectBack()
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
