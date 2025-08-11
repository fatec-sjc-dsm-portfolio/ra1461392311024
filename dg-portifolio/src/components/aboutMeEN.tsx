// English version of AboutMe
import { OrbitControls, useGLTF } from '@react-three/drei';
import '../styles/aboutMe.css'
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function MeModel(props: any) {
    const { scene } = useGLTF('/assets/3D/Me.glb');
    return <primitive object={scene} {...props} />;
  }

export default function AboutMeEN() {
    useGLTF.preload('/assets/3D/Me.glb');
    const h1Ref = useRef(null);
    const h2TopRef = useRef(null);
    const h3Ref = useRef(null);
    const h2BottomRef = useRef(null);
    const hrRef = useRef(null);
    const githubBtnRef = useRef(null);
    const linkedinBtnRef = useRef(null);

    useEffect(() => {
        gsap.set([h1Ref.current, h2TopRef.current, h3Ref.current, h2BottomRef.current, hrRef.current], { opacity: 0, y: 20 });
        gsap.to(h1Ref.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.2 });
        gsap.to(h2TopRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.4 });
        gsap.to(h3Ref.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.6 });
        gsap.to(h2BottomRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.8 });
        gsap.to(hrRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 1 });
    }, []);

    return (
        <>
        <div id='Div-aboutme'>
            <div id='ColumnDiv-aboutme'>
                <h1 ref={h1Ref}>ABOUT ME</h1>
                <h2 ref={h2TopRef} style={{fontSize: '1.2rem'}}>
                    My goal is always to meet client needs through adaptable, high-quality solutions, delivering my best every time. 
                </h2>
                <br />
                <h3 ref={h3Ref}>
                    - I'm 20 years old and have been studying development since 2023.  <br />
                    - Full-Stack Developer, with a stronger focus on frontend. <br />
                    - Experience in projects with agile/scrum methodologies. <br />
                    - I've acted as Product Owner internally at FATEC.<br />
                    - Studying Multiplatform Software Development.<br />
                </h3>
                <br />
                <h2 ref={h2BottomRef}>
                    Passionate about building modern solutions, I have experience with agile methodologies, object-oriented projects, and full-stack development. I work on Web and Mobile systems using React/React Native, Node.js, and .NET, often integrating AI technologies. 
                    <br /> <br />
                    I'm currently focused on deepening my knowledge in Prompt Engineering, System Architecture, and leveraging agile methodologies (Scrum) to create scalable and robust solutions.      
                </h2>
                <hr ref={hrRef} />
                <br />
                <div id='ButtonsDiv-aboutme'>
                    <button ref={githubBtnRef} id='github-button' onClick={() => window.open('https://github.com/DouglasMedeiros1', '_blank')}>
                        <span className="icon-github" style={{display:'inline-flex',alignItems:'center',marginRight:'8px'}}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/></svg>
                        </span>
                        Github
                    </button>
                    <button ref={linkedinBtnRef} id='linkedin-button' onClick={() => window.open('https://www.linkedin.com/in/douglas-ferrini-medeiros-02b735270', '_blank')}>
                        <span className="icon-linkedin" style={{display:'inline-flex',alignItems:'center',marginRight:'8px'}}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" fill="currentColor"/></svg>
                        </span>
                        Linkedin
                    </button>
                </div>
            </div>
            <div id="ImageDiv-aboutme">
            <Canvas camera={{ position: [30, 25, 90], fov: 27.5 }} shadows dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <directionalLight
                position={[20, 40, 30]}
                intensity={2.5}
                color={'#fff'}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0005}
                />
                <MeModel scale={5} position={[-10, -32.5, 10]} />
                <EffectComposer>
                    <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={1.2} />
                </EffectComposer>
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
                </Canvas>
            </div>
        </div>
        </>
    )
}
