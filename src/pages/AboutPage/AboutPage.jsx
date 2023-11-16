import React, { useRef } from "react";
import s from "./AboutPage.module.css";
import { FaArrowCircleDown } from "react-icons/fa";
import avatar from "../../assets/avatar.jpg";
import gostinaya from "../../assets/gostinaya.png";

export default function AboutPage() {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <div className={s.banner}>
        <div className={s.content_wrapper}>
          <div className={s.content}>
            <p>
              Hi! My name is Ivan Morozov. <br />I am a visual designer of
              interiors and small (architectural) forms. <br />
              Many people don't understand the drawings or can't imagine what
              their future interior will look like as a whole, I'm ready to
              help.
            </p>

            <FaArrowCircleDown
              className={s.scroll_doun}
              onClick={scrollToNextSection}
            />
          </div>
        </div>
      </div>
      <div
        className={`${s.block_about} ${s.content_wrapper}`}
        ref={nextSectionRef}
      >
        <div className={s.block_about_content}>
          <p>
            Let me tell you more about my experience:
            <br />I have quite a lot of experience in design, graphics,
            rendering and modelling 3D models and interiors and exteriors.
            Collaborative experience with fellow architects and designers.
            <br /> I work in programs such as 3D max + (Corona, V-ray), Adobe
            Photoshop, Corel-Draw.
            <br /> In 2006 I graduated from the architectural university "KRSU"
            in Kyrgyzstan, Bishkek.
            <br /> - After graduation I worked as an interior designer in a
            private capacity (design, furniture of flats, houses and
            restaurants).
            <br />
            - I worked at IND achitects from 2010-2014 where he gained good
            experience in visualisation, cooperation with partners and
            manufacturers of finishing materials, as well as experience in
            working with clients.
            <br /> When IND achitects moved to Moscow I was lucky enough to work
            there as well, where I had more opportunities and funds to carry out
            interesting projects (flats, houses, restaurants and food courts).
            <br />
            -I am currently living with my family in Düsseldorf and have had
            time to work as a designer for Balter GmbH and Avaloid GmbH from
            2016-2021.
            <br />
            My tasks have included: creating product visualisations for website
            and advertising, packaging design, promotional materials, 3D
            mock-ups of exhibition halls and office space design.
            <br /> -Also working as a freelancer, as a as a visual designer. I
            actively work with architects and other designers.
            <br /> This work really interests me and is very close to my heart.
            It is especially gratifying when the visualisation is brought to
            life.
            <br />I firmly believe in my abilities and motivation to create
            interesting projects.
          </p>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className={s.download_wrapper}>
        <button className={s.download_button}>
          <a
            href="https://drive.google.com/file/d/13mD-71BJkN4KVFm1gaZSD9sz1FPupgjH/view?usp=sharing"
            download
          >
            Lebenslauf
          </a>
        </button>

        <button className={s.download_button}>
          <a
            href="https://drive.google.com/file/d/1MkH9vqNDxN_VDVw-Lgsgfc6tPQ0suozw/view?usp=sharing"
            download
          >
            Bewerbung
          </a>
        </button>
        <button className={s.download_button}>
          <a
            // href="https://drive.google.com/file/d/18DR1zuvWpr4BmM_1Hl9s0bT66fMvSAMS/view?usp=sharing"
            href="https://drive.google.com/drive/folders/1JqNRWYWlqgMDIBp6RKJ1fOIZgXzJpweZ?usp=sharing"
            download
          >
            View Certificate
          </a>
        </button>
        <button className={s.download_button}>
          <a href="https://3ddd.ru/users/morosow/models">View 3ddd models</a>
        </button>
      </div>
      <div className={`${s.banner} ${s.banner_down}`}>
        <div className={`${s.content_wrapper} ${s.content_wrapper_down}`}>
          <p className={s.content}>Work and Enjoy Life!</p>
          <img src={gostinaya} alt="gostinaya" />
        </div>
      </div>
    </div>
  );
}
