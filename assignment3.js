let name = 'suresh'
let age = 22
let purchaseAmount = 100000
let discount_percentage=0

if(age <18){
    discount_percentage +=10

}else if(age >=60){
      discount_percentage +=20
}

if(purchaseAmount > 5000){
    discount_percentage +=5   
}

console.log(`Hii  ${name}    You received a total discount of ${discount_percentage}%    Final amount is  purchaseAmount `)
