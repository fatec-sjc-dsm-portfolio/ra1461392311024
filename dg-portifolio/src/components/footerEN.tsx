import '../styles/footer.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function FooterEN() {
    const githubBtnRef = useRef(null);
    const linkedinBtnRef = useRef(null);
    useEffect(() => {
        if (githubBtnRef.current) {
            gsap.to(githubBtnRef.current, {
                scale: 1.08,
                repeat: -1,
                yoyo: true,
                duration: 1.2,
                ease: 'power1.inOut',
                delay: 0.2
            });
        }
        if (linkedinBtnRef.current) {
            gsap.to(linkedinBtnRef.current, {
                scale: 1.08,
                repeat: -1,
                yoyo: true,
                duration: 1.2,
                ease: 'power1.inOut',
                delay: 0.7
            });
        }
        const navLinks = document.querySelectorAll('.footer-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = (link as HTMLAnchorElement).getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        window.scrollTo({
                            top: (target as HTMLElement).offsetTop - 40,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
        return () => {
            navLinks.forEach(link => {
                link.replaceWith(link.cloneNode(true));
            });
        };
    }, []);
    return (
        <footer id="footer">
            <div className="footer-content">
                <div className="footer-nav">
                    <h2 className="footer-title">NAVIGATION</h2>
                    <ul>
                        <li><a href="#home" className="footer-link">Home</a></li>
                        <li><a href="#aboutme" className="footer-link">About Me</a></li>
                        <li><a href="#skills" className="footer-link">Skills</a></li>
                        <li><a href="#projects" className="footer-link">Projects</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h2 className="footer-title">CONTACT</h2>
                    <div className="footer-buttons">
                        <a ref={githubBtnRef} href="https://github.com/DouglasMedeiros1" target="_blank" rel="noopener noreferrer" id="github-button" className="footer-btn">
                            <span className="icon-github" style={{display:'inline-flex',alignItems:'center',marginRight:'8px'}}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/></svg>
                            </span>
                            Github
                        </a>
                        <a ref={linkedinBtnRef} href="https://www.linkedin.com/in/douglas-ferrini-medeiros-02b735270" target="_blank" rel="noopener noreferrer" id="linkedin-button" className="footer-btn">
                            <span className="icon-linkedin" style={{display:'inline-flex',alignItems:'center',marginRight:'8px'}}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" fill="currentColor"/></svg>
                            </span>
                            Linkedin
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>&copy; {new Date().getFullYear()} Douglas Medeiros. All rights reserved.</span>
            </div>
        </footer>
    );
}
