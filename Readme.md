# SprintHouse Website

Sito web statico sviluppato con **Eleventy**, **TailwindCSS** e **i18n**, pronto per il deploy su **Netlify**.

---

## 🛠 Tecnologie

- [Eleventy](https://www.11ty.dev/) – Static Site Generator
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS
- [Nunjucks](https://mozilla.github.io/nunjucks/) – Template engine
- [Font Awesome](https://fontawesome.com/) – Icone
- [Netlify](https://www.netlify.com/) – Hosting e Continuous Deployment
- JSON per i18n e menu dinamico

---

## 📂 Struttura del progetto

src/
├─ _includes/ # Template parziali
├─ _data/ # Dati JSON (menu, i18n, partners, carousel)
├─ assets/ # Immagini, icone e CSS statici
├─ index.njk # Homepage
.eleventy.js # Configurazione Eleventy
package.json # Dipendenze e script
netlify.toml # Configurazione Netlify
dist/ # Build finale (generata)

## ⚡ Comandi principali

**Avviare il server in locale:**

```bash
npm install
npm run serve
```

** Build
npm run build


## 📄 Licenza

MIT License © Antonio Sonis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
