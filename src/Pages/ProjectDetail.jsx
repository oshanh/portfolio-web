import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectDetail.module.css';
import projects from '../data/ProjectData';

function getYouTubeId(url) {
    if (!url) return null;
    const match = url.match(
        /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/))([\w-]{11})/
    );
    return match ? match[1] : null;
}

function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);
    const [activeImg, setActiveImg] = useState(0);
    const [viewerOpen, setViewerOpen] = useState(false);
    const videoId = project ? getYouTubeId(project.demoVideo) : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h2>Project not found</h2>
                <button className="btnPrimary" onClick={() => navigate('/')}>Go Home</button>
            </div>
        );
    }

    return (
        <motion.div
            className={styles.page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Back button */}
            <motion.button
                className={styles.backBtn}
                onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                Back to Projects
            </motion.button>

            {/* Hero banner */}
            <div className={styles.heroBanner}>
                <div className={styles.heroBannerOverlay} />
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeImg}
                        className={styles.heroImgWrapper}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setViewerOpen(true)}
                        style={{ width: '100%', height: '100%', cursor: 'zoom-in' }}
                    >
                        <img
                            src={project.screenshots[activeImg]}
                            alt={`${project.title} screenshot`}
                            className={styles.heroBannerImg}
                        />
                        <div className={styles.expandHint}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></svg>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className={styles.heroBannerContent}>
                    <span className={styles.categoryTag}>{project.category}</span>
                    <h1 className={styles.projectTitle}>{project.title}</h1>
                </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <div className={styles.mainCol}>
                    {/* About */}
                    <motion.div
                        className={styles.section}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className={styles.sectionHeading}>About This Project</h2>
                        <p className={styles.fullDescription}>{project.fullDescription}</p>
                    </motion.div>

                    {/* Screenshots gallery */}
                    {project.screenshots.length > 0 && (
                        <motion.div
                            className={styles.section}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                        >
                            <h2 className={styles.sectionHeading}>Screenshots</h2>
                            <div className={styles.gallery}>
                                {project.screenshots.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        className={`${styles.galleryItem} ${activeImg === i ? styles.galleryItemActive : ''}`}
                                        onClick={() => {
                                            setActiveImg(i);
                                            setViewerOpen(true);
                                        }}
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        <img src={img} alt={`Screenshot ${i + 1}`} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Demo Video */}
                    {videoId && (
                        <motion.div
                            className={styles.section}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className={styles.sectionHeading}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                Demo Video
                            </h2>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                                    title={`${project.title} demo video`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className={styles.videoIframe}
                                />
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Sidebar */}
                <motion.aside
                    className={styles.sidebar}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                >
                    {/* Tech Stack */}
                    <div className={styles.sideSection}>
                        <h3 className={styles.sideTitle}>Tech Stack</h3>
                        <div className={styles.techList}>
                            {project.techStack.map((tech, i) => (
                                <span key={i} className={styles.techItem}>{tech}</span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className={styles.sideSection}>
                        <h3 className={styles.sideTitle}>Links</h3>
                        <div className={styles.linksList}>
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    View on GitHub
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                </a>
                            )}
                            {project.demoLink && (
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={`${styles.linkItem} ${styles.demoLink}`}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                                    Live Demo
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                </a>
                            )}
                        </div>
                    </div>
                </motion.aside>
            </div>

            {/* Fullscreen Image Viewer Modal */}
            <AnimatePresence>
                {viewerOpen && (
                    <motion.div
                        className={styles.viewerOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setViewerOpen(false)}
                    >
                        <button className={styles.viewerClose} onClick={() => setViewerOpen(false)}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                        </button>

                        <img
                            src={project.screenshots[activeImg]}
                            alt={`${project.title} full screenshot`}
                            className={styles.viewerImg}
                            onClick={(e) => e.stopPropagation()}
                        />

                        {project.screenshots.length > 1 && (
                            <>
                                <button
                                    className={`${styles.viewerNavBtn} ${styles.viewerPrev}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveImg(i => i === 0 ? project.screenshots.length - 1 : i - 1);
                                    }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                                </button>
                                <button
                                    className={`${styles.viewerNavBtn} ${styles.viewerNext}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveImg(i => i === project.screenshots.length - 1 ? 0 : i + 1);
                                    }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                                </button>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default ProjectDetail;
