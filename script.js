function toggleMenu(){
    const meni = document.querySelector(".menu-linkovi");
    const ikone=document.querySelector(".hamburger-ikona");
    meni.classList.toggle("open");
    ikone.classList.toggle("open");
}




// D3.js 3D efekt na experience sekciju
document.addEventListener("DOMContentLoaded", function() {
  const skillSections = d3.selectAll('.experience-details-container .details-container');

  skillSections.on('mouseover', function(event) {
    const element = d3.select(this);
    element.transition()
      .duration(400)
      .style('transform', 'rotateY(0deg) rotateX(0deg) scale(1.1)')
      .style('box-shadow', '2px 10px 30px rgb(152,123,116)');
  });

  skillSections.on('mouseout', function(event) {
    const element = d3.select(this);
    element.transition()
      .duration(300)
      .style('transform', 'rotateY(0deg) rotateX(0deg) scale(1)')
      .style('box-shadow', 'none');
  });
});


// D3.js 3D efekt na about sekciju
document.addEventListener("DOMContentLoaded", function() {
  const aboutSections = d3.selectAll('.about-details-container .about-containers .details-container');

  aboutSections.on('mouseover', function(event) {
    const element = d3.select(this);
    element.transition()
      .duration(400)
      .style('transform', 'rotateY(0deg) rotateX(0deg) scale(1.1)')
      .style('box-shadow', '2px 10px 30px rgb(152,123,116)');
  });

  aboutSections.on('mouseout', function(event) {
    const element = d3.select(this);
    element.transition()
      .duration(300)
      .style('transform', 'rotateY(0deg) rotateX(0deg) scale(1)')
      .style('box-shadow', 'none');
  });
});

// D3.js 3D efekt na projects sekciju
document.addEventListener("DOMContentLoaded", function() {
  const projectsSections = d3.selectAll('.details-container');

  projectsSections.on('mouseover', function(event) {
    const element = d3.select(this);
    element.transition()
      .duration(400)
      .style('transform', 'rotateY(0deg) rotateX(0deg) scale(1.1)')
      .style('box-shadow', '2px 10px 30px rgb(152,123,116)');
  });

  projectsSections.on('mouseout', function(event) {
    const element = d3.select(this);
    element.transition()
      .duration(300)
      .style('transform', 'rotateY(0deg) rotateX(0deg) scale(1)')
      .style('box-shadow', 'none');
  });
});


/*graf za skills*/
const skillsData = [
  { skill: "Figma", level: 85 },
  { skill: "HTML", level: 63 },
  { skill: "CSS", level: 57 },
  { skill: "JavaScript", level: 54 },
  { skill: "Python", level: 70 }
];

//dimenzije
const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const width = 800;
  const height = skillsData.length * 50 + margin.top + margin.bottom;

//svg element
const svg = d3.select("#skills-chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);


const xScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, width - 100]); 

const yScale = d3.scaleBand()
  .domain(skillsData.map(d => d.skill))
  .range([0, height])
  .padding(0.2);

//trake napretka
svg.selectAll(".background-bar")
  .data(skillsData)
  .enter()
  .append("rect")
  .attr("class", "background-bar")
  .attr("x", 0)
  .attr("y", d => yScale(d.skill))
  .attr("width", xScale(100))
  .attr("height", yScale.bandwidth())
  .attr("fill", "rgb(213, 156, 133)")

//ispunjene trake
svg.selectAll(".filled-bar")
  .data(skillsData)
  .enter()
  .append("rect")
  .attr("class", "filled-bar")
  .attr("x", 0)
  .attr("y", d => yScale(d.skill))
  .attr("width", d => xScale(d.level))
  .attr("height", yScale.bandwidth())
  .attr("fill", "rgb(153, 123, 116)");


//tekst vještina
svg.selectAll(".skill-text")
  .data(skillsData)
  .enter()
  .append("text")
  .attr("class", "skill-text")
  .attr("x", 5)
  .attr("y", d => yScale(d.skill) + yScale.bandwidth() / 1.5)
  .text(d => `${d.skill}: ${d.level}%`)
  .attr("fill", "#ffffff")
  .attr("font-size", "14px");