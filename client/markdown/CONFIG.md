## **Loader Config to help webpack import CSS in JS**

```
module: {
        test: /\.css$/, 
        use: [
                'style-loader', 
                'css-loader'
            ]
    }
```

## **Options for CSS-Loader to create local css name**

```
module: {
        use: [
            'style-loader', 
            {
                loader: 'css-loader', 
                options: { modules: true }, 
            }
        ]
    }
```