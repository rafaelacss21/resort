import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function About() {
  return (
    <>
      <Hero hero="aboutHero">
        <Banner title="About" subtitle="International Beach Resort" />
      </Hero>
      <div className="about-info">
        <article className="desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mattis libero sed feugiat vehicula. Praesent mollis dolor est, sed
            lobortis mauris consequat eget. Nullam bibendum et lectus vel
            vulputate. Nunc fringilla ultrices pellentesque. Nullam augue nisi,
            lobortis at rhoncus finibus, condimentum ac turpis. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Curabitur nunc tellus, tempor et ipsum vel, dapibus pharetra
            lectus. Etiam aliquet nunc vel lectus fermentum, id interdum augue
            lobortis. In ornare diam at nulla ultrices, eget pharetra nibh
            malesuada. Fusce non nisl consectetur, viverra elit et, fringilla
            nisi.
          </p>
          <p>
            Nam quis placerat ex. Integer sit amet nisl eu arcu efficitur
            venenatis. Nam lobortis quis enim congue fringilla. Praesent
            hendrerit elementum libero, eget condimentum tortor accumsan at.
            Vivamus tortor nulla, euismod vitae lectus sit amet, fermentum
            molestie tortor. Etiam vel convallis eros, a scelerisque risus.
            Nulla vulputate ullamcorper libero nec bibendum. Cras sodales neque
            ipsum, sed pellentesque risus convallis quis. Suspendisse quam leo,
            scelerisque sit amet egestas et, mollis id augue. Donec malesuada
            nisl nec dolor cursus, sed ultrices libero commodo. Praesent et
            blandit nunc. Integer laoreet, arcu vulputate vehicula vehicula,
            urna est sollicitudin elit, ut pretium nibh dui vel velit. Quisque
            sollicitudin dui maximus, dapibus odio porttitor, efficitur eros.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aenean cursus metus nec mauris bibendum
            faucibus.
          </p>
        </article>
      </div>
    </>
  );
}
