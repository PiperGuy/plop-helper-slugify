## 💧 plop-helper-slugify

<a href="https://npmjs.com/package/plop-helper-slugify">
    <img alt="npm" src="https://img.shields.io/npm/v/@piperguy/plop-helper-slugify.svg?style=flat-square">
</a>

<a href="https://npmjs.com/package/plop-helper-slugify">
    <img alt="npm" src="https://img.shields.io/npm/dt/@piperguy/plop-helper-slugify?style=flat-square">
</a>

_A [plop][plop] helper that slugifies text._

### 📦 Installation

This package is installable from [npm][npm].

```bash
npm install --save-dev @piperguy/plop-helper-slugify
```

### 🥑 Usage

Before you can use the `plop-pack`, you have to load it into the `plop` object.

```javascript
plop.load("@piperguy/plop-helper-slugify")
```

Once loaded, you now have access the following helpers.

#### `slugify`

Creates a slug for any input text.

**input**

```javascript
{
    title: "This Is An Example Slug"
}
```

**helper**

```handlebars
{{slug title}}
```

**output**

```javascript
"this-is-an-example-slug"
```

### ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]

[plop]: https://plopjs.com
[npm]: https://npmjs.com
[piperguy]: https://piperguy.github.io
[issues]: https://github.com/piperguy/plop-helper-slugify/issues
[twitter]: https://twitter.com/_PiperGuy_
