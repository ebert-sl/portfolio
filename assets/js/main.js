function updateProfileData(profileData) {
  const photo = document.getElementById("profile-photo")
  photo.src = profileData.photo
  photo.alt = "Foto de " + profileData.name

  const name = document.getElementById("profile-name")
  name.innerText = profileData.name

  const job = document.getElementById("profile-job")
  job.innerText = profileData.job

  const local = document.getElementById("profile-local")
  local.innerText = profileData.location

  const email = document.getElementById("profile-email")
  email.innerText = profileData.email
  email.href = `mailto:${profileData.email}`
}

function updateLanguages(profileData) {
  const languages = document.getElementById("langs")
  languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join("")
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("soft-skills")
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join("")
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("hard-skills")
  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => 
    `<li><img src="${skill.logo}" alt="${skill.name}"></li>`).join("")
}

function updateEducation(profileData) {
  const education = document.getElementById("education")
  education.innerHTML = profileData.education.map(formation => 
  `<li>
    <h3>
      <a class="certificate" 
      href="${formation.url} target="_blank">
        ${formation.name}</a>
    </h3>
    <p class="local-date">${formation.local} - ${formation.date}</p>
  </li>
  `).join("")
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("portfolio")
  portfolio.innerHTML = profileData.portfolio.map(project => 
  `<li>
    <h3 class="project-title ${project.github ? 'github' : ''}">${project.name}</h3>
    <a href="${project.url}">${project.url}</a>
   </li>
  `).join("")
}

(async () => {
  const profileData = await fetchProfileData()
  updateProfileData(profileData)
  updateLanguages(profileData)
  updateSoftSkills(profileData)
  updateHardSkills(profileData)
  updateEducation(profileData)
  updatePortfolio(profileData)
})()