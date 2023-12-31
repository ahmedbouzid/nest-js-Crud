import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodoService } from './todos.service';
import { Body, Controller ,Post ,Get ,Put ,Param ,Delete } from '@nestjs/common';
@Controller('todos')
export class TodoController {
  constructor(private readonly service: TodoService) {}
    @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.service.create(dto);
  }
  @Get()
  async getAllTodo() {
    return await this.service.getAllTodos();

  }
  @Put(':id')
  update(@Param('id') id:number ,@Body() dto: CreateTodoDto) {
    return this.service.updateTodo(id,dto);
  }
  @Delete(':id')
  delete(@Param('id') id:number) {
    return this.service.deleteTodo(id)
  }
  @Get(':id')
  getById(@Param('id') id:number) {
    return this.service.getById(id)
  }
}
