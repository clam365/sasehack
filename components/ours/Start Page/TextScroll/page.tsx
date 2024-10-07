'use client';
import styles from './page.module.css';
import {useEffect, useRef} from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import gsap from 'gsap';
const phrase: string = "Wildspace is a photo-sharing platform for adolescents to showcase their spots through photos and personalized locations while supporting conservation efforts with descriptions and donation links. It fosters a community dedicated to preserving cherished landscapes across the country.";

export default function Home(): JSX.Element {
    const refs = useRef<HTMLSpanElement[]>([]);
    const container = useRef<HTMLDivElement | null>(null);

    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimation();
    }, [])
    const createAnimation = () => {
        gsap.to(refs.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: `top 60%`,
                end: 'bottom 100%',
                //end: `+=${window.innerHeight / 1.5}`,
            },
            opacity: 1,
            ease: "none",
            stagger: 0.1
        })
    }
    const splitWords = (phrase: string): JSX.Element[] => {
        const body: JSX.Element[] = [];
        phrase.split(" ").forEach((word, i) => {
            const letters = splitLetters(word);
            body.push(<p key={`${word}_${i}`}>{letters}</p>);
        });
        return body;
    };

    const splitLetters = (word: string): JSX.Element[] => {
        const letters: JSX.Element[] = [];
        word.split("").forEach((letter, i) => {
            letters.push(
                <span key={`${letter}_${i}`} ref={el => { if (el) refs.current.push(el); }}>
          {letter}
        </span>
            );
        });
        return letters;
    };

    return (
        <main ref={container} className={styles.main} id={"about"}>
            <div className={`${styles.body} text-3xl md:text-5xl`}>
                {
                    splitWords(phrase)
                }
            </div>
        </main>
    );
}
