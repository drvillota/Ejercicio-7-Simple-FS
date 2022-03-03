const container = document.getElementById('container');
//const detail = document.getElementById('detail');
const fs = require('fs');

async function getData() {
    const data = fs.readFileSync('./datos/items.json');
    //const items = JSON.parse(data);

    console.log('result', data);
    return data;
}

async function render(){
    while (container.firstChild != null){
        container.removeChild(container.firstChild);
    }

    container.className = "container";
    const data = await getData();
    const row = document.createElement('div');
    row.className = 'row row-cols-lg-5 row-cols-3';

    const dataMapped = data.results.map((item) => {
        const div = document.createElement('div');
        div.className = 'col';
    
        const image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = item.picture;
        
        const body = document.createElement('div');
        body.className = 'card-body';
    
        const tittle = document.createElement('h5');
        tittle.textContent = item.tittle;
        tittle.className = 'card-title';
/* 
        const description = document.createElement('p');
        description.textContent = item.description;
        description.className = 'card-text';
        
        const id = document.createElement('p');
        id.textContent = item.id;
        id.className = 'card-text';

        const condition = document.createElement('p');
        condition.textContent = item.condition;
        condition.className = 'card-text';

        const shipping = document.createElement('p');
        shipping.textContent = item.free_shipping;
        shipping.className = 'card-text';

        const soldQuantity = document.createElement('p');
        soldQuantity.textContent = item.sold_quantity;
        soldQuantity.className = 'card-text';

        const price = document.createElement('p');
        price.textContent = item.price.amount;
        price.className = 'card-text';

        const location = document.createElement('p');
        location.textContent = item.location;
        location.className = 'card-text';

        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = 'detail';
        btn.addEventListener("click", function () { viewDetail(character); })
     */    
        body.appendChild(tittle);
/*         body.appendChild(description);
        body.appendChild(id);
        body.appendChild(condition);
        body.appendChild(shipping);
        body.appendChild(soldQuantity);
        body.appendChild(price);
        body.appendChild(location);
        body.appendChild(btn); */
    
        div.appendChild(image);
        div.appendChild(body);
        row.appendChild(div);
        container.appendChild(row);
      })
}

render();