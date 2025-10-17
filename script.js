// Data for major events
const cricketEvents = [
  "The first Cricket Laws were written in 1744.",
  "First international cricket match played between USA and Canada in 1844.",
  "The Ashes series begins in 1882.",
  "ICC Cricket World Cup inaugurated in 1975.",
  "India wins its first World Cup in 1983.",
  "The introduction of T20 cricket in 2005.",
  "The first T20 World Cup held in 2007.",
  "The inaugural Indian Premier League (IPL) in 2008."];

// Data for cricket legends
const cricketLegends = [
  {
    name: "Sachin Tendulkar",
    bio: "Indian cricketer, regarded as one of the greatest batsmen of all time.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/34/Sachin_Tendulkar_2013_(cropped).jpg"
  },
  {
    name: "Wasim Akram",
    bio: "Pakistani former cricketer, renowned fast bowler and left-arm swing specialist.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Wasim_Akram_2018.jpg"
  },
  {
    name: "Muttiah Muralitharan",
    bio: "Sri Lankan cricketer, highest wicket-taker in both Test and ODI cricket.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Muralitharan_in_2007.jpg"
  }
];

// Event handler for showing/unhiding events
document.getElementById('show-events-btn').addEventListener('click', function() {
  const eventsSection = document.getElementById('events-section');
  eventsSection.classList.toggle('visible');
  // Populate events if not already populated
  if (!eventsSection.hasChildNodes() || !document.getElementById('events-list').hasChildNodes()) {
    populateEvents();
  }
});

// Function to populate the list of major cricket events
function populateEvents() {
  const listContainer = document.getElementById('events-list');
  cricketEvents.forEach(function(event) {
    const li = document.createElement('li');
    li.textContent = event;
    listContainer.appendChild(li);
  });
}

// Function to generate legend profiles
function generateLegends() {
  const container = document.getElementById('legends-container');
  cricketLegends.forEach(function(legend) {
    const card = document.createElement('div');
    card.className = 'legend-card';
    // Add image
    const img = document.createElement('img');
    img.src = legend.imageUrl;
    img.alt = legend.name;
    card.appendChild(img);
    // Add name
    const nameHeader = document.createElement('h3');
    nameHeader.textContent = legend.name;
    card.appendChild(nameHeader);
    // Add bio
    const bioPara = document.createElement('p');
    bioPara.textContent = legend.bio;
    card.appendChild(bioPara);
    container.appendChild(card);
  });
}

// Initialize legends on page load
window.addEventListener('DOMContentLoaded', function() {
  generateLegends();
});