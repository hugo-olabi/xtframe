import { button, div, indexOfChild, input, li, live, ol, onget } from "../development/index";

function updatedList() {
    const elem = ol({ style: " list-style-position: inherit;" })

    elem.onclick = (e) => {
        if (e.target instanceof HTMLLIElement) {
            let todo = JSON.parse(localStorage.getItem("todo") || '{"items":[]}')
            const i = indexOfChild(e.target);
            console.log(i + 1, todo.items.length)
            todo.items = [...todo.items.slice(0, i), ...todo.items.slice(i + 1)];
            console.log(i + 1, todo.items.length)
            localStorage.setItem("todo", JSON.stringify(todo));
        }
    }

    return live(elem, () => {
        var todo: { items: string[] } = JSON.parse(localStorage.getItem("todo") || '{"items":[]}');
        //console.log(todo.items[todo.items.length - 1])

        return todo.items.map((item, index) => {
            return li(
                item
            )
        });
    })
}

function addTodo() {
    const i = input({ type: "text", placeholder: "Add todo" })
    i.onkeydown = (e) => {
        if (e.key === "Enter") {
            var todo: { items: string[] } = JSON.parse(localStorage.getItem("todo") || '{"items":[]}')
            todo.items.push(i.value)
            localStorage.setItem("todo", JSON.stringify(todo))
            i.value = ""
        }
    }

    const removeFirst = button(
        "Remover First"
    )

    const add26 = button(
        "Add 26"
    )

    add26.onclick = () => {
        var todo: { items: string[] } = JSON.parse(localStorage.getItem("todo") || '{"items":[]}')
        todo.items = [...todo.items, ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))]
        localStorage.setItem("todo", JSON.stringify(todo))
    }

    removeFirst.onclick = () => {
        var todo: { items: string[] } = JSON.parse(localStorage.getItem("todo") || '{"items":[]}')
        todo.items = todo.items.slice(1)
        localStorage.setItem("todo", JSON.stringify(todo))
    }

    return div(i, removeFirst, add26);
}

onget(import.meta,
    addTodo(),
    updatedList()
)