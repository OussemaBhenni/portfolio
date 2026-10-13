# Portfolio — Oussema Benhenni

Portfolio personnel bilingue (FR / EN) — Ingénieur Cybersécurité · DevSecOps & Sécurité Opérationnelle.

Built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS v4**. Fully static (SSG), no backend, no tracking.

## Sections

Hero (terminal card) · Profil · Expérience (Teamwill, ARA Consulting, Sopra Banking Software) · Projets techniques · Compétences · Formation & certifications · Contact

## Modifier le contenu

Tout le texte est dans **`src/content/data.ts`**, en français et en anglais. Aucun composant à toucher pour mettre à jour une expérience, un projet ou une compétence.

Le CV téléchargeable est `public/CV-Oussema-Benhenni.pdf` — remplace le fichier en gardant le même nom.

## Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000/fr
npm run build    # export statique dans ./out
```

## Déploiement

**GitHub Pages (actif)** — le workflow `.github/workflows/static.yml` build le site et publie `./out` à chaque push sur `main`.
Prérequis une seule fois : *Settings → Pages → Source : GitHub Actions*.
URL : https://oussemabhenni.github.io/portfolio/

**Vercel (optionnel)** — importer le repo sur [vercel.com/new](https://vercel.com/new), sans configuration ; `vercel.json` redirige `/` vers `/fr/`.

## Structure

```
src/
├── app/
│   ├── [lang]/layout.tsx   # <html lang>, metadata SEO par langue
│   ├── [lang]/page.tsx     # toutes les sections
│   ├── globals.css         # thème (couleurs, polices, animations)
│   └── icon.svg            # favicon
├── components/             # Nav, Reveal (animations au scroll), UI
└── content/data.ts         # ← contenu FR / EN
```

## Contact

- Email : oussemabenhenni1@gmail.com
- LinkedIn : [linkedin.com/in/oussemabenhenni](https://www.linkedin.com/in/oussemabenhenni)
- GitHub : [@OussemaBhenni](https://github.com/OussemaBhenni)
