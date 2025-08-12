// English version of Projects
import { Canvas } from '@react-three/fiber';
import '../styles/projects.css';
import { useGLTF } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DataProjects = [
  {
    title: "Meteorological Station Data Processing System",
    tags: ["FATEC", "Infrastructure", "Software Architecture", "Fullstack", "Team"],
    description: ["In this project, we were challenged to propose a web solution that collects information from sensors in meteorological stations and presents this data intuitively and practically to the end user.", <br />, <br />, "Additionally, we had to address other client needs, such as configuring alarms, generating reports, and providing a learning interface."],
    contribuition: ["In this project, I contributed as the main responsible for all four MVPs. I participated in everything from setting up the meteorological station and sensors to displaying, processing, and enriching the correlation of this data.", <br />, <br />, "Therefore, I improved my skills not only in Frontend but mainly in Backend, participating in the creation of data controls, the data collector, and the processing of this data.", <br />, <br />, "Furthermore, with the implementation of DevOps standards, we learned a lot about system documentation. I specifically handled these standards applied to the database, versioning, and data loading. We also implemented deployment using Supabase and Prisma (ORM) during system development."],
    tools: ["Typescript", "Node.js", "React", "Prisma", "PostgreSQL", "MongoDB", "Supabase", "Arduino", "Docker", "Google Cloud", "Github"],
    link: "https://github.com/BananaScripts/Meteorological-Data-Collector"
  },
  {
    title: "Internal Company Asset Management System",
    tags: ["FATEC", "Software Architecture", "Product Owner", "Fullstack", "Team"],
    description: ["This project aims to develop an asset management system (SGA), providing a company with an effective asset management platform. With intuitive features, the SGA simplifies the asset management process, ensuring efficient administration."],
    contribuition: ["In this project, I developed frontend systems using Typescript and once again took on the role of Product Owner for 3 out of 4 Sprints. In the fourth Sprint, the group faced performance issues and had to change roles.", <br />, <br />, "With new members in the group, management became more challenging. However, by not only participating but also defining priorities and system features during the project kickoff, we achieved a better definition of what and how things should be done.", <br />, <br />, "As a Frontend developer, I greatly improved my knowledge in Typescript and React in an object-oriented system. Additionally, with a more isolated backend developed in Java, I was able to further enhance my individual skills, delivering interfaces that received client approval and satisfaction."],
    tools: ["Typescript", "React", "Node.js", "Java", "Spring Boot", "PostgreSQL", "Docker", "Git"],
    link: "https://github.com/BananaaScript/SGA"
  },
  {
    title: "Mobile Platform with AI Agents for Internal Support",
    tags: ["FATEC", "LLMs", "AIs", "Product Owner", "Fullstack", "Team"],
    description: ["This project aims to develop a platform for creating and managing Artificial Intelligence agents.", <br />, <br />, "The tool will allow administrators to create multiple personalized virtual agents, trained to answer specific questions about different systems and internal company processes. Additionally, the solution should include a permissions system, where each user will have access only to the agents they are authorized for."],
    contribuition: "In this project, I acted as Product Owner and Fullstack developer, developing both backend and frontend systems. As Product Owner, I defined project priorities and features to be implemented. As a developer, I helped my colleagues deliver perfect solutions, but as PO, I maintained transparent, continuous, and real communication about the project's progress throughout the process.",
    tools: ["Typescript", "React Native", "Node.js", "Python", "C#", ".Net", "LLMs", "PostgreSQL", "MongoDB", "Docker", "Git"],
    link: "https://github.com/BananaScripts/API_5-Semester"
  },
  {
    title: "Company Institutional Website",
    tags: ["Neo Reformata", "Commercial", "Frontend", "Individual"],
    description: ["This project aims to develop an institutional website for the company, to present the services offered, the company's history, and facilitate contact with clients."],
    contribuition: ["In this project, I worked alone as a Fullstack developer, developing the website, defining the visual identity, layout, and functionalities.", <br />, <br />, "I developed the site using React and Typescript, with a backend in Node.js and a PostgreSQL database. I also implemented the site using Cpanel and Git for code versioning."],
    tools: ["Typescript", "React", "Cpanel", "Git"],
    link: "https://www.neoreformata.com.br/"
  }
]

function Monitor3d(props: any) {
  const { scene } = useGLTF('/assets/3D/Monitor.glb');
  return <primitive object={scene} {...props} />;
}

