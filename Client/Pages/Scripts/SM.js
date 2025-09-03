const experience = [
  { company: "Home Depot", year: 2025 },
  { company: "Forysth County Schools", year: 2023 },
  { company: "Forysth County Schools", year: 2022 },
];


experience.sort((a, b) => b.year - a.year);


const explist = document.getElementById("experience");

experience.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.company}, ${item.year}`;
  explist.appendChild(li);
});
