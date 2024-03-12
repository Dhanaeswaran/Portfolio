import '../cssfile/about.css';
import {motion} from 'framer-motion';
import Aboutmepara from '../resours/aboutmepara';
import { toptodown } from '../transation/textvarient';
import smallcard from '../card/smallcard';
import {thinkIknow} from '../resours/thinksiknow';
const About = () => {
    return ( 
        <div className="About">
            <div className="aboutname" id='about'>
                <motion.div 
                    initial='hidden'
                    whileInView='show'
                    whileHover='sum'
                    variants={toptodown()}
                    viewport = {{ once: true,}}
                >
                    <h1 className="secoundarycolor">About Me</h1>
                </motion.div>
            </div>
            <div className="aboutmepara">
                {Aboutmepara()}
            </div>
            <div className="thingsIknow">
            <h1 className='secoundarycolor'>Things I Know</h1>
            <div className="thinkscontainer">
                {thinkIknow.map((text) => (
                    <>
                        <h5>{text.title} : </h5>
                        <div className="about-view flex" >
                            {(text.points).map((point) => (
                                // <label htmlFor="">point</label>
                                smallcard(point)
                                ))}
                        </div>
                    </>
                ))}
            </div>
            </div>
        </div>
     );
}
 
export default About;