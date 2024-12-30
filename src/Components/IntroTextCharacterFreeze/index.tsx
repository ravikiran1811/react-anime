import gsap from "gsap";
import styles from "./index.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap-trial/SplitText";
import { useEffect, useRef } from "react";
gsap.registerPlugin(SplitText, ScrollTrigger);
const IntroTextCharacterFreeze = () => {
  // "https://www.datocms-assets.com/98180/1730407329-approach_headline.mp4"
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!containerRef.current) return; // Check if ref is available

    const splitText = new SplitText(
      containerRef.current?.querySelector("p") as HTMLElement,
      {
        type: "chars",
      }
    );
    console.log(splitText);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "bottom bottom",
        pin: true,
        scrub: 0.75,
        markers: true,
      },
    });
    tl.set(
      splitText.chars,
      {
        color: "#ffcc66",
        stagger: 0.1,
      },
      0.1
    );
    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "red", height: "100vw" }}></div>
      <div ref={containerRef} className={styles.container} id="container">
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          esse ea illo fugit modi nulla quisquam incidunt laboriosam obcaecati
          pariatur! Hic dolorum, corporis odio nobis ullam deserunt voluptatibus
          dolor quis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Facilis, corrupti. Natus, totam sunt voluptates blanditiis omnis
          architecto! A atque quibusdam commodi obcaecati quod esse, deleniti
          aliquam nesciunt consequatur quidem tempore modi delectus aspernatur!
          Saepe quae corporis, quod est repellendus aspernatur. Doloremque natus
          quae neque earum exercitationem cumque reprehenderit quasi aliquid
          excepturi ipsum. Quae debitis deserunt incidunt dolorem ullam ipsa
          atque facilis officiis quidem exercitationem delectus nemo perferendis
          impedit maxime, dignissimos fuga non cupiditate aspernatur consectetur
          voluptatum! Totam temporibus asperiores obcaecati similique animi
          aspernatur quo in aliquid minus nam. Corporis, distinctio? Quia labore
          officia eum quod hic tempora, placeat deleniti est distinctio?
          Inventore deserunt, tenetur sed commodi error impedit similique
          exercitationem dicta repellendus assumenda minima unde excepturi omnis
          totam aliquid placeat consectetur eaque earum dolor nihil atque
          expedita doloribus sapiente? Suscipit quis distinctio aperiam, ea
          provident officia, adipisci, minus perspiciatis porro impedit nostrum
          aspernatur magnam facilis ipsam necessitatibus tempora illo. Fugiat
          ducimus non esse ratione omnis exercitationem sed natus autem odio
          enim sequi nesciunt doloremque facilis delectus temporibus veniam ad
          ullam animi, eius perspiciatis corrupti quidem doloribus optio. Sit,
          dolor voluptatem voluptas possimus exercitationem assumenda itaque
          explicabo, molestiae amet vel corrupti nostrum quidem labore quae
          reprehenderit!
        </p>
        <p>its a bvlock</p>
      </div>

    </>
  );
};
export default IntroTextCharacterFreeze;
