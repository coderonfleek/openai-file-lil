import openai from "./openaiConfig.js"

async function main(){

    const file = await openai.files.retrieve("file-kZ2i7ofi6ZCZ6RcbZEjnLgj1");

    console.log(file);

}

main();