## Setup

Install the dependencies:

```bash
yarn install
```

Copy and rename .env.local to .env then add variable to that

```
NUXT_PUBLIC_API_BASE=
```

- Install recommend extension: Prettier, Vue Language Features (Volar)
- Enable auto save
- Enable format when save

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

Chrome without cors, create folder in C:\chrometemp then:

```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir="C:\chrometemp"
```

## state naming

Name state like: use[Page name]Store
Ex: useHomeState, useUserState, useCartState

## alias import

```json
{
  "~~": `<rootDir>`,
  "@@": `<rootDir>`,
  "~": `<srcDir>`,
  "@": `<srcDir>`,
  "assets": `<srcDir>/assets`, // (unless you have set a custom `dir.assets`)
  "static": `<srcDir>/static` // (unless you have set a custom `dir.static`)
}
```
