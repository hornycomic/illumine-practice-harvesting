import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink: "#172033", line: "#f1d36b", mist: "#fff8df", brand: "#c98a00", harvest: "#f5c400" } } }, plugins: [] };
export default config;
