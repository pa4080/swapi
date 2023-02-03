# SWAPI Search App with ReactJs and TypeScript

SWAPI (Star Wars API) Search App with ReactJs and Typescript Exercise.

## Resources

- [Star Wars API](https://swapi.dev/)
- [Star Wars Font](https://fontmeme.com/fonts/star-jedi-font/)
- [Font Converter](https://cloudconvert.com/ttf-converter)

## Setup the Project

<details>

### Install ReactJs and Typescript by [Vite](https://vitejs.dev/guide/why.html)

```bash
npm create vite@latest
# ✔ Project name: … exc-ts-react-star-wars
# ✔ Select a framework: › React
# ✔ Select a variant: › TypeScript
cd exc-ts-react-star-wars/
npm install
```

- Create start command in [`package.json`](package.json) file as follows:

  ```json
  "scripts": {
      "start": "vite --host 0.0.0.0 --port 3000",
  }
  ```

- Clean the `src/` and `public/` directories and start working on the project.

### Install helpers: TailwindCSS and so on

```bash
npm i --save-dev tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```bash
npm i @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
npm i @headlessui/react
npm i react-icons
npm i @heroicons/react
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
git remote add origin git@github.com:metalevel-tech/exc-ts-react-star-wars.git
git push -u origin master
```

### Automation with GitHub Actions

- [Deploy to GitHub Pages and Automate with GitHub Actions](https://github.com/metalevel-tech/exc-js-react-tic-tac-toe#deploy-to-github-pages-with-github-actions)

</details>
