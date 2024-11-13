# Making Own Components
In Xtify don't have real components like of HTML, instead are a used only a render function which return a HTMLElement. Knowing that, we can use a simple function as components.

So, let's make a simple component. We start making a simple function:

```javascript
function helloWord(){
}
```

Now we can define our base element. **Remember every custom component are based on other element!**

In this case will be a **div**:

```javascript
function helloWord(){
    const el = div();
}
```

Now we need to return a HTMLElement to it be a functional component:

```javascript
function helloWord(){
    const el = div();

    return el;
}
```

You can start using it in your structure:

```javascript
div(
    h1("Look my custom component above:"),
    helloWord()
)
```


