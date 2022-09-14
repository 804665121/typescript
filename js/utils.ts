export function findParentNode(target: HTMLElement, className: string): HTMLElement {
    while (target = target.parentNode as HTMLElement) {
        if (target.className === className) {
            return target
        }
    }
}

export function createhtml(docName: string, className: string, html: string) {
    const oItem: HTMLElement = document.createElement(docName)
    oItem.className = className
    oItem.innerHTML = html
    return oItem
}