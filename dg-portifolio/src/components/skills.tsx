import '../styles/skills.css'

export default function skills() {
    const line1Technologies = [
        { 
            name: 'TypeScript', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        { 
            name: 'JavaScript', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        { 
            name: 'React', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        { 
            name: 'Three.js', 
            icon: 'https://threejs.org/manual/examples/resources/images/threejs-logo.svg'
        },
        { 
            name: 'Node.js', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        { 
            name: 'Python', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        { 
            name: 'React Native', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        { 
            name: 'C#', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
        }
    ]

    const line2Technologies = [
        { 
            name: 'Blender', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg'
        },
        { 
            name: 'AWS', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
        },
        { 
            name: 'GitHub', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        { 
            name: 'Linux', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
        },
        { 
            name: 'MySQL', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        { 
            name: 'PostgreSQL', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        { 
            name: 'MongoDB', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        { 
            name: 'Redis', 
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
        }
    ]

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const img = e.currentTarget;
        const fallback = img.nextElementSibling as HTMLElement;
        if (fallback) {
            img.style.display = 'none';
            fallback.style.display = 'block';
        }
    };
    const createInfiniteItems = (technologies: typeof line1Technologies) => {
        return [...technologies, ...technologies, ...technologies, ...technologies];
    };

    return (
        <div className="skills-container">
            <h2 className="skills-title" style={{fontFamily: 'Moonhouse'}}>TECHNOLOGIES & TOOLS</h2>
            
            <div className="carousel-container">
                <div className="carousel-line">
                    <div className="carousel-track">
                        {createInfiniteItems(line1Technologies).map((tech, index) => (
                            <div key={index} className="tech-item">
                                <img 
                                    src={tech.icon} 
                                    alt={tech.name} 
                                    className="tech-icon"
                                    onError={handleImageError}
                                />
                                <span className="tech-fallback" style={{display: 'none'}}>{tech.name}</span>
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="carousel-line">
                    <div className="carousel-track reverse">
                        {createInfiniteItems(line2Technologies).map((tech, index) => (
                            <div key={index} className="tech-item">
                                <img 
                                    src={tech.icon} 
                                    alt={tech.name} 
                                    className="tech-icon"
                                    onError={handleImageError}
                                />
                                <span className="tech-fallback" style={{display: 'none'}}>{tech.name}</span>
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}