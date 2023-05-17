import React from "react";
import TodoListItem from "./TodoListItem"

const TodoList = ({todos,onRemove,onToggle}) => {

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

export default React.memo(TodoList);