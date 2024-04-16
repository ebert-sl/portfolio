async function fetchProfileData() {
  const url = "https://raw.githubusercontent.com/ebert-sl/portfolio/main/data/profile.json"
  const fetching = await fetch(url)
  return fetching.json()
}