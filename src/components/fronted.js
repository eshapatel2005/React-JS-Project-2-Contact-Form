import './fronted.css';


export default function Navs(props){
    return(
        <>
            <nav className="container">
                <div>
                    <img src={props.img1} style={{width:"50px"}}></img>
                </div>

                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>

            <div className="contact_section">
                <h1>CONTACT US</h1>
                <p>LET'S CONNECT: WE'RE HERE TO HELP,AND WE'D LOVE TO HERE FROM YOU! WHETHER YOU HAVE A QUESTION,COMMENT,OR JUST WANT TO CHAT ,YOU CAN REACH OUT TO US THROUGH THE CONTACT FOEM OF THIS PAGE,OR BY PHONE,EMAIL,OR SOCIAL MEDIA. </p>
            </div>

            <div className="container1">
                <div className="conatct_form">
                    
                    <button className="primary-btn">VIA SUPPORT CHAT</button>
                    <button className="primary-btn1">VIA CALL</button>
                 
                    <button className="primary-btn2">VIA EMAIL FORM</button>
                    <div>
                        <form className="form1">
                           <div className="form_control">
                             <label>NAME :</label>
                             <input type="text" name="NAME" />
                           </div>

                           <div className="form_control">
                             <label>EMAIL :</label>
                             <input type="email" name="EMAIL" />
                           </div>

                            <div className="form_control">
                             <label className="input">TEXT :</label>
                             <textarea className="textarea"  name="TEXT" />
                           </div>

                           <div>
                            <button className="button1">SUBMIT</button>
                           </div>
                        </form>
                    </div>
                </div>
                <div className="conatct_form1">

                    <img src={props.img2} className='img2'></img>
                </div>
            </div>
        </>
    )
}