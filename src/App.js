import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion datas={faqs} />
    </div>
  );
}

function Accordion({ datas }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {datas.map((data, i) => (
        <AccordionItem
          data={data}
          number={i}
          key={i}
          curOpen={curOpen}
          onSetOpen={setCurOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ data, number, curOpen, onSetOpen }) {
  const isOpen = number === curOpen;
  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <div onClick={() => onSetOpen(isOpen ? null : number)}>
        <p className="title">{data.title}</p>
        <p className="icon">{!isOpen ? "+" : "-"}</p>
      </div>
      {isOpen ? <div className="content-box">{data.text}</div> : ""}
    </div>
  );
}
