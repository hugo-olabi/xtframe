# Getting Started

Xtify are simple minimalistic framework, focused on serverless and static website, like Github Pages. Allowing complex things like routes, just using client side, making everything seems more direct and simple.

Xtify translate HTML Elements into shortcuts functions setting attributes and children from a simple function with html-like:

<table>
<tr>
<th>Xtify</th>
<th>Vanilla</th>
</tr>
<tr>
<td>

```javascript
let el = div({id: "a", class: "highlighted"},
    "HIGHLIGHTED"
)
```
</td>
<td>

```javascript
let el = document.createElement("div");
el.id = "a";
el.classList.add("highlighted");
el.innerHTML = "HIGHLIGHTED";
```
</td>

</tr>
</table>

Let's compare a HTML and Xtify comparision:

<table>
<tr>
<th>Xtify</th>
<th>HTML</th>
</tr>
<tr>
<td>

```javascript
div({class: "helloWorld"},
    h1("Hello World"),
    p("This is a simple paragraph")
)
```
</td>
<td>

```html
<div class="helloWorld">
    <h1>Hello World</h1>
    <p>This is a simple paragraph</p>
</div>
```
</td>

</tr>
</table>