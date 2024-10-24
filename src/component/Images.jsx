'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Images() {

    useEffect(() => {
        // Настройка анимации для изображений с разной скоростью
        gsap.utils.toArray("img").forEach((img) => {
            let speed = img.dataset.speed;  // Получаем значение из data-speed
            gsap.to(img, {
                x: () => (1 - speed) * 100,  // Зависимость от скорости
                ease: "none",
                scrollTrigger: {
                    trigger: img,
                    scrub: true,  // Связываем анимацию с прокруткой
                    start: "top bottom",  // Начало анимации
                    end: "bottom top",  // Конец анимации
                }
            });
        });

        return () => {
            // Очищаем анимации при размонтировании компонента
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, []);

    return (
        <div id="smooth-wrapper" className="">
            <div id="smooth-content">
                <img data-speed="5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0oioYKxIZdiCR2ZTELp-ZISl0wHSy4Mp-w&s" alt="Image 1" />
                <img data-speed="10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0oioYKxIZdiCR2ZTELp-ZISl0wHSy4Mp-w&s" alt="Image 2" />
                <img data-speed="5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0oioYKxIZdiCR2ZTELp-ZISl0wHSy4Mp-w&s" alt="Image 3" />
            </div>
        </div>
    )
}
