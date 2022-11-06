console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie = async()=>{

    const promiseWifeBriningTicks =  new Promise((resolve, reject) => {
        setTimeout(()=> resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));

    const addButter = new Promise((resolve, reject)=> resolve(`butter`));

    const getColdDrinks = new Promise((resolve, reject)=> resolve('cold drink'));

    let ticket = await promiseWifeBriningTicks;

    console.log(`wife : I have the ${ticket}`);
    console.log('husband : should we go in');
    console.log('wife : No I am hungry'); 

    let popcorn = await getPopcorn;

    console.log(`I got some ${popcorn}`);
    console.log('husband : should we go in');
    console.log('wife : I need butter on my popcorn');

    let butter = await addButter;

    console.log(`I got some ${butter} on popcorn`);

    let colddrink = await getColdDrinks;

    console.log(`husband : got the ${colddrink} for you honey!`);
    console.log('husband : anything else darling');
    console.log(`wife : lets go we are getting late`);
    console.log(`husband : thank you for the reminder *grins*`);


    return ticket;
}

preMovie().then((m)=>console.log(`person3:shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');