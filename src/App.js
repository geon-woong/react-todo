import { useState,useRef,useCallback } from "react";
import { TodoInsert } from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { TodoTemplate } from "./components/TodoTemplate";


function createBulkTodos(){
  const array =[];
  for (let index = 0; index < 2000; index++) {
    array.push({
      id:index,
      text: `할일 ${index}`,
      checked: false,
    })
  }
  
  return array;
}

function App() {
  const [todos,setTodos] = useState(createBulkTodos);

/**
 * 고윳값으로 사용될 아이디
 */
  const nextId = useRef(2001);

  /**
   * 할일 추가 이벤트 핸들러
   */
  const onInsert = useCallback(text =>{
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    setTodos(todos => todos.concat(todo));
    nextId.current++;
  },[])

  /**
   * 할일 삭제 이벤트 핸들러
   */
  const onRemove = useCallback(id =>{
    setTodos(todos=>      
      /**
      * 인자로 받은 아이디 값과 다른 요소들만 포함된
      * 새로운 배열을 만들어 저장
      */
     todos.filter(todo =>todo.id !== id)
)
  },[])

  /**
   * 할일 완료/미완료 이벤트 핸들러
   */
  const onToggle = useCallback(id=>{
    setTodos(todos=>
      todos.map(todo=>
        todo.id === id ? {...todo,checked: !todo.checked} : todo,
        )
    )
  },[])

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList 
          todos={todos} 
          onRemove={onRemove} 
          onToggle={onToggle}
         />
      </TodoTemplate>
  );
}

export default App;
