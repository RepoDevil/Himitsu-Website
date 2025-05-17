import axios from 'axios'

interface GitHubRelease {
  url: string
  assets_url: string
  upload_url: string
  html_url: string
  id: number
  author: {
    login: string
    id: number
    //...
  }
  //...
}

export interface AppRelease {
  stable: GitHubRelease
  beta: GitHubRelease
}

async function data(): Promise<AppRelease> {
  const stableResponse = await axios.get<GitHubRelease>(
    `https://api.github.com/repos/RepoDevil/Himitsu/releases/latest`
  )

  const betaResponse = await axios.get<GitHubRelease>(
    `https://api.github.com/repos/RepoDevil/Himitsu/releases/latest`
  )

  return {
    stable: stableResponse.data,
    beta: betaResponse.data,
  }
}

export { data }