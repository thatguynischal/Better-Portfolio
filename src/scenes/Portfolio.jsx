import React from "react";
import "./Portfolio.css";
import IMG1 from "../assets/all6.png";
import IMG2 from "../assets/meme.png";
import IMG3 from "../assets/flash.png";
import IMG4 from "../assets/centerwill.png";
import IMG5 from "../assets/luxury1.png";
import IMG6 from "../assets/Calculator.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "All6 (The Dice Game)",
    github: "https://github.com/thatguynischal/dicey",
    demo: "https://cheerful-shortbread-1cb8ae.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Meme4you (Meme Generator)",
    github: "https://github.com/thatguynischal/memes_creator",
    demo: "https://memes-creator.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Flash Fingers (Reaction Timer)",
    github: "https://github.com/thatguynischal/vue_reaction-timer_plus_counter",
    demo: "https://whimsical-florentine-7c9d56.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Centerwill Charity",
    github: "https://github.com/thatguynischal/Responsive_site",
    demo: "https://instagram.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Luxury Designer",
    github: "https://github.com/thatguynischal/Luxury-Brands",
    demo: "https://luxury-brands.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "JS Calculator",
    github: "https://github.com/thatguynischal/Calculator",
    demo: "https://calculator-omega-umber.vercel.app/",
  },
];
function portfolio() {
  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="portfolio__item-cta">
              <div
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            
          >
            <a href={github} target="_blank">Github</a>
          </div>
          <div
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => ("github")}
            href={github}
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
            <a href={demo} target="_blank">Live Demo</a>
            </div>
          </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default portfolio;
