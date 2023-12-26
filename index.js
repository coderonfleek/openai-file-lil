import OpenAI from "openai";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

async function main(){

    //List files
    const list = await openai.files.list();

    for await (const file of list){
        console.log(file);
    }

    //Upload file
      // - Upload a text file for the asistants API
    /* const files = await openai.files.create({
        file: fs.createReadStream("02-testfile.txt"),
        purpose: "assistants"
    }) */

      // - Upload a JSONL file for the finte-tuning API
    /* const files = await openai.files.create({
        file: fs.createReadStream("spanish_translated_sample_file.jsonl"),
        purpose: "fine-tune"
    })

    console.log(files); */

    //Retrieve Single File
    /* const file = await openai.files.retrieve("file-JWKfccZpx4m9VCnCMIs9dH4g");

    console.log(file); */

    // Delete a File
    /* const deletedFile = await openai.files.del("file-VZD2AlnFv5iStxEPy6fL9vda");

    console.log(deletedFile); */

}

main();