// Promise:: -> an object that reference the code which is working in the bg and asks is it rejected or fullfilled

// getdata will give a promise
// async means it will work in bg

// async function getdata(){
//     // stimulate getting data from a server
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     }) 
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

// instead of using promise we also use fetch api

async function getdata(){  // overall returns a promise
    // stimulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x=  await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                   }),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                   },
            })
    let data = await x.json()
    // console.log(data);
    return data
}

async function main(){   // it is easy to wrap it
console.log("load modules");

console.log("do else");

console.log("load data");

// wait for data to come to process it
// async js data is pending further task gets executed

// 2nd appraoch async await  (if no await it will run in bg and below task gets executed)
let data = await getdata()  // await always use  in async function(1 method)


console.log(data);

console.log("process data");

console.log("task 2");
}

main()

// get request :> simply requesting anything in the url

// Example POST method implementation
// used to submit the data (sensitive info(url logs), file submit) more data can be send via this

// async function postData(url = "", data = {}) {
    
//     const response = await fetch(url, {
//       method: "POST", 
//       headers: {
//         "Content-Type": "application/json",
//       },
//        body: JSON.stringify(data),
//     });
//     return response.json();
//   }
//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data);
//   });

// 1st approach
// data.then(()=>{
//     console.log(data);
//     console.log("process data");
//     console.log("task 2");
// })


