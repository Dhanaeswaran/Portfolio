import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../cssfile/Project.css'; 
import { lefttoright,projectshow } from '../transation/textvarient';
import { motion } from 'framer-motion';
import { projectlist } from '../resours/content';
const Project = () => {
    return ( 
    <div className="project">
        <div className="projectdone" id='project'>
            <motion.div
                initial='hidden'
                whileInView='show'
                variants={lefttoright()}  
                viewport = {{ once: true,}}
                >
                <h1 className="projecttitle secoundarycolor">PROJECT</h1>
            </motion.div>
        </div>
        <motion.div
        initial='hidden'
        whileInView='show'
        variants={projectshow()}  
        viewport = {{ once: true,}}
        >
            <div className="projectcontainer">
                {projectlist.map((project) => (
                    <div className="projectcard secoundarybackground">
                        <div className="procardimg">
                            <img src={project.image} alt='hai'/>
                        </div>
                        <p>{project.content}</p>
                        <h4>{project.title}</h4>
                    </div>
                ))};
            </div>
            </motion.div>
        {/* <VerticalTimeline>
          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#5275f490', color: '#fff',textAlign:"start" }}
                contentArrowStyle={{ borderRight: '10px solid #5275f490' }}
                date="2024-02-06"
                iconStyle={{ background: '#5275f4', color: '#fff' }}
                icon={<i className="fa fa-code" />}
            >
                <h3 className="vertical-timeline-element-title">Event 1</h3>
                <p>Some description for Event 1.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#5275f490', color: '#fff',textAlign:"start" }}
                contentArrowStyle={{ borderRight: '10px solid  #5275f490' }}
                date="2024-02-07"
                iconStyle={{ background: '#5275f4', color: '#fff' }}
                icon={<i className="fa fa-code" />}
            >
                <h3 className="vertical-timeline-element-title">Event 2</h3>
                <p>Some description for Event 2.</p>
            </VerticalTimelineElement>
        </VerticalTimeline> */}
    </div>
     );
}
 
export default Project;
