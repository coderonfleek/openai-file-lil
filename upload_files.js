import openai from "./openaiConfig.js";
import fs from "fs";

async function main(){

    
    const file_upload_response = await openai.files.create({
        file: fs.createReadStream("spanish_translated_sample_file.jsonl"),
        purpose: "fine-tune"
    })

  
    console.log(file_upload_response);
}

main();