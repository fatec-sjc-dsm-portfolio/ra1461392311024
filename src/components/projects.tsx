import { Canvas } from '@react-three/fiber';
import '../styles/projects.css';
import { useGLTF } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DataProjects = [{
  title: "Sistema de Processamento de Dados de Estações Meteorológicas",
  tags: ["FATEC", "Infraestrutura", "Aruitetura de Software", "Fullstack", "Equipe"],
  description: ["Neste Projeto, recebemos o desafio de propor uma solução web que coletasse informações de sensores presentes em estações meteorológicas e apresentasse esses dados de forma intuitiva e prática ao usuário final. ", <br />, <br />,  "Além disso, também tivemos que lidar com outras necessidades do cliente, como configurar alarmes, gerar relatórios e ter uma interface de aprendizagem."],
  contribuition: ["Neste projeto, pude contribuir com os quatro MVPs como o principal responsável. Pude participar de tudo, desde a configuração da estação meteorológica e sensores até a exibição desses dados, processamento dos dados e enriquecimento da correlação desses dados. ", <br />, <br />, "Portanto, pude melhorar minhas habilidades não apenas em Frontend, mas principalmente pude melhorar minhas habilidades em Bakcend, participando da criação de controles de dados, do coletor de dados e do processamento desses dados. ", <br />, <br />, "Além disso, com a implementação dos padrões Devops, pudemos aprender muito sobre documentação de um sistema como o nosso. Lidei especificamente com esses padrões aplicados ao banco de dados, versionamento e aplicação de cargas de dados naquele banco de dados. Também implementamos a implantação neste banco usando Supabase e Prisma (ORM) no desenvolvimento do sistema."],
  tools: ["Typescript", "Node.js", "React", "Prisma", "PostgreSQL", "MongoDB", "Supabase", "Arduino", "Docker", "Google Cloud", "Github"],
  link: "https://github.com/BananaScripts/Meteorological-Data-Collector"
},
{
  title: "Sistema de Gestão de Ativos Internos de Empresas",
  tags: ["FATEC", "Arquitetura de Software", "Product Owner", "Fullstack", "Equipe"],
  description: ["Este projeto tem como objetivo desenvolver um sistema de gestão de ativos (SGA), fornecendo a uma empresa uma plataforma de gestão de ativos eficaz, com funcionalidades intuitivas, o SGA simplifica o processo de gestão de ativos, garantindo uma administração eficiente."],
  contribuition: ["Neste projeto desenvolvi sistemas no frontend usando Typescript e mais uma vez consegui ocupar a posição de Product Owner por 3 das 4 Sprints, pois no quarto Sprint o grupo teve problemas de performance e precisou mudar funções. ", <br />, <br />, "Com novos membros no grupo, a dificuldade de gerenciamento foi maior, porém, não só participando, mas também definindo as prioridades e funcionalidades do sistema durante o kickoff do projeto, conseguimos ter uma melhor definição do que e como deveria ser feito. ", <br />, <br />, "Como desenvolvedor Frontend, consegui melhorar muito meus conhecimentos em Typescript e React em um sistema orientado a objetos. Além disso, por ter um backend mais isolado, por ser desenvolvido em Java, foi possível aprimorar ainda mais minhas habilidades individuais, entregando interfaces que receberam aprovação e satisfação do cliente."],
  tools: ["Typescript", "React", "Node.js", "Java", "Spring Boot", "PostgreSQL", "Docker", "Git"],
  link: "https://github.com/BananaaScript/SGA"
},
{
  title: "Plataforma Móvel com Agentes de IA para Atendimento Interno",
  tags: ["FATEC", "LLMs", "IAs", "Product Owner", "Fullstack", "Equipe"],
  description: ["Este projeto tem como objetivo o desenvolvimento de uma plataforma de criação e gerenciamento de agentes de Inteligência Artificial. ", <br />, <br />, "A ferramenta permitirá que administradores criem múltiplos agentes virtuais personalizados, treinados para responder dúvidas específicas sobre diferentes sistemas e processos internos da empresa. Além disso, a solução deve contar com um sistema de permissões, onde cada usuário terá acesso apenas aos agentes aos quais foi autorizado."],
  contribuition: "Neste Projeto, pude atuar como Product Owner e desenvolvedor Fullstack, onde pude desenvolver o sistema de backend e frontend. \n Como Product Owner, pude definir as prioridades do projeto e as funcionalidades que deveriam ser implementadas. \n Como desenvolvedor, pude ajudar meus colegas á entregarem soluções com perfeição, mas como PO mantive um contato transparente, continuo e real sobre o andamento do projeto durante todo o processo.",
  tools: ["Typescript", "React Native", "Node.js", "Python", "C#", ".Net", "LLMs", "PostgreSQL", "MongoDB", "Docker", "Git"],
  link: "https://github.com/BananaScripts/API_5-Semester"
},
{
  title: "Site Institucional da Empresa",
  tags: ["Neo Reformata", "Comercial", "Frontend", "Individual"],
  description: ["Este projeto tem como objetivo desenvolver um site institucional para a empresa, com o intuito de apresentar os serviços oferecidos, a história da empresa e facilitar o contato com os clientes."],
  contribuition: ["Neste projeto atuei sozinho como desenvolvedor Fullstack, onde pude desenvolver o site, definindo indentidade visual, layout e funcionalidades do site. ", <br />, <br />, "Pude desenvolver o site usando React e Typescript, com um backend em Node.js e um banco de dados em PostgreSQL. \n Além disso, pude implementar o site usando o Cpanel e Git para versionamento do código."],
  tools: ["Typescript", "React", "Cpanel", "Git"],
  link: "https://www.neoreformata.com.br/"
}
]

function Monitor3d(props: any) {
  const { scene } = useGLTF('/assets/3D/Monitor.glb');
  return <primitive object={scene} {...props} />;
}

export default function Projects() {
  const [currentProject, setCurrentProject] = React.useState(0);
  const project = DataProjects[currentProject];

  const [targetPosition, setTargetPosition] = React.useState([0, 0, 0]);
  const [targetRotation, setTargetRotation] = React.useState([0, 0, 0]);
  const [position, setPosition] = React.useState([0, 0, 0]);
  const [rotation, setRotation] = React.useState([0, 0, 0]);

  // Animation refs
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

  // Animate text out, change project, then animate in
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
    // Animate in after React state update
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

  // Animate li appearance on project change
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
      {/* Overlay for fade out effect */}
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
      <h2 id='titleH2-projects'>
        PROJETOS QUE PARTICIPEI
      </h2>
      <div id='projectsDiv'>
        <div id='textColumnDiv-projects' ref={textColumnRef}>
          <div id='titleDiv-projects' ref={titleRef}>
            {project.title}
          </div>
          <br />
          <div id='tagsDiv-projects' ref={tagsRef}>
            {project.tags?.map((tag) => (
              <span key={tag} className='tag-projects'>{tag}</span>
            ))}
          </div>
          <br />
          <h2>Descrição :</h2>
          <div id='textDiv-projects' ref={descRef}>
            {project.description}
          </div>
          <br />
          <h2>Minha Contribuição :</h2>
          <div id='textDiv-projects' ref={contribRef}>
            {project.contribuition}
          </div>
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
              <button style={{backgroundColor: "rgb(240, 248, 255, 0.2)"}} onClick={linktoProject}>Acesse o Projeto</button>
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
