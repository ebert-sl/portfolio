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

(async () => {
  const profileData = await fetchProfileData()
  updateProfileData(profileData)
})()