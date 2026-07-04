// let customer2 = {
//     name: "John",
//     age: 25,
//     address: "New York",
//     salary: 50000,
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: 100,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variant1",
//                     price: 10
//                 },
//                 {
//                     id: 2,
//                     name: "variant2",
//                     price: 20
                    
//                 }
//             ]
//         }, {
//             id: 2,
//             name: "item2",
//             price: 200
//         }, {
//             id: 3,
//             name: "item3",
//             price: 300
//         }
//     ],
//     father: {
//         name: "Doe",
//         age: 50,
//         address: "New York"
//     }
// };
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items[2].name);
// console.log(customer2.father.name);

console.log(document.title);

let heading = document.getElementById("heading");
console.log(heading);

heading.innerText = "THANUJA";

function changeHeading() {
    heading.innerText = "THANUJA";
    console.log("clicked");
}
