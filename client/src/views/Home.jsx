import React from "react";
// images
import crowd from "../assets/img/festival-crowd-1.jpg";
import vynils from "../assets/img/vynils2.jpg";
import stage from "../assets/img/stage-1.jpg";
// styles
import "../styles/image.css";
import "../styles/latest.css";

export default function Home() {
  return (
    <div className="page home">
      <h1 className="title">A Home...</h1>

      <p className="parag">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Debitis et reiciendis ullam amet in recusandae.
        Numquam accusantium itaque illum. Voluptatibus.
      </p>

      <h2 className="title medium">For Music lovers</h2>

      <img className="home-cover" src={vynils} alt="vynils" />

      <h3 className="title">Learn, Share, Discuss</h3>

      <p className="parag">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, tenetur.
        Quaerat, numquam? Perspiciatis cum nemo, exercitationem minus, soluta
        quos asperiores vitae est porro repudiandae doloremque maxime ex
        voluptatibus voluptatem laudantium recusandae placeat eligendi sit? Non,
        quos itaque! Mollitia quaerat quam aut quidem ex corrupti cupiditate,
        repellendus molestias fugiat! 
      </p>

      <img className="home-cover" src={crowd} alt="crowd in a music festival" />


      <h2 className="title medium">Latest artists (Bonus D.I.Y)</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cum.
        Dolor adipisci placeat dolorum ipsa facere eius perferendis! Quaerat
        molestias iusto modi aspernatur, similique quae esse assumenda
        laboriosam tempore recusandae.
      </p>
      <h2 className="title medium">Latest albums  (Bonus D.I.Y)</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cum.
        Dolor adipisci placeat dolorum ipsa facere eius perferendis! Quaerat
        molestias iusto modi aspernatur, similique quae esse assumenda
        laboriosam tempore recusandae.
      </p>

      <img className="home-cover" src={stage} alt="stage in a music festival" />
      
      <h2 className="title medium">Best rated artists  (Bonus D.I.Y)</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cum.
        Dolor adipisci placeat dolorum ipsa facere eius perferendis! Quaerat
        molestias iusto modi aspernatur, similique quae esse assumenda
        laboriosam tempore recusandae.
      </p>
      <h2 className="title medium">Best rated albums  (Bonus D.I.Y)</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cum.
        Dolor adipisci placeat dolorum ipsa facere eius perferendis! Quaerat
        molestias iusto modi aspernatur, similique quae esse assumenda
        laboriosam tempore recusandae.
      </p>

   
    </div>
  );
}
