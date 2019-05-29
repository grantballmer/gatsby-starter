import React from "react";
// import "../../pages/scss/podcast.scss";
import "./episode.scss";

const EpisodePage = ({ info }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // create js date object
  const publishDate = new Date(info.date);

  const month = months[publishDate.getMonth()];
  const day = publishDate.getDate();
  const year = publishDate.getFullYear();

  // get where iframe src starts and ends to insert src into dom element
  let start = info.src.search('src="') + 5;
  let end = info.src.indexOf('"', start);
  const iframeSrc = info.src.substring(start, end);

  // let iframeHeight = window.innerWidth > 600 ? "166" : "20";

  return (
    <div className="episodePage">
      <div className="podcast__hero" />
      <div className="episodePage__group">
        <h1>{info.title}</h1>
        <p className="episodePage__date">
          Published {`${month} ${day}, ${year}`}
        </p>
      </div>

      <div className="episodePage__group">
        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          title="episode 1"
          src={iframeSrc}
        />

        {/* <iframe
          height="200px"
          width="100%"
          frameborder="no"
          scrolling="no"
          seamless
          src="https://player.simplecast.com/249e7832-b3d6-42a6-93d0-2efcacd66311?dark=false"
        /> */}
        <p className="episodePage__desc">{info.description}</p>
      </div>

      {/* <audio controls preload="auto">
        <source src={AudioFile} type="audio/mp3" />
      </audio> */}
    </div>
  );
};

export default EpisodePage;
