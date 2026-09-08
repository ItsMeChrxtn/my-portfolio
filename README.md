# Christian Lloyd Del Rosario Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS, laid out as a social
profile: a cover, an avatar, an Intro sidebar, and a feed of posts — where the
content is a full CV and every detail is a link.

Tabs are driven by the URL hash (`#posts`, `#about`, `#projects`, `#experience`,
`#skills`, `#services`, `#contact`), so each one is shareable and works with the
browser back button.

## Where the content lives

All copy is data, not markup — edit these and the whole profile follows:

| File | Holds |
| --- | --- |
| `src/data/profile.js` | Name, headline, intro facts, contact rows, CV summary |
| `src/data/experience.js` | Work history |
| `src/data/education.js` | Degrees and certifications |
| `src/data/projects.js` | Projects, tech tags, repo and demo links |
| `src/data/skills.js` | Skill categories |
| `src/data/services.js`, `src/data/process.js` | Services offered and how the work runs |
| `src/data/feed.js` | Which of the above become posts, and in what order |
| `src/data/techColors.js` | The colour of each technology dot and tile |

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages Deployment

This project is ready for GitHub Pages through the workflow in `.github/workflows/deploy.yml`.

1. Push this project to a GitHub repository.
2. Go to the repository's `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to the `main` or `master` branch.
5. Open the repository's `Actions` tab and wait for `Deploy Portfolio to GitHub Pages` to finish.

After deployment, the portfolio will be available at:

```text
https://<your-github-username>.github.io/<repository-name>/
```

For example, if the repository is `my-portfolio` under `ItsMeChrxtn`, the link will be:

```text
https://ItsMeChrxtn.github.io/my-portfolio/
```
