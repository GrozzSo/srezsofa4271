import { Catalogg } from "../components/catalog";
import DarkVariantExample from "../components/slider";
import { Headerzz } from "../components/header";




export function HomePage(){
    return(
        <section className="main">
            <Headerzz/>
            <DarkVariantExample/>
            <Catalogg/>
            
        </section>
    )
}