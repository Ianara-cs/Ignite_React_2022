import { Post } from "./Post"

function App() {
  return (
    <div>
      <Post 
        auth='Nara' 
        content= 'Hello!' 
      />
      <Post 
        auth='Jonas' 
        content= 'Vai dormir!' 
      />
      <Post />
    </div>
  )
}

export default App
