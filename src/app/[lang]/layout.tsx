import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "../globals.css";
import { languages, profile, type Lang } from "@/content/data";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://oussemabhenni.github.io/portfolio").replace(/\/$/, "");

const meta = {
  fr: {
    title: "Oussema Benhenni — Ingénieur Cybersécurité & DevSecOps",
    description:
      "Portfolio d'Oussema Benhenni, ingénieur cybersécurité (M2 FSI, Aix-Marseille Université) : DevSecOps, SIEM Wazuh, Infrastructure as Code, tests d'intrusion.",
  },
  en: {
    title: "Oussema Benhenni — Cybersecurity & DevSecOps Engineer",
    description:
      "Portfolio of Oussema Benhenni, cybersecurity engineer (MSc, Aix-Marseille University): DevSecOps, Wazuh SIEM, Infrastructure as Code, penetration testing.",
  },
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const m = meta[(lang as Lang) in meta ? (lang as Lang) : "fr"];
  return {
    title: m.title,
    description: m.description,
    authors: [{ name: profile.name }],
    keywords: ["Oussema Benhenni", "Cybersécurité", "DevSecOps", "SOC", "Wazuh", "Terraform", "Ansible", "Pentest", "Marseille"],
    alternates: { canonical: `${SITE_URL}/${lang}/`, languages: { fr: `${SITE_URL}/fr/`, en: `${SITE_URL}/en/` } },
    openGraph: { title: m.title, description: m.description, type: "profile", url: `${SITE_URL}/${lang}/`, siteName: profile.name, locale: lang === "fr" ? "fr_FR" : "en_US" },
    twitter: { card: "summary", title: m.title, description: m.description },
  };
}

export const viewport: Viewport = { themeColor: "#07090c", width: "device-width", initialScale: 1 };

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  return (
    <html lang={lang}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
