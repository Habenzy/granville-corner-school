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
  const [announcement, setAnnouncement] = useState({
    title: "Free Summer Workshop Series",
    blurb: `The Corner School Resource Center of Granville VT (CSRC) is offering six free workshops on select Thursdays in July and August. Topics range from Nature Journaling to Financial Literacy and Memoir Writing with a focus on education and fun.
    These workshops are open to anyone in the White River and Mad River communities and will be held at the Corner School, located at 75 Post Office Hill Rd. in Granville. 
    The workshop facilitators are renowned naturalist, Clare Walker Leslie, Harwood Union financial literacy and math instructor, Tara Kelley, and professional writer and Harwood Union English teacher, Kate Youngdahl-Stauss.
    Some workshops have limited space, so be sure to reserve soon if you're interested! For more information about the summer program, contact Kate at k8izwrite@gmail.com. 

    <h3>The Workshops</h3>

    <b>Nature Journaling - all ages</b>
    <p>Thursday, July 14</p>
    <p>4:00pm - 6:00pm</p>
    <p>Nature lovers, learn the tips and tricks of setting up and keeping your own Nature Journal with veteran naturalist, Clare Walker Leslie. Bring a sketch book or pad of unlined paper. 2 pencils, and 2 fine-line pens. Optional supplies: colored pencils, a field guide, folding stool and binoculars. Be sure to wear suitable clothes and bring snacks & water. Copies of Clare's books will be available for sale. For more info about Clare, visit www.clarewalkerleslie.com</p>

    <b>Memoir Writing - all ages</b>
    <p>Thursday, July 21</p>
    <p>4:30p - 6:00p</p>
    <p>Memoir writing preserves the most important stories of all - your stories. Kate Youngdahl-Stauss, professional writer and Harwood Union's English department head, guides you with prompts to inspire. Bring a meaningful photograph from your life along with a journal and writing utensil! Limited to 6. Reserve your space by calling 802-989-8787 and leave a message with Kate.</p>

    <b>Business Writing - all ages</b>
    <p>Thursday, July 28 </p>
    <p>4:30p - 6:00p</p>
    <p>Business writing requires clean, impactful prose. Find out how to make the right impression with your letter, proposal or resume. Bring an idea or a piece in progress to work on with professional writer and English teacher, Kate Youngdahl-Stauss. Limited to 6. Reserve your space by calling 802-989-8787 and leave a message with Kate.</p>

    <b>Financial Literacy 101 - teens, young adults, and the people who love them</b>
    <p>Thursday, August 4th</p>
    <p>4:30pm - 5:30pm</p>
    <p>Why should you be thinking about retirement now? Starting early and investing longer can build more wealth. Harwood Union Personal Finance instructor, Tara Kelley, guides you through various types of retirement accounts and leads a discussion on other topics of interest to the group. Whether you're thinking about investing for yourself or a young person in your life, this is the workshop for you!</p>

    <b>Fun with Nature - just for kids</b>
    <p>Thursday, August 18</p>
    <p>10:00am  - 12noon</p>
    <p>Learn about the nature that lives here with Granville artist/naturalist Clare Walker Leslie. On our Adventure Hunt we'll record all the things you find: ants and moths, leaves and flowers, caterpillars and cloud shapes, animal tracks and birds. Pack paper, pencils, pens and snacks. Optional: an eraser, a field guide and binoculars. Limited to 10 adventurous kids! Reserve your space by calling 802-989-8787 and leave a message with Kate.</p>

    <b>Financial Tools: Where to Invest - all ages</b>
    <p>Thursday August 18th</p>
    <p>4:30pm - 5:30:pm</p>
    <p>Harwood Union's Personal Finance instructor, Tara Kelley, takes you on the next step to Financial Literacy with a discussion about financial tools like mutual funds and index funds as well as what to look out for when choosing the investment path that's right for you.</p>`
  })

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
        {announcement && <Event announcement={announcement} />}
        <Quote quote={dispQuote} />
      </div>
    </div>
  );
}

export default Home;
