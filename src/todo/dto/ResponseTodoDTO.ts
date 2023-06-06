import { Expose } from 'class-transformer';

export class ResponseTodoDTO {
  @Expose()
  title: number;

  @Expose()
  isDone: string;
}
