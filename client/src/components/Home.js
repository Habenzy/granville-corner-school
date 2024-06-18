import { useEffect, useState } from "react";
import Event from "./Event";

function Quote(props) {
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    const timeout = setInterval(() => {
      setFade("fade-out");
    }, 9000);
    return () => clearInterval(timeout);
  }, [fade]);

  return (
    <div
      id="event-quote"
      className={fade}
      onTransitionEnd={() => setFade("fade-in")}
    >
      {props.quote}
    </div>
  );
}

function Home(props) {
  const [quotes, setQuotes] = useState([
    `There was no Route 100 until 1912 up through the Gulf. The main route was Puddledock.  -Norm A.`,
    `We were kind of free spirits, so we decided to move here and see how it was, have a garden. And here we are 43 years later.  -Nancy D.`,
    `There was a tree that was snowing, but there wasn't snow anywhere else. It felt like a blessing.  -Michael E.`,
    `No traffic lights, no stop signs, no cops, no buses, no trains. I just kind of fell in love with it. Living up in the hollows, up on the hills is an adventure.  -Jamie S.`,
    `Larry sold me a parcel. Started building in 1966. Every nail, every wire, I put in.  -Fritz B.`,
  ]);
  const [dispQuote, setDispQuote] = useState(
    "Larry sold me a parcel. Started building in 1966. Every nail, every wire, I put in.  -Fritz B."
  );
  const [announcements, setAnnouncements] = useState([
    {title: "Art and the Discomfort Zone", blurb: "A five-week seminar focused on art that challenges cultural norms about what is “pretty” to spur creative growth. Former instructor at the Art Institute of California, Pim Volpi, takes participants through various artistic movements, culminating in making pieces inspired by the concepts presented. Open to young adults & up. $100. Scholarships available! For more information and to register, email vtcornerschool@gmail.com", time: "Saturdays, July 6, 2024 through August 3, 2024 10a - 1p"},
    {title: "Family Nature Hunts", blurb: "Renowned author and naturalist, Clare Walker Leslie, leads two fun and informative sessions that help us see and record the wild world all around us. You’ll be amazed at how many critters and plants make their home near the schoolhouse and how their lives are connected to our own! $10 suggested donation per family. Everybody's welcome! For more information and to register, email vtcornerschool@gmail.com", time: "Thursday, July 18, 2024 10a - noon & Wednesday, Aug 7, 2024 4p -6p"},
    {title: "Memoir Writing", blurb: "Discover why we should tell our own stories and the best forms for doing so, both for an audience and personal enrichment. Award winning writer/educator Kate Youngdahl-Stauss, whose work has appeared on PBS, History and National Geographic, leads a five part course for young adults through super seniors. $100. Scholarships available. For more information and to register, email vtcornerschool@gmail.com", time: "Thursdays, July 11, 2024 through August 8, 2024 5p - 7p"}
  ]);

  useEffect(() => {
    let timeoutID = setInterval(() => {
      setDispQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 10000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <div>
      <div id="home-body">
        <div id="cover">
          <div id="mission-statement">
            <p>
              The Corner School Resource Center of Granville is dedicated to the
              preservation of the region's unique natural and cultural history,
              and the creation of a learning center that connects Granville to
              the wider world in the historic Corner School building.
            </p>
          </div>
        </div>
        <div className="event-display">
          {announcements.map((announce, i) => {
            return (
              <div key={i} className="event-item">
                <h3>{announce.title}</h3>
                <p>{announce.blurb}</p>
                <p>
                  <b>{announce.time}</b>
                </p>
              </div>
            );
          })}
        </div>
        <Quote quote={dispQuote} />
      </div>
    </div>
  );
}

export default Home;
