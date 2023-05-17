import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md'

const TodoListItem = ({todo,onRemove,onToggle}) => {

    const { id,text,checked } = todo;


    return (
        <div className="flex items-center justify-between border-gray-500 py-5 px-1 hover:bg-gray-100 ">
            <div className={`
                flex
                items-center
                gap-2
                flex-1 
                `}>
            <div onClick={() => onToggle(id)}>
                {
                    checked ?
                    <MdCheckBoxOutlineBlank/> : 
                    <MdCheckBox/>
                }
            </div>
            <div className={
                `
                ${checked && "text-gray-400 line-through"}
                
                `
            }>
                {text}
            </div>
            </div>
            <MdRemoveCircleOutline onClick={()=> onRemove(id)} />
        </div>
    )
}

export default React.memo(TodoListItem);