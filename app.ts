import TodoEvent from "./js/TodoEvent";
import { ItodoData } from "./js/typing";

; ((doc) => {
    const oInput: HTMLInputElement = document.querySelector('input');
    const oAddBtn: HTMLButtonElement = document.querySelector('button');
    const oToDoList: HTMLElement = document.querySelector('.todo-list');

    const todoData: ItodoData[] = [
        {
            id: 1,
            content: '2323',
            complete: true
        },
        {
            id: 2,
            content: '4355',
            complete: false
        },
        {
            id: 3,
            content: '6799',
            complete: true
        }
    ];
    const todoEvent = new TodoEvent(todoData, oToDoList);
    const init = (): void => {
        bindEvent()
    }

    init()
    function bindEvent(): void {
        oAddBtn.addEventListener('click', handleAddBtnClick, false)
        oToDoList.addEventListener('click', handleListClick, false)
    }

    function handleAddBtnClick(e: MouseEvent): void {
        const val: string = oInput.value.trim()
        if (val.length) {
            const ret = todoEvent.addTodo(<ItodoData>{
                id: 567,
                content: val,
                complete: false
            })
            if (ret && ret === 10001) {
                alert('l列表已经存在')
                return
            }
            oInput.value = ''
        }
    }


    function handleListClick(e: MouseEvent): void {
        const tar = e.target as HTMLElement;
        const tagName = tar.tagName.toLowerCase();
        if (tagName === 'input' || tagName === 'button') {
            const id = parseInt(tar.dataset.id)
            switch (tagName) {
                case 'input':
                    todoEvent.toggleComplete(tar, id)
                    break;
                case 'button':
                    todoEvent.removeTodo(tar, id)
                    break;
                default:
                    break;
            }
        }


    }



})(document)