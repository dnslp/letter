 // ===== Statement Categories and Data =====
const categories = [
    {
      title: "Opening Statements",
      type: "sentence",
      statements: [
        "It’s been such a joy getting to know {StudentName} this year.",
        "I’ve truly enjoyed spending time with {StudentName} in speech sessions.",
        "This year, {StudentName} has brought unique energy and presence to our time together.",
        "Every session with {StudentName} has been a highlight in my week.",
        "From the very beginning, {StudentName} approached therapy with an open mind and heart.",
        "{StudentName} has shown remarkable growth throughout our time this year.",
        "I’ve had the privilege of watching {StudentName} grow more confident with every passing month.",
        "{StudentName} quickly became a thoughtful and fun participant in speech.",
        "I have appreciated {StudentName}’s curiosity and willingness to try new strategies.",
        "Working with {StudentName} has been equal parts rewarding and inspiring.",
        "It has been a pleasure supporting {StudentName} on their communication journey.",
        "{StudentName} has made every session meaningful with their presence and effort.",
        "I’ve really valued the time I’ve spent with {StudentName} this year.",
        "{StudentName} approached therapy with consistency, care, and determination.",
        "I’ve had the chance to see so many sides of {StudentName}—funny, thoughtful, determined.",
        "{StudentName} has added color and brightness to our work together.",
        "Our sessions were always better with {StudentName} in them.",
        "I’m grateful for the chance to support {StudentName} this school year.",
        "This year was filled with small wins and big smiles, thanks to {StudentName}.",
        "{StudentName} came to each session ready to participate and ready to grow.",
        "Watching {StudentName} find their voice this year has been incredibly special."
      ]
    },
    {
      title: "Strengths & Positive Attributes",
      type: "sentence",
      statements: [
        "{StudentName} brings a natural kindness that helps create a positive environment.",
        "{StudentName} is quick to laugh, and that joy is often shared with others in the room.",
        "{StudentName} shows perseverance even when tasks feel challenging.",
        "{StudentName} listens closely and considers new ideas thoughtfully.",
        "{StudentName} has a steady sense of curiosity and a growing confidence to explore.",
        "{StudentName} often takes pride in their progress, which fuels continued effort.",
        "{StudentName} is eager to connect and communicate in ways that feel authentic.",
        "{StudentName} responds well to encouragement and is learning to advocate for {himself/herself/themself}.",
        "{StudentName} demonstrates quiet leadership, often by modeling focus and cooperation.",
        "{StudentName} has a spark of creativity that shines through in conversations and activities.",
        "{StudentName} approaches new challenges with a can-do attitude.",
        "{StudentName} is reflective and often self-monitors their own progress with growing awareness.",
        "{StudentName} brings a calm presence that helps others feel at ease.",
        "{StudentName} collaborates well in both structured and flexible settings.",
        "{StudentName} is tuned in to how others feel and often offers kindness without prompting.",
        "{StudentName} expresses ideas with color, detail, and a strong personal style.",
        "{StudentName} takes initiative and is beginning to guide their own learning process.",
        "{StudentName} shows patience and empathy during peer interactions.",
        "{StudentName} is highly observant, often noticing subtle cues and responding with care.",
        "{StudentName} can shift between silly and serious in a way that shows emotional maturity.",
        "{StudentName}'s personality shines through their communication in playful, thoughtful ways."
      ]
    },
    {
      title: "Speech & Language Progress",
      type: "list",
      statements: [
        "{StudentName} has improved overall intelligibility by consistently producing target sounds.",
        "{StudentName} now self-corrects sound errors with minimal prompting.",
        "{StudentName} demonstrates increased awareness of speech production.",
        "{StudentName} is using more complex sentence structures to express ideas.",
        "{StudentName} has expanded their vocabulary and applies new words in conversation.",
        "{StudentName} follows multistep directions more independently and with greater accuracy.",
        "{StudentName} understands and uses spatial and temporal concepts with increased consistency.",
        "{StudentName} initiates conversation and asks relevant questions during structured activities.",
        "{StudentName} is better able to maintain a topic across conversational turns.",
        "{StudentName} identifies and repairs communication breakdowns more effectively.",
        "{StudentName} demonstrates growing confidence when speaking in front of peers.",
        "{StudentName} participates in group discussions with clearer articulation and purpose.",
        "{StudentName} uses descriptive language to add detail to stories and explanations.",
        "{StudentName} understands a wider range of figurative language and idioms.",
        "{StudentName} uses visual supports as needed but increasingly relies on verbal cues.",
        "{StudentName} applies strategies such as repeating or rephrasing to clarify ideas.",
        "{StudentName} understands and uses past, present, and future tense with more accuracy.",
        "{StudentName} uses AAC (or other supports) with improved fluency and intent.",
        "{StudentName} is learning to advocate for communication needs during academic tasks.",
        "{StudentName} applies speech and language skills across different settings with greater ease.",
        "{StudentName} celebrates communication successes and takes pride in progress."
      ]
    },
    {
      title: "Transition Suggestions",
      type: "sentence",
      statements: [
        "Providing consistent routines and visual schedules will support {StudentName}'s adjustment to new environments.",
        "Encouraging peer collaboration through structured social opportunities will benefit {StudentName}'s confidence.",
        "{StudentName} will thrive with predictable transitions and clear expectations in the classroom.",
        "Continued modeling and reinforcement of self-advocacy skills will help {StudentName} speak up for their needs.",
        "Access to calming strategies or breaks as needed will help {StudentName} stay regulated during busy school days.",
        "{StudentName} may benefit from adult check-ins at the start and end of the day to build predictability.",
        "Middle school routines that allow for repetition and previewing of tasks will help build independence.",
        "Offering structured opportunities to practice conversation skills in small groups can support social growth.",
        "Continued collaboration between home and school teams will be important to ensure {StudentName}'s success.",
        "Pairing {StudentName} with a supportive peer during unstructured times may foster connection and confidence.",
        "Giving {StudentName} space to explore interests in creative electives may open new avenues for communication.",
        "Maintaining access to visual or written cues will ease cognitive load as academic demands increase.",
        "Reinforcing routines for organizing materials and assignments will support executive functioning.",
        "Explicit instruction in navigating new social environments will benefit {StudentName}'s peer interactions.",
        "Encouraging {StudentName} to reflect on their own progress will support a sense of agency and pride.",
        "Providing advance notice before changes in routine can help {StudentName} feel more secure.",
        "{StudentName} will benefit from familiar adult support while building new connections in middle school.",
        "Continuing speech services with targeted goals will support ongoing growth in communication.",
        "Encouraging participation in student-led or small-group projects will help {StudentName} build community.",
        "Supporting {StudentName} in generalizing learned skills across classes will help ensure continuity.",
        "Helping {StudentName} identify safe adults and calm spaces in the new building can promote emotional safety."
      ]
    },
    {
      title: "Closing Statements",
      type: "sentence",
      statements: [
        "I’m excited to see what {StudentName} accomplishes next.",
        "Thank you for your support and collaboration throughout the year.",
        "I feel lucky to have been a part of {StudentName}’s growth this year.",
        "With continued encouragement and structure, {StudentName} is well-prepared for what’s ahead.",
        "I have no doubt that {StudentName} will continue to thrive with the right support.",
        "It’s been a joy to witness {StudentName}’s progress and confidence bloom.",
        "I’m proud of how far {StudentName} has come and eager to see where they go next.",
        "Middle school will bring new opportunities—and I trust {StudentName} will rise to the occasion.",
        "I’ll miss working with {StudentName}, but I’m confident they’ll keep shining.",
        "Thank you for sharing {StudentName} with me this year—it’s made a real impact.",
        "I’m hopeful that {StudentName} enters the next chapter with excitement and a sense of belonging.",
        "I know {StudentName} will continue to grow in wonderful ways with the right supports in place.",
        "It’s always bittersweet to say goodbye, but I leave this year proud of the journey we shared.",
        "Please don’t hesitate to reach out if there’s anything I can do to support the transition.",
        "{StudentName} has left a lasting impression—and I believe they’ll continue to do so.",
        "I’m cheering for {StudentName} as they take this next big step.",
        "The foundation we built together this year will support future success.",
        "I’m hopeful {StudentName} enters middle school feeling prepared, proud, and excited.",
        "This isn’t goodbye—it’s a celebration of all that {StudentName} has achieved.",
        "{StudentName} leaves this year with skills, confidence, and a story worth telling.",
        "Here’s to the next adventure—{StudentName} is ready."
      ]
    }
  ];
  
  // ===== Pronoun Map =====
  const pronounMap = {
    she: { sub: "she", obj: "her", poss: "her", refl: "herself" },
    he: { sub: "he", obj: "him", poss: "his", refl: "himself" },
    they: { sub: "they", obj: "them", poss: "their", refl: "themself" }
  };
  
  // ===== Utility: Sentence Splitter =====
  function splitSentences(text) {
    // Simple, robust sentence splitter for periods, ? and ! with spacing
    return text.match(/[^.!?]+[.!?]+[\])'"`’”]*|.+/g) || [];
  }
  
  // ===== UI Rendering =====
  function renderSections(studentName = "{StudentName}") {
    const container = document.getElementById("sections");
    container.innerHTML = "";
    categories.forEach((cat, i) => {
      const section = document.createElement("div");
      section.classList.add("section");
      section.dataset.index = i;
  
      const header = document.createElement("h2");
      header.textContent = `▸ ${cat.title}`;
      header.addEventListener("click", () => {
        section.classList.toggle("open");
        header.textContent = section.classList.contains("open") ? `▼ ${cat.title}` : `▸ ${cat.title}`;
      });
  
      const content = document.createElement("div");
      content.classList.add("section-content");
  
      cat.statements.forEach((text, j) => {
        const btn = document.createElement("button");
        btn.className = "button";
        // Live replace {StudentName} in button label
        btn.textContent = text.replace(/{StudentName}/g, studentName || "{StudentName}");
        btn.dataset.orig = text; // store original with placeholder
        btn.addEventListener("click", () => {
          btn.classList.toggle("selected");
          updatePreview();
        });
        content.appendChild(btn);
      });
  
      section.appendChild(header);
      section.appendChild(content);
      container.appendChild(section);
    });
  }
  
  // ===== Dynamic Button Text on Name Change =====
  function updateButtonNames(name) {
    document.querySelectorAll(".section").forEach(section => {
      section.querySelectorAll(".button").forEach(btn => {
        const orig = btn.dataset.orig || btn.textContent;
        btn.textContent = orig.replace(/{StudentName}/g, name || "{StudentName}");
      });
    });
  }
  
  // ===== Smart Pronoun Replacement in Letter Preview =====
  function updatePreview() {
    const name = document.getElementById("studentName").value.trim() || "{StudentName}";
    const p = pronounMap[document.getElementById("pronouns").value];
    let letter = "";
  
    categories.forEach((cat, i) => {
      const section = document.querySelector(`.section[data-index='${i}']`);
      const selected = Array.from(section.querySelectorAll('.button.selected')).map(btn => btn.dataset.orig);
      if (!selected.length) return;
      if (cat.type === "list") {
        // Each selected statement is a bullet, apply smart replacement inside each bullet
        letter += selected.map((s, idx) => {
          let replaced = s;
          // First bullet uses name, others use pronouns
          if (idx === 0) {
            replaced = replaced.replace(/{StudentName}/g, name);
          } else {
            replaced = replaced
              .replace(/{StudentName}/g, p.sub.charAt(0).toUpperCase() + p.sub.slice(1));
          }
          replaced = replaced
            .replace(/{he\/she\/they}/g, p.sub)
            .replace(/{him\/her\/them}/g, p.obj)
            .replace(/{his\/her\/their}/g, p.poss)
            .replace(/{himself\/herself\/themself}/g, p.refl);
          return "• " + replaced;
        }).join("\n") + "\n\n";
      } else {
        // Group all selected sentences, break into sentences
        let sentences = [];
        selected.forEach((s, sidx) => {
          const subs = splitSentences(s);
          subs.forEach((sentence, sentIdx) => {
            // First sentence: use name, others: pronouns
            if (sentIdx === 0 && sidx === 0) {
              sentence = sentence.replace(/{StudentName}/g, name);
            } else {
              sentence = sentence.replace(/{StudentName}/g, p.sub.charAt(0).toUpperCase() + p.sub.slice(1));
            }
            sentence = sentence
              .replace(/{he\/she\/they}/g, p.sub)
              .replace(/{him\/her\/them}/g, p.obj)
              .replace(/{his\/her\/their}/g, p.poss)
              .replace(/{himself\/herself\/themself}/g, p.refl);
            sentences.push(sentence.trim());
          });
        });
        letter += sentences.join(" ") + "\n\n";
      }
    });
  
    const anecdote = document.getElementById("anecdoteText").value.trim();
    if (anecdote) {
      letter += anecdote + "\n\n";
    }
  
    document.getElementById("output").textContent = letter.trim();
  }
  
  // ===== Copy to Clipboard =====
  document.addEventListener("DOMContentLoaded", function () {
    renderSections();
    updatePreview();
  
    document.getElementById("studentName").addEventListener("input", (e) => {
      updateButtonNames(e.target.value.trim());
      updatePreview();
    });
  
    document.getElementById("pronouns").addEventListener("change", updatePreview);
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
  
  