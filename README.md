# [![SWAPI Search App with ReactJs and TypeScript](src/assets/images/repo-cover-swapi.metalevel.tech.webp)](https://swapi.metalevel.tech/)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/78cf93fb0111435590e60a0e75ed9918)](https://www.codacy.com/gh/metalevel-tech/prj-ts-react-swapi/dashboard?utm_source=github.com&utm_medium=referral&utm_content=metalevel-tech/prj-ts-react-swapi&utm_campaign=Badge_Grade)

**_SWAPI Search App with ReactJs and TypeScript._**

## Resources and referens

- [Star Wars API](https://swapi.dev/)

- [Star Wars API Alternative](https://swapi.py4e.com/about) provided by Dr. Charles R. Severance. Currently in use because is much faster, up to date than the official one and also provides much correct information.

- Related:

  - [SW Guide Site](https://starwars-visualguide.com/)
  - [SW Guide GitHub](https://github.com/tbone849/star-wars-guide/tree/master/build/assets/img)
  - [SWAPI Json Server GitHub](https://github.com/johnlindquist/swapi-json-server/tree/master/public)

  - <https://starwars.fandom.com/wiki/Obi-Wan_Kenobi_(television_series)>

- [Star Jedi Font](https://www.dafont.com/star-jedi.font)

- [Font Converter](https://cloudconvert.com/ttf-converter)

- [`UseHooks-TS`](https://usehooks-ts.com/) a React hooks library, ready to use, written in typescript.

## Project setup

Clone the repository, then install the dependencies and start the development server.

```bash
npm install
npm start
```

The rest of the commands are available in the [`package.json`](package.json) file. See also the [`.github/workflows/workflow.yml`](.github/workflows/workflow.yml) file for the GitHub Actions workflow.

<details>

<summary> Initial setup of project </summary>

### Install ReactJs and Typescript by [Vite](https://vitejs.dev/guide/why.html)

```bash
npm create vite@latest
# ✔ Project name: … prj-ts-react-swapi
# ✔ Select a framework: › React
# ✔ Select a variant: › TypeScript
cd prj-ts-react-swapi/
npm install
npm i react-router-dom axios dompurify @types/dompurify
npm i usehooks-ts
npm i @react-hook/media-query
```

- Create start command in [`package.json`](package.json) file as follows:

  ```json
  "scripts": {
      "start": "vite --host 0.0.0.0 --port 3000",
  }
  ```

- Note I need to access the app from other devices on the same network to test it on Mobile, Hackintosh, Windows etc. This is also very useful option when you are using WSL2, otherwise you may need to [export the port manually](https://github.com/metalevel-tech/exc-js-homework/tree/master/scripts).

- Clean the `src/` and `public/` directories and start working on the project.

### Install other packages

```bash
npm i --save-dev tailwindcss postcss autoprefixer postcss-import
npx tailwindcss init -p
```

```bash
npm i @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
npm i @headlessui/react
npm i @heroicons/react
npm i react-icons
```

**References:**

- <https://tailwindui.com/>
- <https://react-icons.github.io/react-icons/>
- <https://headlessui.com/>
- <https://heroicons.com/>

### Setup the Git Repository and Push to GitHub

```bash
# git config --global init.defaultBranch master
git init
git add -A
git commit -m "Initial commit"
git branch -M master
git remote add origin git@github.com:metalevel-tech/prj-ts-react-swapi.git
git push -u origin master
```

### Automation with GitHub Actions

- [Deploy to GitHub Pages and Automate with GitHub Actions](https://github.com/metalevel-tech/exc-js-react-tic-tac-toe#deploy-to-github-pages-with-github-actions)

- [Deploying by `gh-pages` seems to overwrite custom domain](https://github.com/tschaub/gh-pages/issues/213) | [`gh-pages -d dist` overwrites custom domain](https://github.com/tschaub/gh-pages/issues/127)

- [Vite: Building for production](https://vitejs.dev/guide/build.html#public-base-path)

</details>

## Shell helpers

PNG > WebP conversion:

```bash
FILE="Input_image.png"
convert "$FILE" -quality 80 -strip -define webp:lossless=true -define webp:method=4 "${FILE%.*}_80.webp"
convert "$FILE" -quality 70 -strip -define webp:lossless=false -define webp:method=4 "${FILE%.*}_70.webp"
```

SVG > ICO conversion:

```bash
FILE="Input_image.svg"
convert -background transparent "$FILE" -clone 0 -resize 32x32  favicon.ico
```
