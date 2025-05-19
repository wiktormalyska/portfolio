import { useQuery } from '@tanstack/react-query';
import {PortfolioProjectDto} from "../dtos/PortfolioProjectDto.tsx";

const API_URL = import.meta.env.VITE_PORTFOLIO_PROJECTS_API_URL as string

export const usePortfolioProjects = (username : string) => {
    return useQuery<PortfolioProjectDto[]>({
        queryKey: ['portfolioProjects'],
        queryFn: async () => {
            const response = await fetch(`${API_URL}/meta/getAll/${username}`);
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        }
    })
}