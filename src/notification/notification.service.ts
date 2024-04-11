import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logs } from '../db/entities/logs.entity';
import { Users } from 'src/db/entities/users.entity';
import { Category } from 'src/db/entities/category.entity';
import { Channel } from 'src/db/entities/channel.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Logs)
    private readonly logsRepository: Repository<Logs>,
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Channel)
    private readonly channelRepository: Repository<Channel>
  ) {}

  getHello(): string {
    return 'Hello World from notification!';
  }

  async getAllCategories(): Promise<Category[]> {
    try {
      return await this.categoryRepository.find();
    } catch (error) {
      // MANAGE ERRORS
      throw new Error('No se pudieron obtener los canales');
    }
  }

  async getAllChannels(): Promise<Channel[]> {
    try {
      const channels = await this.channelRepository.find();
      return channels;
    } catch (error) {
      // MANAGE ERRORS
      throw new Error('No se pudieron obtener los canales');
    }
  }

  // async buscarPorCategoria(formData: any): Promise<User> {
  //   const { category, message } = formData
  //   console.log("DATA: ", formData)
  //   // const entityManager = getManager();
  //   // const query = `SELECT * FROM users WHERE ${category} = ANY(categories)`;

  //   // return await entityManager.query(query, [category]);
  //   const response = await this.userRepository.find();
  //   console.log(response)
  //   return response
  // }

  async sendNotification(formData: any): Promise<any> {
    try {
    console.log("DATA: ", formData)
    const { category, message } = formData
    // Obtener los usuarios que coinciden con la categoría
    const users = await this.userRepository.createQueryBuilder('user')
    .where('user.categories @> ARRAY[:category]', { category: [category] })
    .getMany();

    console.log("users: ", users)
    
    // Guardar cada usuario en la tabla de logs junto con el mensaje
    for (const user of users) {
      const log = new Logs();
      // log.userId = user.id;
      log.user_name = user.user_name,
      log.email = user.email,
      log.phone_number = user.phone_number,
      log.category = category;
      log.message = message;
      await this.logsRepository.save(log);
    }
    } catch (error) {
      console.error("Error al enviar la notificación:", error);
      // Puedes lanzar una excepción aquí si deseas propagarla hacia arriba
    }
  }
}
