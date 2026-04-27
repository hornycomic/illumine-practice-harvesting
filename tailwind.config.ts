import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink: "#172033", line: "#d9e2ec", mist: "#f6f8fb", brand: "#256f78" } } }, plugins: [] };
export default config;
