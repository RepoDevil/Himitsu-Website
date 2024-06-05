import { Octokit } from '@octokit/rest'
import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'

const octokit = new Octokit()

type GitHubReleaseList = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.listReleases>

async function data(): Promise<GitHubReleaseList> {
    const releases = await octokit.paginate(octokit.repos.listReleases, {
      owner: 'RepoDevil',
      repo: 'Himitsu',
      per_page: 100,
    })

    return releases
}
export { data }