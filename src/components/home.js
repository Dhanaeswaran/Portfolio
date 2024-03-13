import '../cssfile/home.css';
import { socialicon , homecon} from '../resours/content';
import resume from '../resours/resume.pdf';
const Home = () => {
    return ( 
        <section className="Home">
            <div className="cover flex flexrow">
                <div className="design flexcolumn flex">
                    <div className='circle secoundarybackground'/>
                    <div className='line'/>
                </div>
                <div className='textdesign alignstart paddingleft15 flex flexcolumn'>
                    <div className="namefield">
                        <h1 className = 'resize zoomcontent' style={{color:'#ffffff',}}>Hi, I'm  <span className='nametag secoundarycolor'>Dhanaeswaran</span></h1>
                    </div>
                    <div className="fixingcontent zoomcontent">
                        <span className='fadein homedoing'>
                            {homecon.map((content) => (
                                <><label>{content}</label><br/></>
                            ))}
                        </span>
                    </div>
                    <div className="flex flexrow carryhomebtn">
                        <div className="homenamebtn">
                            <button className='secoundarybackground homebtnbn'>HIRE ME</button>
                        </div>
                        <div className="homenamebtn">
                            <a href={resume} download={"Dhanaeswaran R"}><button className='secoundarybackground homebtnbn' >GET RESUME</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="socialmediaicon">
                {socialicon.map((icon) => (
                    <a className='mediaicon ' href={icon.url} rel="noreferrer" target='_blank'>{icon.link}</a>
                ))}
            </div>
        </section>
     );
}
 
export default Home;
