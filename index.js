const cats = ['Milo', 'Otis', 'Garfield']
// const newCats = cats.slice()

function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    return [...cats, name]
}

function prependCat(name) {
    return [name, ...cats]
}

// function removeLastCat() {
//     const newCats = [...cats]
//     newCats.pop()
//     return newCats
// }

function removeLastCat() {
    return cats.slice(0, cats.length - 1)
}

function removeFirstCat() {
    const newCats = [...cats]
    newCats.shift()
    return newCats
}

// console.log(appendCat('kitty'))