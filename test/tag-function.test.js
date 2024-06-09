

function tagFunctions(array, ...args){
    console.info(array);
    console.info(args);
}


test('Tag Function', ()=>{
    const name  = 'Taufik';
    const lastName = 'Riskyanto';

    tagFunctions`Hello ${name} ${lastName}!, how are you?`;
    tagFunctions`Bye ${name} ${lastName}!, see you later!`;
})


test("tag function sql", () => {
    const name = "Eko'; DROP table users;";
    const age = 30;

    tagFunctions`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
})