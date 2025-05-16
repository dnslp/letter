// commit: feat: new grammar-safe categories array for smartReplace and sandwich logic
const categories = [
    {
      title: "Opening Statements",
      type: "sentence",
      statements: [
        "{StudentName} started this year with curiosity and a willingness to try new things.",
        "Throughout the year, I saw {him/her/them} approach challenges with a positive mindset.",
        "I enjoyed working with {him/her/them} during speech therapy sessions this year.",
        "{He/She/They} consistently brought energy and kindness to each session.",
        "From our first session, it was clear that {he/she/they} cares deeply about learning.",
        "{He/She/They} made every session more enjoyable with {his/her/their} personality.",
        "It has been a privilege to work with {him/her/them} on communication goals.",
        "Getting to know {him/her/them} was a highlight of my school year.",
        "Watching {him/her/them} interact with peers showed growth in confidence.",
        "Each session with {him/her/them} was filled with effort and growth.",
        "This year has truly helped {StudentName} grow."
      ]
    },
    {
      title: "Strengths & Positive Attributes",
      type: "sentence",
      statements: [
        "{StudentName} is kind to peers and helps others feel included.",
        "{He/She/They} asks thoughtful questions and listens with care.",
        "{He/She/They} responds well to encouragement and tries new strategies.",
        "Patience and flexibility are two of {his/her/their} strengths.",
        "{He/She/They} brings creative ideas to conversations and activities.",
        "I appreciate {his/her/their} ability to stay focused during tasks.",
        "{He/She/They} notices when classmates need help and offers support.",
        "Curiosity drives {him/her/them} to explore new topics in speech.",
        "{He/She/They} is developing strong self-advocacy skills.",
        "Humor and warmth make {him/her/them} a pleasure to work with.",
        "{He/She/They} collaborates well in group activities.",
        "{He/She/They} uses respectful communication with both adults and peers.",
        "Empathy is a core part of how {he/she/they} interacts with others.",
        "I notice {his/her/their} confidence increasing as skills improve.",
        "{He/She/They} shows pride in progress and celebrates achievements.",
        "{StudentName} has left a positive impression on everyone."
      ]
    },
    {
      title: "Speech & Language Progress",
      type: "list",
      statements: [
        "{StudentName} improved accuracy with target speech sounds.",
        "{He/She/They} uses new words and phrases to share ideas.",
        "{He/She/They} participates in group discussions more confidently.",
        "{He/She/They} can follow multi-step directions with less support.",
        "{He/She/They} asks and answers questions during lessons.",
        "{He/She/They} uses clear speech with classmates.",
        "{He/She/They} practices communication skills outside of therapy.",
        "{He/She/They} understands and uses figurative language.",
        "{He/She/They} repairs misunderstandings using strategies learned.",
        "{He/She/They} organizes thoughts before speaking.",
        "{He/She/They} recognizes and names emotions during activities.",
        "{He/She/They} advocates for communication needs when necessary.",
        "{He/She/They} shares stories and information with more detail.",
        "{He/She/They} applies learned strategies in new settings.",
        "{He/She/They} uses visuals or AAC to support communication.",
        "{StudentName} has made meaningful progress this year."
      ]
    },
    {
      title: "Transition Suggestions",
      type: "sentence",
      statements: [
        "{StudentName} will benefit from consistent routines as {he/she/they} transitions to a new setting.",
        "Visual schedules and written reminders may support {him/her/them} during transitions.",
        "Pairing {him/her/them} with a peer buddy can encourage social confidence.",
        "Opportunities for small-group work will benefit {his/her/their} learning.",
        "Previewing changes before they happen helps {him/her/them} feel prepared.",
        "Extra time for processing directions supports {his/her/their} independence.",
        "Encouragement and positive feedback build {his/her/their} self-esteem.",
        "Speech and language supports should continue as needed.",
        "Regular adult check-ins help {him/her/them} navigate new routines.",
        "Clear expectations and structured environments set {him/her/them} up for success.",
        "Encouraging {him/her/them} to reflect on growth will support future progress.",
        "Opportunities for choice increase {his/her/their} engagement.",
        "Safe spaces and calming strategies help {him/her/them} regulate emotions.",
        "Involving families in communication planning is important for {his/her/their} success.",
        "Celebrating small wins keeps {him/her/them} motivated.",
        "{StudentName} is ready to take on new challenges with confidence."
      ]
    },
    {
      title: "Closing Statements",
      type: "sentence",
      statements: [
        "I am excited to see what {StudentName} will accomplish next year.",
        "With continued support, {he/she/they} is ready for the next chapter.",
        "Thank you for your partnership and communication this year.",
        "{His/Her/Their} progress is something to be proud of.",
        "I look forward to hearing about {his/her/their} future successes.",
        "It has been a pleasure working with {him/her/them}.",
        "I will miss {his/her/their} presence in our sessions.",
        "Middle school will be a wonderful opportunity for {him/her/them} to shine.",
        "Wishing {him/her/them} all the best in the coming year.",
        "Please stay in touch if you have questions or need support.",
        "I am grateful to have been part of {his/her/their} journey.",
        "Thank you for sharing {him/her/them} with our school community.",
        "This is not goodbye—just the start of a new adventure for {him/her/them}.",
        "The foundation built this year will help {his/her/their} growth.",
        "Best wishes to {him/her/them} and family.",
        "{StudentName} has so much to look forward to!"
      ]
    }
  ];
  
  // ====== Pronoun Map ======
