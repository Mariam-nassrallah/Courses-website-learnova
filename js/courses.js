// ===== Learnova - course data =====
// Every course card links to course-details.html?id=<id>.
// The details page reads the id and fills itself in from this list.

const INSTRUCTORS = {
  sara:  { name: "Sara Haddad", initials: "SH", grad: "g1", role: "Senior Frontend Developer",
           bio: "Sara builds web apps for startups and has taught web development and security to hundreds of students." },
  omar:  { name: "Omar Khalil", initials: "OK", grad: "g3", role: "Full-Stack JavaScript Engineer",
           bio: "Omar ships React front ends and Node.js back ends for production apps, and loves turning complex ideas into simple lessons." },
  lina:  { name: "Lina Saab", initials: "LS", grad: "g6", role: "Mobile Developer & Product Designer",
           bio: "Lina designs and builds cross-platform mobile apps, with a focus on clean, user-friendly interfaces." },
  karim: { name: "Karim Nader", initials: "KN", grad: "g5", role: "Data Engineer",
           bio: "Karim works with Python and databases every day, building data pipelines and teaching beginners to think in code." },
};

const COURSES = {
  "web-dev": {
    title: "Web Development Bootcamp", category: "web", tag: "Web", grad: "g1", icon: "bi-code-slash",
    level: "Beginner", hours: 40, rating: 4.9, students: 1240, price: 49, oldPrice: 89, instructor: "sara",
    badge: "Bestseller",
    desc: "Go from zero to building complete, responsive websites with HTML, CSS, Bootstrap and JavaScript.",
    learn: ["Structure pages with HTML5", "Style with Flexbox and Grid", "Build fast layouts with Bootstrap",
            "Add interactivity with JavaScript", "Make any site fully responsive", "Deploy your website online"],
    about: "This bootcamp takes you step by step from your first HTML tag to a deployed, responsive website. Every module mixes short videos with hands-on exercises, and you finish by building a full project for your portfolio.",
    modules: [
      ["HTML Fundamentals", ["Page structure", "Text, links and images", "Forms and tables"]],
      ["CSS Styling", ["Selectors and the box model", "Flexbox and Grid", "Responsive design"]],
      ["Bootstrap 5", ["The grid system", "Components", "Build a landing page"]],
      ["JavaScript Basics", ["Variables and functions", "DOM manipulation", "Events"]],
      ["Final Project", ["Plan your site", "Build and style it", "Deploy it online"]],
    ],
  },
  "react": {
    title: "React from Zero", category: "web", tag: "Web", grad: "g2", icon: "bi-filetype-jsx",
    level: "Intermediate", hours: 24, rating: 4.8, students: 860, price: 39, oldPrice: 69, instructor: "omar",
    badge: "Popular",
    desc: "Learn modern React with hooks and components, and build fast, interactive single-page apps.",
    learn: ["Think in components", "Manage state with hooks", "Handle forms and events",
            "Fetch data from APIs", "Add routing with React Router", "Deploy a React app"],
    about: "Starting from plain JavaScript, you'll learn how React works under the hood and build three real apps along the way, ending with a complete project you can show off.",
    modules: [
      ["React Foundations", ["JSX and components", "Props", "Rendering lists"]],
      ["State and Hooks", ["useState", "useEffect", "Custom hooks"]],
      ["Working with Data", ["Fetching from APIs", "Loading and errors", "Forms"]],
      ["Routing", ["React Router basics", "Dynamic routes", "Protected pages"]],
      ["Final Project", ["Plan the app", "Build it", "Deploy it"]],
    ],
  },
  "node": {
    title: "Node.js & Express APIs", category: "web", tag: "Web", grad: "g3", icon: "bi-hdd-network",
    level: "Intermediate", hours: 20, rating: 4.7, students: 640, price: 39, oldPrice: 69, instructor: "omar",
    badge: "Back-end",
    desc: "Build secure, fast REST APIs with Node.js, Express and a real database.",
    learn: ["Understand how Node.js works", "Create routes with Express", "Connect to a database",
            "Add authentication", "Validate and handle errors", "Deploy your API"],
    about: "You'll build a complete back end from scratch, learning the patterns real teams use to keep APIs clean, secure and easy to maintain.",
    modules: [
      ["Node.js Basics", ["Modules and npm", "The event loop", "Working with files"]],
      ["Express", ["Routing", "Middleware", "Error handling"]],
      ["Databases", ["Connecting a database", "CRUD operations", "Relationships"]],
      ["Authentication", ["Passwords and hashing", "JSON Web Tokens", "Protecting routes"]],
      ["Final Project", ["Design the API", "Build it", "Deploy it"]],
    ],
  },
  "flutter": {
    title: "Flutter Mobile Apps", category: "mobile", tag: "Mobile", grad: "g4", icon: "bi-phone",
    level: "Beginner", hours: 30, rating: 4.9, students: 910, price: 45, oldPrice: 79, instructor: "lina",
    badge: "Top rated",
    desc: "Build beautiful iOS and Android apps from a single codebase with Flutter and Dart.",
    learn: ["Write Dart with confidence", "Build layouts with widgets", "Navigate between screens",
            "Manage app state", "Connect to online data", "Publish to the app stores"],
    about: "No mobile experience needed. You'll learn Dart and Flutter by building real apps, finishing with a polished project ready for your phone.",
    modules: [
      ["Dart Basics", ["Variables and types", "Functions", "Classes"]],
      ["Widgets and Layouts", ["Rows and columns", "Lists", "Styling"]],
      ["Navigation", ["Screens and routes", "Passing data", "Bottom navigation"]],
      ["State and Data", ["setState", "Provider", "Fetching from APIs"]],
      ["Final Project", ["Design the app", "Build it", "Publish it"]],
    ],
  },
  "python": {
    title: "Python Programming", category: "data", tag: "Data", grad: "g5", icon: "bi-filetype-py",
    level: "Beginner", hours: 18, rating: 4.8, students: 1530, price: 29, oldPrice: 59, instructor: "karim",
    badge: "Beginner friendly",
    desc: "Learn to code with Python, the friendliest and most in-demand programming language.",
    learn: ["Write clean Python code", "Use lists, dictionaries and loops", "Write your own functions",
            "Work with files", "Handle errors", "Automate everyday tasks"],
    about: "The perfect first programming course. Short lessons and lots of practice take you from your first line of code to writing useful scripts.",
    modules: [
      ["Getting Started", ["Installing Python", "Your first program", "Variables"]],
      ["Control Flow", ["Conditions", "Loops", "Practice problems"]],
      ["Data Structures", ["Lists", "Dictionaries", "Sets and tuples"]],
      ["Functions and Files", ["Writing functions", "Reading files", "Error handling"]],
      ["Final Project", ["Plan a script", "Build it", "Share it"]],
    ],
  },
  "uiux": {
    title: "UI/UX Design Basics", category: "design", tag: "Design", grad: "g6", icon: "bi-palette",
    level: "Beginner", hours: 15, rating: 4.7, students: 720, price: 29, oldPrice: 59, instructor: "lina",
    badge: "Creative",
    desc: "Design clean, user-friendly interfaces and learn the process behind great digital products.",
    learn: ["Understand your users", "Create wireframes", "Use color and typography",
            "Design in Figma", "Build interactive prototypes", "Test and improve designs"],
    about: "Learn the full design process, from research to a clickable prototype, and finish with a case study for your portfolio.",
    modules: [
      ["Design Thinking", ["What is UX?", "User research", "Personas"]],
      ["Wireframing", ["Sketching ideas", "Low-fidelity wireframes", "User flows"]],
      ["Visual Design", ["Color", "Typography", "Layout and spacing"]],
      ["Figma", ["Frames and components", "Auto layout", "Prototyping"]],
      ["Final Project", ["Pick a problem", "Design the solution", "Present it"]],
    ],
  },
  "sql": {
    title: "Databases & SQL", category: "data", tag: "Data", grad: "g7", icon: "bi-database",
    level: "Beginner", hours: 16, rating: 4.6, students: 580, price: 29, oldPrice: 59, instructor: "karim",
    badge: "Essential",
    desc: "Store, query and analyze data with SQL, a must-have skill for any developer or analyst.",
    learn: ["Design a database", "Write SELECT queries", "Filter and sort data",
            "Join multiple tables", "Group and summarize data", "Insert, update and delete safely"],
    about: "Using real-world datasets, you'll learn to ask questions of your data and get answers fast with SQL.",
    modules: [
      ["Database Basics", ["Tables and rows", "Data types", "Keys"]],
      ["Querying", ["SELECT", "WHERE", "ORDER BY"]],
      ["Joins", ["INNER JOIN", "LEFT JOIN", "Combining tables"]],
      ["Analysis", ["GROUP BY", "Aggregates", "Subqueries"]],
      ["Final Project", ["Design a database", "Fill it with data", "Answer questions"]],
    ],
  },
  "security": {
    title: "Cybersecurity Essentials", category: "security", tag: "Security", grad: "g8", icon: "bi-shield-lock",
    level: "Intermediate", hours: 22, rating: 4.9, students: 690, price: 45, oldPrice: 79, instructor: "sara",
    badge: "In demand",
    desc: "Learn how attacks work and how to defend websites, networks and data against them.",
    learn: ["Understand common threats", "Secure web applications", "Protect networks",
            "Use encryption correctly", "Manage passwords and access", "Respond to incidents"],
    about: "A practical introduction to defensive security. You'll learn to think like an attacker so you can build and protect safer systems.",
    modules: [
      ["Security Basics", ["The CIA triad", "Threats and risks", "Security mindset"]],
      ["Web Security", ["Common vulnerabilities", "Input validation", "Secure sessions"]],
      ["Networks", ["How networks work", "Firewalls", "Secure connections"]],
      ["Cryptography", ["Hashing", "Encryption", "Certificates"]],
      ["Final Project", ["Audit a demo app", "Fix the issues", "Write a report"]],
    ],
  },
};

