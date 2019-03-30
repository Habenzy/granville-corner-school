import React from 'react';
import Footer from './footer';
import Header from './header';

class About extends React.Component {
  render() {
    return (
      <div id="about-CSRC">
        <Header />
        <div className="corner-school-desc">
          <h2>The Granville Library Building</h2>
          <b>A Brief History</b>
          <br />
          <img id="history-image" src="./images/historic/133.jpeg" alt="Granville from above looking North" />
          <p className="indent">In the 1870’s, as Granville’s population soared to 830 citizens, the town decided that the Upper Village needed its own educational facility. Indeed, all of Granville’s neighborhoods had them – the Lower Village, West Hill, South and North Hollows, Texas Falls – ten one-room schoolhouses in all.</p><br /><p className="indent">In 1877, the Corner School opened, just around the corner from the Hotel in the Upper Village. For many years, the school served a lively educational community. Children came from as far away as the Ford Farm on West Hill, and as close as the row houses by the Mill on Route 100.</p><br /><p className="indent">Eleanor Norton, one of three Corner School alumni who still lived in Granville until her death in 2015, has a photograph of the school in 1936, when she was in first grade. There were 28 children in eight grades, educated by one teacher. The late Bill Parrish, another alumnus, remembered well carrying in wood supplied by the Mill from the attached shed, and stoking the old furnace stove which still stands in the Schoolhouse. In that same attached shed, the “cloak rooms” – one for boys and one for girls – housed the bathroom facilities. The schoolhouse never had running water. Instead a large earthen jug stood in the school entryway. It was filled daily with water from the Hotel.</p><br /><p className="indent">Like many small rural Vermont towns, as timber dried up and cities beckoned, Granville’s boom became a bust. By the middle of the twentieth century, there were just 213 people and two one-room schoolhouses left: the Lower Village and the Corner School. Even that seemed more than the town could bear. Article 3 of the 1946 Town Meeting Warning reads, “To see what the Town will vote in regard to repairing the two School Houses, or move one, or sell both and build a new one halfway to cut out transportation.” The Town decided to shrink to one school, and as Superintendent of Schools Richard Butler reported in the following year’s school report, the Lower Village proved the better candidate: “The decision to use the Lower Village School was decided upon when we found that there were more from this part of the Town that would be in the lower grades.” Reportedly, the decision to close the Corner School was fractious. Feelings about the little schoolhouse ran deep. Perhaps it was this sentiment that led the townspeople to leave the building standing, instead of selling it or tearing the building down, the fate of the other eight schoolhouses in Granville.</p><br /><p className="indent">In the 1950’s the Town found a good use for the building. The library collections, which had long been kept on the second floor of the Grange Hall, needed more space. There were also concerns that the weight of the growing number of books were putting structural strains on the Grange. So the collection was moved across the street. The library, a thriving community center throughout the 1970’s, gave new life to the old school. By the early 1990’s, changing times had once again passed the little schoolhouse by. Lack of easy heat and running water and a desire for more modern informational resources meant few visitors came to the Granville Library. The librarian position was eliminated, and no book had been checked out of the Corner School in fifteen years. The collections, which included many first editions, were inventoried and sold or donated by Granville’s Library Trustees in 2009. The next chapter in the schoolhouse's life was about to begin.</p>
        </div>
        <div className="corner-school-desc">
          <b>The History of the CSRC</b>
          <br />
          <img id="csrc-img" src=".\images\events\Corner-School-Float-photo.jpg" alt="" />
          <p className="indent">Nearly one hundred and fifty years ago, Granville was experiencing the biggest economic boom in its history. It was the largest of the three White River Valley towns - Rochester, Hancock and Granville, Vermont - and the center of a vibrant wood products industry as well as several hardworking hill farms. The population boom spurred the construction of ten one-room schoolhouses which proudly served our community for generations. Today only two of those buildings still have the potential of public use. One, the Village School, is a beautiful example of a historic structure repurposed for present use as the Town Office. The other, the Corner School on Post Office Hill, holds the promise of a similar transformation.</p><br /><p className="indent">In 2010, a dedicated group of Granville citizens bought the building from the Town and formed the Corner School Resource Center of Granville (CSRC).</p><p className = "yellow">Our mission is to restore the old structure for a dynamic new purpose: to provide information on the area’s natural and cultural history as well as library, educational and recreational resources, and a meeting space equipped with high-speed internet available for townspeople and visitors alike.</p><br /><p className="indent">Collecting images and oral histories from the residents of the White River Valley is well underway. Our efforts to renovate the building are ongoing. Since 2012, the CSRC Board has made numerous improvements including removal of the interior contents, building stabilization, reparation of broken and missing window panes, and painting of the roof and much of the exterior, while continuing to seek funding for a major renovation. In the spring and summer of 2019, we are continuing this work with the removal and replacement of the floor, the installation of flood vents, and wiring and electricity for wi-fi.</p>
          <br />
            <br />
            <hr />
            <p><b>The Board of Directors:</b></p>
          <ul id="bod-list">
            <li>Ronald Millard, President</li>
            <li>Diane Eramo, Treasurer</li>
            <li>Kate Youngdahl-Stauss, Secretary</li>
            <li>Amy Carst, Director</li>
            <li>Michael Eramo, Director</li>
            <li>Roger Stauss, Director</li>
          </ul>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About