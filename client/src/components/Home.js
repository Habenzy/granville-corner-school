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
    {title: "", blurb: 'The Corner School has received a prestigious award from The Preservation Trust of Vermont for "transforming an historic school building into a generative public space." To find out more about the Preservation Trust and to see the film they produced about our project, visit https://ptvermont.org/granville-corner-school-resource-center-granville-vt-2024-preservation-award/', time: ""},
    {title: 'Mystery Movie Club', blurb: `Announcing the Third Thursday Mystery Movie Club: 
Join special guest hosts from the community as they share a favorite film at the Corner School. Admission is free. Dinner by donation. Doors open at 5:30 movie at 6. Fun for the whole family!
The movie's title is a mystery, but it's not necessarily a "mystery" movie! `, time: ""},
{title: '', blurb: `The Corner School has received a matching grant from the Vermont Department of Historic Preservation to replace our leaky roof! A new roof will also allow us to finish insulating the building for year round use. Be part of the change! Donate today in support of this next step in preserving our beautiful one-room schoolhouse.`, time: ""}
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
