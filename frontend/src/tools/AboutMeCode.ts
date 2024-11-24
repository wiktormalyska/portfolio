
export const AboutMeCode = async (fileName: string): Promise<string> => {

    const response = await fetch(`/${fileName}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    return await response.text();
};
