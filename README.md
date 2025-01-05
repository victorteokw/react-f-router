React Clean Router
==================

Tiniest react router which is clean.

## Installation

```sh
npm i react-clean-router
```

## Usage

Use this router like this.

```ts
function App() {
  const [{ pathname }, setPath] = usePath()
  return <>
    {route(pathname, (match) => {
      if (match('/')) {
        return <HomePage />
      } else if ()
    })}
  </>
}
```
