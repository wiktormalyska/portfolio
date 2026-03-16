export interface PortfolioProjectDto {
    gitHubRepositoryId: number,
    repositoryUrl: string,
    websiteUrl?: string,
    homepageUrl?: string,
    liveUrl?: string,
    name: string,
    description: string,
    imageUrl: string,
    technologies: string[],
    forked: boolean
}