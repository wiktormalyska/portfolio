import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = Number(process.env.PORT || 3001);
const API_KEY = process.env.PORTFOLIOAPI_KEY;
const API_BASE_URL = process.env.API_BASE_URL || process.env.PORTFOLIOAPI_URL;
const DEFAULT_USERNAME = process.env.API_USERNAME || "wiktormalyska";

app.get("/health", (_req, res) => {
    const hasConfig = Boolean(API_KEY && API_BASE_URL);
    res.json({ ok: true, hasConfig });
});

const getProjects = async (username: string, res: express.Response) => {
    if (!API_KEY || !API_BASE_URL) {
        return res.status(500).json({ error: "Missing PORTFOLIOAPI_KEY or API base URL in .env" });
    }

    const upstreamUrl = `${API_BASE_URL}/portfolio/getAll/${encodeURIComponent(username)}`;

    try {
        const upstreamRes = await fetch(upstreamUrl, {
            headers: {
                "X-API-KEY": API_KEY,
                Accept: "application/json",
            },
        });

        const rawBody = await upstreamRes.text();
        const contentType = upstreamRes.headers.get("content-type") || "";
        const isJson = contentType.includes("application/json");
        const body = isJson && rawBody ? JSON.parse(rawBody) : { message: rawBody };

        return res.status(upstreamRes.status).json(body);
    } catch (error) {
        return res.status(502).json({
            error: "Upstream API failed",
            details: error instanceof Error ? error.message : "Unknown error",
        });
    }
};

app.get("/api/projects", async (_req, res) => {
    return getProjects(DEFAULT_USERNAME, res);
});

app.get("/api/projects/:username", async (req, res) => {
    return getProjects(req.params.username, res);
});

app.listen(PORT, () => {
    console.log(`Backend listening on http://localhost:${PORT}`);
});