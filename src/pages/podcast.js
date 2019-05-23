import React from "react";
// import { graphql } from "gatsby";
import "./scss/podcast.scss";
import Layout from "../components/Layout";
import { Link } from "gatsby";

// import PodcastLogo from "./images/podcast-logo.jpg";

const Podcast = props => {
  console.log(props);
  return (
    <Layout>
      <section className="podcast">
        <div className="podcast__hero" />

        <h1>Episodes</h1>

        <div className="episodes">
          <Link
            to="/podcast/special-music-episode"
            className="episode-container"
          >
            <div className="episode-counter">02</div>
            <h2>Special Music Episode</h2>
            <p>May 22nd, 2019</p>
            <p>
              Special music episode featuring the songs of bands from Michigan,
              Ohio, and Colorado.
            </p>
          </Link>

          <Link
            to="/podcast/chris-bota-and-john-nowak"
            className="episode-container"
          >
            <div className="episode-counter">01</div>
            <h2>Chris Bota & John Nowak of Desmond Jones</h2>
            <p>May 20th, 2019</p>
            <p>
              On episode 001, featuring Chris Bota and John Nowak of Desmond
              Jones, we chat about the early years and members and tour life.
              Listen now!
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Podcast;

// export const episodeQuery = graphql`
//   query Episode($id: String!) {
//     allMarkdownRemark {

//     }
//   }
// `;

// https://frontendhappyhour.com/
