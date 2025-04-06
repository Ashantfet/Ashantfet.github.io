const projectDetails = [
  {
    title: "Distributed HDFS & MapReduce",
    body: "Set up multi-node HDFS cluster, ran word count using custom MapReduce scripts. Built directory hierarchy with fault-tolerant setup and CLI experiments.",
  },
  {
    title: "ZooKeeper Ensemble",
    body: "Configured and deployed 3-node ZooKeeper cluster. Demonstrated leader election, dynamic configuration, failover testing, and service registration.",
  },
  {
    title: "Branch Predictor (ChampSim)",
    body: "Developed a hybrid branch predictor based on TAGE + bimodal. Evaluated using CBP2025 traces. Reported accuracy, MPKI, IPC in IEEE 2-column format.",
  },
  {
    title: "AI Search Algorithms",
    body: "Implemented and benchmarked A*, Hill Climbing, Simulated Annealing, and Branch & Bound on TSP, AntMaze, FrozenLake. Metrics include time, reward, convergence point.",
  },
  {
    title: "DL Mentoring Projects",
    body: "Mentored student teams on deep learning projects (BTP/MTP), reviewing proposals, suggesting metrics, LaTeX formatting, and presentation polish.",
  },
];

function openModal(index) {
  document.getElementById("modal-title").innerText =
    projectDetails[index].title;
  document.getElementById("modal-body").innerText = projectDetails[index].body;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(category) ? "block" : "none";
    }
  });
}

// DARK MODE
const toggle = document.getElementById("darkModeToggle");
const body = document.body;

// Load saved preference
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark");
  toggle.checked = true;
}

// Toggle listener
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("dark-mode", "disabled");
  }
});
// Save theme preference
// Reuse the existing 'toggle' variable declared earlier

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

if (toggle) {
  toggle.checked = body.classList.contains('dark');
  toggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });
}
