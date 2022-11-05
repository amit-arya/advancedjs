const posts = [
    {title:'Post one', body:'This is post one'}, 
    {title:'Post two', body:'This is post two'},
    {title:'Post three', body:'This is post three'}
];

function getposts(){
    setTimeout(()=>{
      let output = '';
      posts.forEach((post) => {
        output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

function deletepost(){
    return new Promise((resolve, reject)=>{
        posts.pop();

    var error = posts.length;
    if(error){
        resolve();
    }
    else{
        reject('Array is empty now');
    }
    });
}

// deletepost().then(getposts).catch(err => console.log(err));
// deletepost().then(getposts).catch(err => console.log(err));
// deletepost().then(getposts).catch(err => console.log(err));

function createpost(post){
    posts.push(post);
    getposts();
    setTimeout(()=>{
        deletepost().then(getposts)
        .catch(err => console.log(err));
    },1000);
}

createpost({title:'Post four', body:'This is post four'});

// function createpost(post){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             posts.push(post);

//             const error = false;
//             if(!error){
//               resolve();
//             }
//             else{
//                 reject('Error: Something went wrong');
//             }
//         },2000);
//     });
// }

// createpost({title:'Post three', body:'This is post three'})
// .then(getposts)
// .catch(err => console.log(err));
