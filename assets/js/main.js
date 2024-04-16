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

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("soft-skills")
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join("")
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("hard-skills")
  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => 
    `<li><img src="${skill.logo}" alt="${skill.name}"></li>`).join("")
}

(async () => {
  const profileData = await fetchProfileData()
  updateProfileData(profileData)
  updateSoftSkills(profileData)
  updateHardSkills(profileData)
})()