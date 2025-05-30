import React from "react";

function About({ image = "https://via.placeholder.com/215", about = "This is a blog about learning React." }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;