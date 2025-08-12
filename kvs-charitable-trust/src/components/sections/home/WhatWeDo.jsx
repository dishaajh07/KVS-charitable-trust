import styles from "./WhatWeDo.module.css";
import Image from "next/image";
import GradientButton from "../../elements/GradientButton";
import Link from "next/link";
import OutlinedButton from "@/components/elements/OutlinedButton";

const WhatWeDo = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textContent}>
        <h2 className={styles.heading}>What We Do</h2>
        <p className={styles.description}>
          KVS Charitable Trust is a nonprofit rooted in compassion and
          community. Since 2008, we’ve worked actively to support truly
          underserved individuals—feeding children, offering free skill-based
          education, health & hygiene services, and ensuring they grow up
          healthy and loved.
        </p>
        <div className={styles.buttons}>
          <GradientButton text="Donate Now" icon="💛" />
       <OutlinedButton
  size="large"
  borderRadius="50px"
  width="250px"
  gradient="white"
  outlineColor="var(--congress-blue)"
  showOutline={true}
  textColor="black"
>More about us
</OutlinedButton>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/home/home-whatwedo.png"
          alt="Children supported by KVS Trust"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
