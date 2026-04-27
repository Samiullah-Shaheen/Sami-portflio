import React from "react";
import BlogCards from "./BlogCards";
export default function Blog() {
  const Blogobject = [
    {
      imgb: "images/b1.jpg",
      title: "Web Developer's Journey",
      disc: "While the world rests, a web developer keeps going — coding, debugging, and improving.",
    },
    {
      imgb: "images/b2.jpg",
      title: "Never Stop Creating",
      disc: "Even when systems pause, a web developer moves forward — designing, solving, and innovating.",
    },
    {
      imgb: "images/s1.jpg",
      title: "Shaping The Future",
      disc: "When others stop, a web developer rises — creating experiences, writing code, and shaping the future.",
    },
  ];
  return (
    <div className="blog">
      <BlogCards {...Blogobject[0]}></BlogCards>
      <BlogCards {...Blogobject[1]}></BlogCards>
      <BlogCards {...Blogobject[2]}></BlogCards>
    </div>
  );
}
