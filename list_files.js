import openai from "./openaiConfig.js";

async function main() {

    const uploadedFiles = await openai.files.list({
        purpose: "fine-tune"
    });

    console.log(uploadedFiles);
    
}

main();