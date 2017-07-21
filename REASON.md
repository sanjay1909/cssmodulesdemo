# **`Why we require to use CSS as module in JS?`**

- Load CSS as our application needed.
- **For Example:** Say you loaded button.css only through button.js. This would mean if button.js is never actually used, its **CSS wouldn’t bloat** out our production build.

# **`What loaders we need and Why?`**

webpack can only understand JavaScript, so we need .css file loader.
- style-loader
- css-loader

# **`How do we tell webpack?`**

we add a rule to **webpack.config.js**
```
{
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
}
```

# **`Why do we need style-loader?`**

- CSS-loader will load the CSS file for webpack. But CSS will work when its injected in html
- style-loader manually writes your styles to the <head>.

# **`How webpack knows to use style or css loader first?`**
Loaders are processed in reverse array order. That means css-loader will run before style-loader
