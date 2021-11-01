import {BrowserRouter,Redirect,Switch,Route} from "react-router-dom";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Gallery from "./Routes/Gallery";
import Main from "./Routes/Main";



export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/about-us" component={About}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/contact-us" component={Contact}/>

                <Redirect from="*" to="/"/>

            </Switch>
        </BrowserRouter>
    )
}