export default function ProjectsEN() {
  const [currentProject, setCurrentProject] = React.useState(0);
  const project = DataProjects[currentProject];
  const [targetPosition, setTargetPosition] = React.useState([0, 0, 0]);
  const [targetRotation, setTargetRotation] = React.useState([0, 0, 0]);
  const [position, setPosition] = React.useState([0, 0, 0]);
  const [rotation, setRotation] = React.useState([0, 0, 0]);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const contribRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLUListElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  function linktoProject() {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.8, ease: 'power2.inOut', onComplete: () => {
        window.open(project.link, '_blank');
        setTimeout(() => {
          gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: 'power2.inOut' });
        }, 200);
      }});
    } else {
      window.open(project.link, '_blank');
    }
  }
  React.useEffect(() => {
    changeModel3D(currentProject);
  }, []);
  const changeModel3D = (index: number) => {
    switch (index) {
      case 0:
        setTargetPosition([-2.5, -0.5, 2]);
        setTargetRotation([0, 0.5, 0]);
        break;
      case 1:
        setTargetPosition([0, 0, -1.25]);
        setTargetRotation([0, 6, 0.1]);
        break;
      case 2:
        setTargetPosition([-5, 0, 0]);
        setTargetRotation([0, 0, -0.5]);
        break;
      case 3:
        setTargetPosition([0, -4, 0]);
        setTargetRotation([0, 0, 2]);
        break;
      default:
        setTargetPosition([-2.5, 1.5, 2]);
        setTargetRotation([0, 0.5, 0]);
    }
  }
  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const threshold = 0.01;
    let frame: number;
    function animate() {
      setPosition(prev => {
        const next = prev.map((v, i) => lerp(v, targetPosition[i], 0.15));
        return next;
      });
      setRotation(prev => {
        const next = prev.map((v, i) => lerp(v, targetRotation[i], 0.15));
        return next;
      });
      const posDone = position.every((v, i) => Math.abs(v - targetPosition[i]) < threshold);
      const rotDone = rotation.every((v, i) => Math.abs(v - targetRotation[i]) < threshold);
      if (!posDone || !rotDone) {
        frame = requestAnimationFrame(animate);
      } else {
        setPosition(targetPosition);
        setRotation(targetRotation);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [targetPosition, targetRotation]);
  const animateProjectChange = (nextIndex: number) => {
    const tl = gsap.timeline();
    tl.to([
      titleRef.current,
      tagsRef.current,
      descRef.current,
      contribRef.current
    ], {
      opacity: 0,
      y: 20,
      duration: 0.18,
      stagger: 0.04,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentProject(nextIndex);
        changeModel3D(nextIndex);
      }
    });
    setTimeout(() => {
      gsap.fromTo([
        titleRef.current,
        tagsRef.current,
        descRef.current,
        contribRef.current
      ],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.22, stagger: 0.04, ease: 'power2.out' }
      );
    }, 180);
  };
  const handleNextProject = () => {
    const nextIndex = (currentProject + 1) % DataProjects.length;
    animateProjectChange(nextIndex);
  }
  const handlePrevProject = () => {
    const prevIndex = (currentProject - 1 + DataProjects.length) % DataProjects.length;
    animateProjectChange(prevIndex);
  }
  useEffect(() => {
    if (toolsRef.current) {
      gsap.set(toolsRef.current.querySelectorAll('li'), { opacity: 0, x: 40 });
      gsap.to(toolsRef.current.querySelectorAll('li'), {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: gsap.utils.distribute({ base: 0.15, amount: 1.7 }),
        ease: 'power2.out',
        overwrite: true
      });
    }
  }, [currentProject]);
  return (
    <>
      <div ref={overlayRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.7)',
        opacity: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'opacity 0.2s',
      }} />
      <h2 id='titleH2-projects'>PROJECTS I PARTICIPATED IN</h2>
      <div id='projectsDiv'>
        <div id='textColumnDiv-projects' ref={textColumnRef}>
          <div id='titleDiv-projects' ref={titleRef}>{project.title}</div>
          <br />
          <div id='tagsDiv-projects' ref={tagsRef}>
            {project.tags?.map((tag) => (
              <span key={tag} className='tag-projects'>{tag}</span>
            ))}
          </div>
          <br />
          <h2>Description :</h2>
          <div id='textDiv-projects' ref={descRef}>{project.description}</div>
          <br />
          <h2>My Contribution :</h2>
          <div id='textDiv-projects' ref={contribRef}>{project.contribuition}</div>
        </div>
        <div id='modelColumnDiv-projects'>
            <Canvas camera={{ position: [15, 6, 0], fov: 25 }} shadows dpr={[1, 2]}>
              <ambientLight intensity={0.5} />
              <Monitor3d scale={1.25} position={position} rotation={rotation} />
              <directionalLight
                position={[20, 40, 30]}
                intensity={2.5}
                color={'#fff'}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0005}
              />
              <EffectComposer>
                <Bloom luminanceThreshold={0.15} luminanceSmoothing={2} intensity={0.2} />
              </EffectComposer>
            </Canvas>
            <div id='buttonsDiv-projects'>
              <button onClick={handlePrevProject}> Previous </button>
              <br />
              <button style={{backgroundColor: "rgb(240, 248, 255, 0.2)"}} onClick={linktoProject}>Access the Project</button>
              <br />
              <button onClick={handleNextProject}>Next</button>
            </div>
        </div>
        <div id='keyColumnDiv-projects'>
          <div id='toolsDiv-projects'>
            <ul ref={toolsRef}>
              {project.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
