import { Footer } from "./components/footer";
import  Header  from "./components/header";
import { About, Contact } from "./components/info";

export function App(){
  return(
    <div  style={{ padding: "20px",fontFamily:"Arial"}}>
      <h1>Import and Export Components Example</h1>

     <Header/>
     <About/>
     <Contact/>
     <Footer/>
    </div>
  );
}