const pronounMap = {
  she: { sub: "she", obj: "her", poss: "her", refl: "herself" },
  he: { sub: "he", obj: "him", poss: "his", refl: "himself" },
  they: { sub: "they", obj: "them", poss: "their", refl: "themself" }
};

const anecdotePrompts = [
  "Describe a moment that stood out this year—something positive, memorable, or unique.",
  "Share a breakthrough or milestone moment during therapy.",
  "Describe something {StudentName} said or did that surprised you.",
  "Write about a time {StudentName} made someone laugh or smile.",
  "Reflect on a challenge {StudentName} overcame this year."
];

function renderAnecdotePrompt(studentName = "{StudentName}") {
  const select = document.getElementById("anecdotePrompt");
  const currentValue = select.value; // preserve the current selection, if any

  select.innerHTML = ""; // clear existing options

  anecdotePrompts.forEach(template => {
    const option = document.createElement("option");
    // Replace {StudentName} with the actual name (or fallback)
    option.value = template.replace(/{StudentName}/g, studentName || "{StudentName}");
    option.textContent = template.replace(/{StudentName}/g, studentName || "{StudentName}");
    // Optionally preserve selection on name change
    if (option.value === currentValue) {
      option.selected = true;
    }
    select.appendChild(option);
  });
}


// ====== Capitalization Helper ======
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// ====== Render Sections (with Name/Pronoun, Badge per Section) ======
function renderSections(studentName = "{StudentName}", pronounSet = "she") {
  const p = pronounMap[pronounSet];
  const container = document.getElementById("sections");

  // Track selected templates before rerender
  const previouslySelected = {};
  document.querySelectorAll(".section").forEach((section) => {
    Array.from(section.querySelectorAll(".button.selected")).forEach(btn => {
      previouslySelected[btn.dataset.orig] = true;
    });
  });

  container.innerHTML = "";
  categories.forEach((cat, i) => {
    const section = document.createElement("div");
    section.classList.add("section");
    section.dataset.index = i;

    const header = document.createElement("h2");
    header.innerHTML = `${section.classList.contains("open") ? '▼' : '▸'} ${cat.title} <span class="badge"></span>`;
    header.addEventListener("click", () => {
      section.classList.toggle("open");
      header.innerHTML = `${section.classList.contains("open") ? '▼' : '▸'} ${cat.title} <span class="badge"></span>`;
      updateBadges(); // ensure badge is up-to-date after expand/collapse
    });

    const content = document.createElement("div");
    content.classList.add("section-content");

    cat.statements.forEach((text) => {
      const btn = document.createElement("button");
      btn.className = "button";
      btn.type = "button";
      btn.dataset.orig = text; // Store the raw template

      // Live replacement for button display
      btn.textContent = text
        .replace(/{StudentName}/g, studentName || "{StudentName}")
        .replace(/{he\/she\/they}/gi, (m) => m[1] === 'H' ? capitalize(p.sub) : p.sub)
        .replace(/{him\/her\/them}/gi, (m) => m[1] === 'H' ? capitalize(p.obj) : p.obj)
        .replace(/{his\/her\/their}/gi, (m) => m[1] === 'H' ? capitalize(p.poss) : p.poss)
        .replace(/{himself\/herself\/themself}/gi, (m) => m[1] === 'H' ? capitalize(p.refl) : p.refl);

      // Restore selection state
      if (previouslySelected[text]) btn.classList.add("selected");

      btn.addEventListener("click", () => {
        btn.classList.toggle("selected");
        updatePreview();
        updateBadges();
      });
      content.appendChild(btn);
    });

    section.appendChild(header);
    section.appendChild(content);
    container.appendChild(section);
  });

  updateBadges();
  renderAnecdotePrompt(studentName);
}

