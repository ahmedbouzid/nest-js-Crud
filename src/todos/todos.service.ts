import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dtos/create-todo.dto';
@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepositry: Repository<Todo>,
  ) {}
  async create(dto: CreateTodoDto) {
    const todo = this.todoRepositry.create(dto);
    return await this.todoRepositry.save(todo);
  }

  async getAllTodos() {
    return this.todoRepositry.find();
  }

  async updateTodo(id: number, dto: CreateTodoDto) {
    const todo = await this.todoRepositry.findOne({ where: { id } });
    // check that exist
    Object.assign(todo, dto);
    return await this.todoRepositry.save(todo);
  }
  async deleteTodo(id: number) {
    const todo = await this.todoRepositry.findOne({where : {id}})
    return await this.todoRepositry.remove(todo);
  }
}
