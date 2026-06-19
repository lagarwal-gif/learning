// ============================================
// FOUNDER DECISION JOURNAL - JAVASCRIPT
// ============================================

// 1. STORE DECISIONS IN MEMORY
// This is an array (list) that stores all the decisions
// It starts empty, and we add decisions when the user clicks Save
let decisions = [];

// 2. GET HTML ELEMENTS WE NEED TO INTERACT WITH
// These are "references" to the form and the list on the page
const form = document.getElementById('decisionForm');
const decisionsList = document.getElementById('decisionsList');

// 3. LISTEN FOR FORM SUBMISSION
// When the user clicks the "Save Decision" button, run the savDecision() function
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the page from refreshing

  // Get the values the user typed in each field
  const founderName = document.getElementById('founderName').value;
  const company = document.getElementById('company').value;
  const decision = document.getElementById('decision').value;
  const category = document.getElementById('category').value;

  // Create a new decision object with this data
  const newDecision = {
    founder: founderName,
    company: company,
    decision: decision,
    category: category,
    dateCreated: new Date().toLocaleDateString() // Add today's date automatically
  };

  // Add this decision to our list
  decisions.push(newDecision);

  // Clear the form so it's ready for the next decision
  form.reset();

  // Update the display to show all decisions
  displayDecisions();
});

// 4. FUNCTION TO DISPLAY ALL DECISIONS
function displayDecisions() {
  // Clear the current list (remove old HTML)
  decisionsList.innerHTML = '';

  // If there are no decisions, show a message
  if (decisions.length === 0) {
    decisionsList.innerHTML = '<p class="empty-state">No decisions logged yet. Create one above!</p>';
    return;
  }

  // For each decision in our list, create an HTML card and add it to the page
  decisions.forEach(function(dec, index) {
    // Create the card HTML
    const card = document.createElement('div');
    card.className = 'decision-card';

    // Add the content inside the card
    card.innerHTML = `
      <h3>${dec.company}</h3>

      <div class="decision-meta">
        <div class="meta-tag">
          <span>Founder:</span>
          <span>${dec.founder}</span>
        </div>
        <div class="meta-tag">
          <span>Date:</span>
          <span>${dec.dateCreated}</span>
        </div>
      </div>

      <p class="decision-text">${dec.decision}</p>

      <span class="category-badge">${dec.category}</span>
    `;

    // Add this card to the page
    decisionsList.appendChild(card);
  });
}

// 5. CALL displayDecisions() when the page first loads
// This ensures the page shows any decisions if we refresh
displayDecisions();
