import TodoTemplate from "./TodoTemplate";
import { ItodoData } from "./typing";
import { createhtml, findParentNode } from "./utils";

class TodoDom  extends TodoTemplate{
    private  todoWrapper:HTMLElement
    constructor(todoWrapper:HTMLElement){
        super()
        this.todoWrapper = todoWrapper
    }

    protected initList (todoData:ItodoData[]){
        if(todoData.length){
            const oFrag:DocumentFragment = document.createDocumentFragment()
            todoData.map((todo:ItodoData)=>{
                const oItem:HTMLElement = createhtml('div','todo-item',this.todoView(todo))
                oFrag.appendChild(oItem)
            })
            this.todoWrapper.appendChild(oFrag)

        }
    }

    protected addItem (todo:ItodoData){
        const oItem:HTMLElement = createhtml('div','todo-item',this.todoView(todo))
        this.todoWrapper.appendChild(oItem)

    }

    protected removeItem(target:HTMLElement){
        const oPraentNode:HTMLElement = findParentNode(target, 'todo-item')
        oPraentNode.remove()
    }

    protected changeCompleted(target:HTMLElement,complete:boolean){
        const oPraentNode:HTMLElement = findParentNode(target,'todo-item')
        const oContent:HTMLElement = oPraentNode.getElementsByTagName('span')[0]
        oContent.style.textDecoration = complete ? 'line-through': 'none'

    }

}


export default TodoDom;
