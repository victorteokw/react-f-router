React Clean Router
==================

## Installation

```sh
npm i react-clean-router
```
# Usage

## Route to specify Page base on Path `Router`
Router read the url path. Route declear the Page should be displayed base on the Path, if the Path is not decleared in <Route><Route />, <NotFound> can be used to set the default page.
```tsx
import { Router, Route, NotFound } from 'react-clean-router'


            <Router path={path}>
                <Route match = '/'>
                    <HomePage />
                </Route>
                <NotFound>
                    <NotFoundPage />
                </NotFound>
            </Router>
```
## Author

React Clean Router is authored by Victor Teo.

## License

MIT License

Copyright (c) 2021 Fillmula Inc.

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
