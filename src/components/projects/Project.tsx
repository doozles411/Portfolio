import React from 'react';
import { motion } from 'framer-motion';
import arrowIcon from '../../assets/images/arrow_icon.png';

function Project({ project }: { project: any }) {
    return (
        <div className='project-container'>
            <div className='project-image'>
                <div className='project-outline'></div>
                <motion.img
                    alt={project.name}
                    src={project.image}
                    initial={{ y: 24, x: 24 }}
                    animate={{ y: 0, x: 0 }}
                    transition={{ duration: 1 }}
                >
                </motion.img>
            </div>
            <div className='project-card'>
                <h3>{project.name}</h3>
                <div className='card-container'>
                    <div className='card-description'>{project.description}</div>
                    <div className='break'></div>
                    <div className='card-tools'>{project.tools}</div>
                    <div className='card-links'>
                        <a 
                            href={project.siteLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Live
                            <img alt="Arrow icon" src={arrowIcon} />
                        </a>
                        <a 
                            href={project.gitHubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Code
                            <img alt="Arrow icon" src={arrowIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;