import Todo from "../todo/Todo"


function Home() {
  return (
    <>
    <h1 className="text-5xl font-bold text-blue-950 flex justify-center items-center m-10"> To Do List</h1>  
     <div className="absolute  left-[40%] top-[20%] ">
      <Todo/>
    </div>
    </>

  )
}

export default Home