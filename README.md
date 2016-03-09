# reaction

A minimalistic React + JSPM boilerplate.

## Workflow

* JSPM
  * Babel (with JSX support)
* Gulp
  * ~~JSCS~~ ESLint - Uses Airbnb Style preset.
  * BrowserSync


## Usage

**Clone the repository**
```bash
git clone https://github.com/iwatakeshi/reaction.git [name of app]
```

**Install the global version of JSPM and Gulp**

```bash
sudo npm i jspm gulp -g
```

**Install packages**

```bash
sudo npm i && jspm i
```

**Build and Watch**

```bash
gulp develop
```

## Notes

* Sometimes JSPM does not seem to build. In this case, remove the `jspm_packages` and run `jspm install`. If you have imported other components into `app.js`, then run `jspm depCache`.
