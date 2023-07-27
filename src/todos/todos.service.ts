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
    return this.todoRepositry.find() ;
  }
}
