[nvm]: https://github.com/nvm-sh/nvm

# Example NextJS 9.3


## Installation

First, install `now` globally on your computer

```bash
npm i -g now
```

Then, make sure to run the correct version of node contained in `.nvmuse`.

```bash
nvm use
```

Finally, install the `node_modules`:

```bash
npm i 
```

## Development

As the project use Now env. variables, to startup a local server:

```bash
now dev
```

## Deploying

To deploy your branch on a preview link

```bash
now
```

To deploy on prod, merge with the `master` branch, or 

```bash
now --prod
```