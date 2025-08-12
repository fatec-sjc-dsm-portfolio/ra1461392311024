
import "../styles/HomePage.css"
import { useEffect, useRef } from "react";
import gsap from "gsap";

function HomePage() {
  const douglasRef = useRef<HTMLSpanElement>(null);
  const medeirosRef = useRef<HTMLSpanElement>(null);
  const h4Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const douglas = douglasRef.current;
    const medeiros = medeirosRef.current;
    const h4 = h4Ref.current;
    const h2 = h2Ref.current;
    if (!douglas || !medeiros || !h4 || !h2) return;

    // Hide all letters and elements initially
    gsap.set(douglas.querySelectorAll(".letter"), { opacity: 0 });
    gsap.set(medeiros.querySelectorAll(".letter"), { opacity: 0 });
    gsap.set([h4, h2], { opacity: 0 });

    const tl = gsap.timeline({ delay: 1 });
    // 1. Douglas typing (1s)
    tl.to(douglas.querySelectorAll(".letter"), {
      opacity: 1,
      duration: 1 / 7,
      stagger: 1 / 7,
      ease: "power1.inOut"
    })
    // 2. h4 and h2 fade in (0.2s)
    .to([h4, h2], {
      opacity: 1,
      duration: 0.2,
      stagger: 0.05,
      ease: "power1.out"
    }, ">")
    // 3. Medeiros typing (1s)
    .to(medeiros.querySelectorAll(".letter"), {
      opacity: 1,
      duration: 1 / 8,
      stagger: 1 / 8,
      ease: "power1.inOut"
    }, ">")
    ;
  }, []);

  return (
    <>
      <div id="Div-homepage">
        <div id="ModelDiv-homepage">
          {/*
          *Espaço para visualizar o modelo 3D
          */}
        </div>
        <div id="ColumnDiv-homepage">
          <h4>Bem vindo ao meu Protifólio, eu sou o </h4>
          <h1 id="titleH1-homepage">
            <span ref={douglasRef}>
              {"DOUGLAS".split("").map((l, i) => (
                <span className="letter" key={i}>{l}</span>
              ))}
              _
            </span>
            <br />
            <span ref={medeirosRef}>
              {"MEDEIROS".split("").map((l, i) => (
                <span className="letter" key={i}>{l}</span>
              ))}
            </span>
          </h1>
          <h2 ref={h2Ref}>Sou um Desenvolvedor de Software, em São José dos Campos - SP, Brazil.</h2>
          <h4 ref={h4Ref}> Sempre buscando entregar a melhor solução de forma ágil e transparente, como foco na satisfação do cliente</h4>
        </div>
      </div>
    </>
  );
}

export default HomePage;