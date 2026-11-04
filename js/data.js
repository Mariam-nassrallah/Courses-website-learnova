// ===== Learnova - registration data =====
// The same 8 courses as the rest of the site, with the extra
// information needed for registration: seats and weekly schedule.
// "seats" is the starting number of seats. Seats taken by saved
// registrations are subtracted in app.js.

const COURSES = [
  {
    id: "web-dev", title: "Web Development Bootcamp", category: "Web",
    icon: "bi-code-slash", gradient: "g1", level: "Beginner", price: 49,
    seats: 20, instructor: "Sara Haddad", days: ["Mon", "Wed"], time: "17:00",
  },
  {
    id: "react", title: "React from Zero", category: "Web",
    icon: "bi-filetype-jsx", gradient: "g2", level: "Intermediate", price: 39,
    seats: 5, instructor: "Omar Khalil", days: ["Tue", "Thu"], time: "18:00",
  },
  {
    id: "node", title: "Node.js & Express APIs", category: "Web",
    icon: "bi-hdd-network", gradient: "g3", level: "Intermediate", price: 39,
    seats: 12, instructor: "Omar Khalil", days: ["Sat"], time: "10:00",
  },
  {
    id: "flutter", title: "Flutter Mobile Apps", category: "Mobile",
    icon: "bi-phone", gradient: "g4", level: "Beginner", price: 45,
    seats: 3, instructor: "Lina Saab", days: ["Mon", "Wed"], time: "19:00",
  },
  {
    // Same days and time as "React from Zero", so the two conflict
    id: "python", title: "Python Programming", category: "Data",
    icon: "bi-filetype-py", gradient: "g5", level: "Beginner", price: 29,
    seats: 15, instructor: "Karim Nader", days: ["Tue", "Thu"], time: "18:00",
  },
  {
    id: "uiux", title: "UI/UX Design Basics", category: "Design",
    icon: "bi-palette", gradient: "g6", level: "Beginner", price: 29,
    seats: 10, instructor: "Lina Saab", days: ["Fri"], time: "16:00",
  },
  {
    id: "sql", title: "Databases & SQL", category: "Data",
    icon: "bi-database", gradient: "g7", level: "Beginner", price: 29,
    seats: 8, instructor: "Karim Nader", days: ["Sat"], time: "13:00",
  },
  {
    // Fully booked
    id: "security", title: "Cybersecurity Essentials", category: "Security",
    icon: "bi-shield-lock", gradient: "g8", level: "Intermediate", price: 45,
    seats: 0, instructor: "Sara Haddad", days: ["Sun"], time: "11:00",
  },
];

// Promo code -> percentage off
const PROMO_CODES = { LEARN10: 10, STUDENT20: 20 };

// Registration closes at midnight (local time) on this date
const DEADLINE = new Date("2026-12-01T00:00:00");
