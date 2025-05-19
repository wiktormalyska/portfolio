export interface PortfolioProjectDto {
    gitHubRepositoryId: number,
    repositoryUrl: string,
    name: string,
    description: string,
    imageUrl: string,
    technologies: string[],
    forked: boolean
}