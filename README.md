React Fouter
==================

Functional and performant React router.

## Installation

```sh
npm i react-fouter
```

## Usage

Use this router like this.

```tsx
function App() {
  const [{ pathname }, setPath] = usePath()
  return <>
    {route(pathname, (extract) => {
      pipe(extract('/'), some(() => <HomePage />)) ??
      pipe(extract('/about'), some(element(AboutPage))) ??
      pipe(extract('/posts/:id'), some((props) => <PostPage {...props} />)) ??
      pipe(extract('/file/*path'), some((props) => <Download file={props.path}>)) ??
      <NotFound />
    })}
  </>
}
```