// ---------- Fill in the course details page ----------
(function renderCourseDetails() {
  const titleEl = document.getElementById("cd-title");
  if (!titleEl) return; // not on the details page

  const id = new URLSearchParams(location.search).get("id");
  const key = COURSES[id] ? id : "web-dev";
  const c = COURSES[key];
  const inst = INSTRUCTORS[c.instructor];
  const $ = (sel) => document.getElementById(sel);

  // Split title so the last word gets the gradient
  const words = c.title.split(" ");
  const last = words.pop();

  document.title = `${c.title} | Learnova`;
  $("cd-crumb").textContent = c.title;
  $("cd-pill").innerHTML = `<span class="dot"></span> ${c.badge} &middot; ${c.level}`;
  titleEl.innerHTML = `${words.join(" ")} <span class="grad-text">${last}</span>`;
  $("cd-desc").textContent = c.desc;
  $("cd-stats").innerHTML = `
    <span><i class="bi bi-star-fill text-warning"></i> ${c.rating} rating</span>
    <span><i class="bi bi-people"></i> ${c.students.toLocaleString()} students</span>
    <span><i class="bi bi-clock"></i> ${c.hours} hours</span>
    <span><i class="bi bi-person"></i> ${inst.name}</span>`;

  $("cd-learn").innerHTML = c.learn.map((item) => `
    <div class="col-md-6"><div class="d-flex gap-2">
      <i class="bi bi-check-circle-fill" style="color: var(--cyan)"></i><span>${item}</span>
    </div></div>`).join("");
  $("cd-about").textContent = c.about;

  $("curriculum").innerHTML = c.modules.map(([name, lessons], i) => `
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#m${i}">
          <span class="me-3 text-muted-c">${String(i + 1).padStart(2, "0")}</span> ${name}
        </button>
      </h2>
      <div id="m${i}" class="accordion-collapse collapse ${i ? "" : "show"}" data-bs-parent="#curriculum">
        ${lessons.map((l) => `<div class="lesson"><span><i class="bi bi-play-circle me-2" style="color: var(--cyan)"></i>${l}</span><span class="text-muted-c">15 min</span></div>`).join("")}
      </div>
    </div>`).join("");

  $("cd-inst").innerHTML = `
    <div class="team-avatar ${inst.grad} m-0">${inst.initials}</div>
    <div class="flex-grow-1" style="min-width: 220px;">
      <h4 class="mb-1">${inst.name}</h4>
      <p class="mb-2" style="color: var(--cyan)">${inst.role}</p>
      <p class="text-muted-c mb-0">${inst.bio}</p>
    </div>`;

  $("cd-thumb").className = `course-thumb ${c.grad} mb-3`;
  $("cd-thumb").innerHTML = `<i class="bi ${c.icon}"></i>`;
  const off = Math.round((1 - c.price / c.oldPrice) * 100);
  $("cd-price").innerHTML = `
    <span class="display-6 fw-bold">$${c.price}</span>
    <del class="text-muted-c">$${c.oldPrice}</del>
    <span class="pill ms-auto">-${off}%</span>`;
  $("cd-hours").innerHTML = `<i class="bi bi-camera-video me-2"></i>${c.hours} hours of video`;
  $("cd-modal-title").innerHTML = `Join <span class="grad-text">${c.title}</span>`;
  $("cd-course-id").value = key; // registration.html adds this course to the selection
  $("cd-register").href = `registration.html?course=${key}`;

  // "You might also like": same category first, then others
  const others = Object.keys(COURSES).filter((k) => k !== key);
  others.sort((a, b) => (COURSES[b].category === c.category) - (COURSES[a].category === c.category));
  $("cd-related").innerHTML = others.slice(0, 3).map((k, i) => courseCard(k, i)).join("");
})();

function courseCard(key, i) {
  const c = COURSES[key];
  return `
    <div class="col-sm-6 col-lg-4 course-item reveal delay-${i}" data-category="${c.category}">
      <a href="course-details.html?id=${key}" class="glass course-card text-reset">
        <div class="course-thumb ${c.grad}">
          <span class="tag">${c.tag}</span>
          <span class="rating"><i class="bi bi-star-fill text-warning"></i> ${c.rating}</span>
          <i class="bi ${c.icon}"></i>
        </div>
        <div class="course-body">
          <div class="course-meta mb-2"><span><i class="bi bi-bar-chart"></i> ${c.level}</span><span><i class="bi bi-clock"></i> ${c.hours}h</span></div>
          <h5 class="fs-6 mb-1">${c.title}</h5>
          <p class="small text-muted-c mb-3">by ${INSTRUCTORS[c.instructor].name}</p>
          <div class="d-flex justify-content-between align-items-center mt-auto">
            <span class="price">$${c.price}</span>
            <span class="arrow-btn"><i class="bi bi-arrow-right"></i></span>
          </div>
        </div>
      </a>
    </div>`;
}
