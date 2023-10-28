let btn=document.getElementById('btn').addEventListener('click',check);

function check(){
    axios('https://fakestoreapi.com/products')
    .then((res)=>{
        let printdata="";
        res.data.map((value)=>{
            printdata+=`<div class="card card-spacing" style="width: 380px " >
            <img
              class="card-img-top card-img mx-auto"
              src=${value.image}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">${value.title}</h5>
              <p class="card-text">
                ${value.category}
              </p>
              <p class="card-text">
                Rs : ${value.price}
              </p>
              <p class="card-text">
                
              </p>
              <a href="#" class="btn btn-primary">Shop Now</a>
            </div>
          </div>`
        })
        document.getElementById('box').innerHTML=printdata;
    }).catch((err)=>{
        console.log(err);
    })
}
let btn1=document.getElementById('btn1').addEventListener('click',start)

function start(){
    axios('https://fakestoreapi.com/users')
    .then((res)=>{
      let data=""
    res.data.map((item)=>{
      data+=`
      <tr>
      <td>${item.id}</td>
      <td>${item.name.firstname}</td>
      <td>${item.name.lastname}</td>
      <td>${item.email}</td>
      <td>${item.phone}</td>
     `
    })
    document.getElementById('card').innerHTML=data;
    }).catch((err)=>{
      console.log(err);
    })


}

