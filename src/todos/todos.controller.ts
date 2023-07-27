import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodoService } from './todos.service';
import { Body, Controller ,Post } from '@nestjs/common';
@Controller('todos')
export class TodoController {
  constructor(private readonly service: TodoService) {}
    @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.service.create(dto);
  }
}
