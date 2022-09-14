import TodoDom from "./TodoDom";
import { getTodoList } from "./TodoService";
import { ItodoData } from "./typing";

class TodoEvent extends TodoDom {

    private todoData: ItodoData[];
    constructor(todoData: ItodoData[], todoWrapper: HTMLElement) {
        super(todoWrapper)
        this.todoData = todoData
        this.init(this.todoData)
    }
   @getTodoList
    private init(todoData:ItodoData[]) {
        this.todoData = todoData
        this.initList(this.todoData)
    }

    public addTodo(todo: ItodoData): undefined | number {
        // 数据去重
        const _todo: null | ItodoData = this.todoData.find((item: ItodoData) => item.content === todo.content)
        if (!_todo) {
            this.todoData.push(todo)
            this.addItem(todo)
            return
        }
        return 1001
    }
    public removeTodo(target: HTMLElement, id: number): void {
        this.todoData = this.todoData.filter((todo: ItodoData) => todo.id !== id)
        this.removeItem(target)
    }
    public toggleComplete(target: HTMLElement, id: number): void {
        this.todoData = this.todoData.map((todo: ItodoData) => {
            if (todo.id === id) {
                todo.complete = !todo.complete
                this.changeCompleted(target, todo.complete)
                return todo
            }
            return todo;
        })

    }

}
export default TodoEvent;