import { useQuery } from '@tanstack/react-query';
import { PortfolioProjectDto } from "../dtos/PortfolioProjectDto.tsx";

const API_BASE_URL = (import.meta.env.VITE_BACKEND_URL as string | undefined)?.replace(/\/$/, "") ?? "";

export const usePortfolioProjects = (username?: string) => {
    return useQuery<PortfolioProjectDto[]>({
        queryKey: ['portfolioProjects', username ?? null],
        queryFn: async () => {
            const usernamePath = username ? `/${encodeURIComponent(username)}` : "";
            const url = `${API_BASE_URL}/api/projects${usernamePath}`;

            const response = await fetch(url);
            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(`Request failed (${response.status}) for ${url}: ${errorBody || response.statusText}`);
            }

            return response.json() as Promise<PortfolioProjectDto[]>;
        }
    });
};
