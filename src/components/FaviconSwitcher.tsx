import { useEffect } from "react";

export default function FaviconSwitcher() {
    useEffect(() => {
        const link =
            document.querySelector<HTMLLinkElement>("link[rel='icon']") ??
            document.createElement("link");
        link.rel = "icon";
        link.type = "image/svg+xml";

        const apply = (dark: boolean) => {
            link.href = dark ? "/favicon-dark.svg" : "/favicon-light.svg";
            document.head.appendChild(link);
        };

        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        apply(mq.matches);

        const handler = (e: MediaQueryListEvent) => apply(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    return null;
}