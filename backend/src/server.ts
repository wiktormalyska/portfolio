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

// ─── Logger ───────────────────────────────────────────────────────────────────

const ts = () => new Date().toISOString();

const log = {
    info:  (msg: string) => console.log (`[${ts()}] ℹ  ${msg}`),
    ok:    (msg: string) => console.log (`[${ts()}] ✔  ${msg}`),
    warn:  (msg: string) => console.warn(`[${ts()}] ⚠  ${msg}`),
    error: (msg: string) => console.error(`[${ts()}] ✖  ${msg}`),
};

// ─── Request logger middleware ─────────────────────────────────────────────────

app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const ms = Date.now() - start;
        const level = res.statusCode >= 500 ? "error"
                    : res.statusCode >= 400 ? "warn"
                    : "ok";
        log[level](`${req.method} ${req.path} → ${res.statusCode} (${ms}ms)`);
    });
    next();
});

// ─── Routes ───────────────────────────────────────────────────────────────────

app.get("/health", (_req, res) => {
    const hasConfig = Boolean(API_KEY && API_BASE_URL);
    res.json({ ok: true, hasConfig });
});

const getProjects = async (username: string, res: express.Response) => {
    if (!API_KEY || !API_BASE_URL) {
        log.error("Missing PORTFOLIOAPI_KEY or API base URL in .env");
        return res.status(500).json({ error: "Missing PORTFOLIOAPI_KEY or API base URL in .env" });
    }

    const upstreamUrl = `${API_BASE_URL}/portfolio/getAll/${encodeURIComponent(username)}`;
    log.info(`Upstream → GET ${upstreamUrl}`);

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

        if (upstreamRes.ok) {
            log.ok(`Upstream ← ${upstreamRes.status} (${Array.isArray(body) ? body.length + " items" : "ok"})`);
        } else {
            log.warn(`Upstream ← ${upstreamRes.status} ${upstreamRes.statusText}`);
        }

        return res.status(upstreamRes.status).json(body);
    } catch (error) {
        const msg = error instanceof Error ? error.message : "Unknown error";
        log.error(`Upstream request failed: ${msg}`);
        return res.status(502).json({ error: "Upstream API failed", details: msg });
    }
};

app.get("/api/projects", async (_req, res) => {
    return getProjects(DEFAULT_USERNAME, res);
});

app.get("/api/projects/:username", async (req, res) => {
    return getProjects(req.params.username, res);
});

// ─── Start ────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
    log.info(`Backend listening on http://localhost:${PORT}`);
    log.info(`Default username : ${DEFAULT_USERNAME}`);
    log.info(`Upstream API     : ${API_BASE_URL ?? "⚠ NOT SET"}`);
    log.info(`API key          : ${API_KEY ? "✔ loaded" : "✖ MISSING"}`);
});