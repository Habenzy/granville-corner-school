import { useEffect, useState } from "react";
import Event from "./Event"

function Quote(props) {
  const [fade, setFade] = useState("fade-in");

  useEffect(() => {
    const timeout = setInterval(() => {
      setFade("fade-out")
    }, 9000);
    return () => clearInterval(timeout);
  }, [fade]);

  return(
    <div id="event-quote" className={fade} onTransitionEnd={() => setFade("fade-in")}>{props.quote}</div>
  )
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
    {title: "Art Show: Made in the Mountains", blurb: "Featuring the work of local artists Clare Walker Leslie, Johno Landsman, Samantha Sheehan, Phil Bobrow, Meg Reinhold and Clayton Anderson. Music by Granville Daze! (The music is still to be confirmed. Leave it off for now, but hopefully, I'll know soon.)", time: "Sunday, Sept. 10 at 4pm"},
    {title: "Story Hour for Kids Kick-off! ", blurb: "Stories, songs, games and snacks for small folk and their caregivers. Register to get free children’s books sent directly to your home through  Dolly Parton’s Imagination Library. ", time: "Sunday, Sept. 24 at 1pm"},
    {title: "A Celebration of Granville History", blurb: "Watch “A Hill Farmer’s Story” a short documentary film based on the diaries of early 20th century Granville residents. Sign up for our Oral History project and share a story of your own!", time: "Sunday, Oct. 15 at 7pm"}
  ])

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
            return <div key={i} className="event-item">
              <h3>{announce.title}</h3>
              <p>{announce.blurb}</p>
              <p><b>{announce.time}</b></p>
            </div>
          })}
        </div>
        <Quote quote={dispQuote} />
      </div>
    </div>
  );
}

export default Home;
