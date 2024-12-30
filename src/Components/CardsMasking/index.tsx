import { useEffect } from "react";
import styles from "./index.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardHoverTransition from "../CardHoverTransition";
gsap.registerPlugin(ScrollTrigger);
const CardsMasking = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.container}`,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: true,
      },
    });
    tl.set(`.${styles.image}`, {
      scale: 0,
      opacity: 0,
      transformOrigin: "left right",
    });
    tl.to(`.${styles.image}`, {
      scale: 1,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <CardHoverTransition />
      <div className={styles.container} id="container">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          {Array.from({ length: 12 }).map((_, index) => (
            <div className={styles.card}>
              <img
                src={`https://picsum.photos/200?random=${index}`}
                className={styles.image}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: "yellow", height: "100vw" }}></div>
    </>
  );
};
export default CardsMasking;
