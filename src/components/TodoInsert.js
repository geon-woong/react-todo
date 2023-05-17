import { useState,useCallback } from 'react';
import { MdAdd } from 'react-icons/md'
export const TodoInsert = ({onInsert}) => {
    
    const [value, setValue] = useState('');

    const onChange = useCallback((e)=>{
        const {value} = e.target;
        setValue(value);
    },[])

    const onSubmit = useCallback(e=>{
        e.preventDefault();
        onInsert(value);
        setValue('')
    },[onInsert,value]);
    return(
        <form 
            className="border grid grid-flow-col"
            onSubmit={onSubmit}
            >
            <input 
                type="text" 
                placeholder="할 일"
                value={value}
                onChange={onChange}
                 />
            <button type="submit" className="bg-blue-200 flex justify-center items-center">
                <MdAdd/>
            </button>
        </form>
    )
}