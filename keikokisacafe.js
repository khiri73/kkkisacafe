var product=[ {
    id:1,
    img: 'imgs/kk2.png',
    name:'[Pre-order] Litchi Hikari Club Keychain',
    price: 150,
    description: 'Normal items: ship within 5-7 days,Pre-order items: ship within 10-15 days ',
    type: 'Accessories'
},{
    id:2,
    img: 'imgs/kk3.png',
    name:'[Pre-order] Litchi Hikari Club acrylic carabiner',
    price: 150,
    description: 'Normal items: ship within 5-7 days,Pre-order items: ship within 10-15 days ',
    type: 'Accessories'
},{
     id:3,
    img: 'imgs/kk4.png',
    name:'[Pre-order] Litchi Hikari Club acrylic shaker',
    price: 180,
    description: 'Normal items: ship within 5-7 days,Pre-order items: ship within 10-15 days ',
    type: 'Accessories'
},{
     id:4,
    img: 'imgs/kk5.png',
    name:'[Pre-order] Litchi Hikari Club acrylic shaker',
    price: 180,
    description: 'Normal items: ship within 5-7 days,Pre-order items: ship within 10-15 days ',
    type: 'Accessories'
},{
     id:5,
    img: 'imgs/kk6.png',
    name:'[Pre-order] Litchi Hikari Club acrylic shaker',
    price: 180,
    description: 'Normal items: ship within 5-7 days,Pre-order items: ship within 10-15 days ',
    type: 'Paper goods'
},{
     id:6,
    img: 'imgs/kk7.png',
    name:'[Pre-order] Litchi Hikari Club acrylic shaker',
    price: 180,
    description: 'Normal items: ship within 5-7 days,Pre-order items: ship within 10-15 days ',
    type: 'Paper goods'
}];

// [{}, {}, {],]// length=3

$(document).ready( () => {
    var html ='';
    for (let i=0; i< product.length; i++) {
        html +=`<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                <img class="product-img" src="${product[i].img}">
                <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-size: 1.4vw;">${product[i].name}</p>
                <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-size: 1.4vw;">${product[i].price}</p>
            </div>`;
    }
    $("#productlist").html(html);
})

function searchproduct(param){
    console.log(param)
    $(".product-items").css ('display', 'none')
    if (param == 'all'){
        $(".product-items").css ('display','block')
    }
    else {
        $("."+param).css('display','block')
    }
}

var prductindex =0;
function openProductDetail(index) {
    const p = product[index];
    $('#mdd-img').attr('src', p.img);
    $('#mdd-name').text(p.name);
    $('#mdd-price').text(p.price + ' THB');
    $('#mdd-desc').text(p.description);
    $('#modalDesc').show();
}

function closeModal() {
    $('#modalDesc').hide();
}
$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
            <img class="product-img" src="${product[i].img}">
            <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-size: 1.4vw;">${product[i].name}</p>
            <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;font-size: 1.4vw;">${product[i].price}</p>
        </div>`;
    }
    $("#productlist").html(html);

    // ✅ Bind close actions HERE, after DOM is ready
    $('.btn:contains("Close")').on('click', closeModal);
    $('.modal-bg').on('click', closeModal);
});

