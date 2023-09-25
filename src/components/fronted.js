import './fronted.css';


export default function Navs(props){
    return(
        <>
             <nav>
                <div>
                    <img src={props.img1} style={{width:"50px"}}></img>
                </div>
             </nav>
        </>
    )
}