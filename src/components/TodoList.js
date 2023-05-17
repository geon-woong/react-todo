import TodoListItem from "./TodoListItem"

export const TodoList = ({todos,onRemove,onToggle}) => {

    return(
        <div className="py-3">
            {
                todos.map((todo) => (
                    <TodoListItem 
                        todo={todo} 
                        key={todo.id} 
                        onRemove={onRemove}
                        onToggle={onToggle}
                         />
                    ))
                }
        </div>
    )
}