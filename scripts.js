const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')




function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {
        myLi += `
        <li>  
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price}</p>
            </li>  
    `

    })

    list.innerHTML = myLi

}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,   // ESSA FUNÇÃO CHAMA-SE SPREAD OPERATOR(pega todo o array do product e joga aqui, sem alteração)
        price: product.price * 0.9,   // dar 10% de desconto


    }))

    showAll(newPrices)

}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
        
    <li>  
      <p> O valor total dos itens é R$ ${totalValue}</p>
            </li>  
     `
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)



