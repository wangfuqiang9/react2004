import { Component } from 'react'
import B,{number,number2} from "./a"
// import Img from "./logo.svg"    //静态引入
// import From from "./From"
// import Todos from "./Todos"
// import Borther from "./Borther"
// import TodoList from "./TodoList"
import Proxy from "./Proxy"
 class App extends Component {
  render() {
    return (
      <div>
        {/*
            app----{number}  ----{number2}----{B.number3}
            <p ref="abc">wwww</p>
            <From/>
            <Todos/>
            <Borther/>
           <TodoList/>
        */}
      
    
        <Proxy/>
      </div>
    )
  }
}

export default App;