async function getProjects() {
  try {
    const res = await fetch("projects.json");
    return await res.json();
  } catch (e) {
    // fallback if fetch blocked (file:// case)
    return [
      {
        name: "ExamPulse",
        desc: "A full-stack online examination platform.",
        image: "exampulse.png",
        category: "mern",
        links: {
          view: "https://exampulse-y3os.onrender.com/",
          code: "https://github.com/JEETJM/ExamPulse.git"
        }
      },
      {
        name: "Online Exam System",
        desc: "Students can take exams and view results.",
        image: "online-exam-system.png",
        category: "mern",
        links: {
          view: "https://online-exam-system-202c.onrender.com/",
          code: "https://github.com/JEETJM/online-exam-system.git"
        }
      },
      {
        name: "Zenvyra",
        desc: "Property listing web app.",
        image: "zenvyra.png",
        category: "mern",
        links: {
          view: "https://zenvyra-app.onrender.com/",
          code: "https://github.com/JEETJM/zenvyra.git"
        }
      }
    ];
  }
}

function showProjects(projects) {
  const container = document.querySelector(".box-container");

  container.innerHTML = projects.map(p => `
    <div class="box">
      <img 
        src="images/${p.image}" 
        alt="${p.name}" 
        draggable="false"
        onerror="this.style.border='2px solid red'"
      />

      <h3>${p.name}</h3>
      <p>${p.desc}</p>

      <div class="btns">
        <a href="${p.links.view}" target="_blank">View</a>
        <a href="${p.links.code}" target="_blank">Code</a>
      </div>
    </div>
  `).join("");
}

getProjects().then(showProjects);