// English version of HomePage
import "../styles/HomePage.css"
import { useEffect, useRef } from "react";
import gsap from "gsap";

function HomePageEN() {
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

    gsap.set(douglas.querySelectorAll(".letter"), { opacity: 0 });
    gsap.set(medeiros.querySelectorAll(".letter"), { opacity: 0 });
    gsap.set([h4, h2], { opacity: 0 });

    const tl = gsap.timeline({ delay: 1 });
    tl.to(douglas.querySelectorAll(".letter"), {
      opacity: 1,
      duration: 1 / 7,
      stagger: 1 / 7,
      ease: "power1.inOut"
    })
    .to([h4, h2], {
      opacity: 1,
      duration: 0.2,
      stagger: 0.05,
      ease: "power1.out"
    }, ">")
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
          {/* 3D model space */}
        </div>
        <div id="ColumnDiv-homepage">
          <h4>Welcome to my Portfolio, I am </h4>
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
          <h2 ref={h2Ref}>I'm a Software Developer, based in São José dos Campos - SP, Brazil.</h2>
          <h4 ref={h4Ref}> Always striving to deliver the best solution in an agile and transparent way, focused on client satisfaction.</h4>
        </div>
      </div>
    </>
  );
}

export default HomePageEN;
