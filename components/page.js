import Hero from "./hero/page";
import Second from "./second/page";
import News from "./news/page";
import Five from "./five/page";
import Six from "./six/page";
import Footer from "./footer/page";
export default function Main()
{
    return(
       <div>
         <Hero></Hero>
         <Second></Second>
         <News></News>
         <Five></Five>
         <Six></Six>
         <Footer></Footer>
       </div>
    )
}