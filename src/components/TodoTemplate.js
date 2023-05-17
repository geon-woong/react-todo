export const TodoTemplate = ({children}) => {

    return(
        <div className="w-64 mx-auto mt-10 bg-white overflow-hidden rounded-md ">
            <div className="text-center font-bold  bg-blue-200  p-5">
                일정관리
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}