// ====== Update Selection Badges (Scoped to Each Section) ======
function updateBadges() {
  document.querySelectorAll(".section").forEach((section) => {
    const count = section.querySelectorAll(".button.selected").length;
    const badge = section.querySelector(".badge");
    if (badge) {
      badge.textContent = count;
      badge.className = count > 0 ? "badge active" : "badge";
    }
  });
}

// ====== Smart Pronoun Replacement in Letter Preview with Name Sandwich ======
function updatePreview() {

  const nameInput = document.getElementById("studentName");
  const name = nameInput ? nameInput.value.trim() : "{StudentName}";
  const pronounSet = document.getElementById("pronouns").value;
  const p = pronounMap[pronounSet];
  let letter = "";
  renderAnecdotePrompt(name);
  // Utility: Replace all pronoun placeholders (upper/lowercase)
  function replacePronouns(str, useName = false) {
    return str
      .replace(/{StudentName}/g, useName ? name : p.sub)
      .replace(/{he\/she\/they}/gi, (m) => m[1] === 'H' ? capitalize(p.sub) : p.sub)
      .replace(/{him\/her\/them}/gi, (m) => m[1] === 'H' ? capitalize(p.obj) : p.obj)
      .replace(/{his\/her\/their}/gi, (m) => m[1] === 'H' ? capitalize(p.poss) : p.poss)
      .replace(/{himself\/herself\/themself}/gi, (m) => m[1] === 'H' ? capitalize(p.refl) : p.refl);
  }

  categories.forEach((cat, i) => {
    const section = document.querySelector(`.section[data-index='${i}']`);
    if (!section) return;
    const selectedBtns = Array.from(section.querySelectorAll('.button.selected'));
    const selected = selectedBtns.map(btn => btn.dataset.orig);

    if (!selected.length) return;

    if (cat.type === "list") {
      selected.forEach((s, idx) => {
        let replaced;
        if (selected.length === 1 || idx === 0 || idx === selected.length - 1) {
          replaced = replacePronouns(s, true); // Use name for first/last bullet
        } else {
          replaced = replacePronouns(s, false); // Use pronoun for middle bullets
        }
        letter += "• " + replaced + "\n";
      });
      letter += "\n";
    } else {
      // Sentences: name sandwich logic
      let para = "";
      selected.forEach((s, idx) => {
        let replaced;
        if (selected.length === 1 || idx === 0 || idx === selected.length - 1) {
          replaced = replacePronouns(s, true); // Use name for first/last
        } else {
          replaced = replacePronouns(s, false); // Pronouns for middle
        }
        para += replaced + " ";
      });
      letter += para.trim() + "\n\n";
    }
  });

  // Add anecdote if present
  const anecdote = document.getElementById("anecdoteText").value.trim();
  if (anecdote) {
    letter += anecdote + "\n\n";
  }

  document.getElementById("output").textContent = letter.trim();
}

// ====== DOMContentLoaded and Event Handling ======
document.addEventListener("DOMContentLoaded", function () {
  function renderAndPreview() {
    renderSections(
      document.getElementById("studentName").value.trim(),
      document.getElementById("pronouns").value
    );
    updatePreview();
  }

  renderAndPreview();

  document.getElementById("studentName").addEventListener("input", renderAndPreview);
  document.getElementById("pronouns").addEventListener("change", renderAndPreview);
  document.getElementById("anecdoteText").addEventListener("input", updatePreview);
  document.getElementById("anecdotePrompt").addEventListener("change", (e) => {
    document.getElementById("anecdoteText").placeholder = e.target.value;
  });

  // Copy button logic
  document.getElementById("copyBtn").addEventListener("click", () => {
    const text = document.getElementById("output").textContent;
    navigator.clipboard.writeText(text).then(() => {
      const msg = document.getElementById("copyMsg");
      msg.style.display = "inline";
      setTimeout(() => { msg.style.display = "none"; }, 1200);
    });
  });
});
