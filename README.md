sct-loader
==========

Webpack loader for sct templates

### Install

```
npm install sct-runtime --save
npm install sct-loader --save-dev
```

### Config

```js

module.exports = {
    // ...

    module: {
        loaders: [
            {
                test: /\.sct$/,
                loader: 'sct'
            }
        ]
    }
};
```
