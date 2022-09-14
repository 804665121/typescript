import { ItodoData } from "./typing";

class TodoTemplate {

    protected todoView(todo: ItodoData): string {
        const { id, content, complete } = todo
        return `
            <input type="checkbox" ${complete ? 'checked' : ''} data-id="${id}" />
            <span style="text-decoration:${complete ? 'line-through' : 'none'}">${content}</span>
            <button data-id="${id}">删除</button>
        `
    }

}
export default TodoTemplate;