import { Command } from "commander";
import os from "os"; 
const program = new Command();

program
       .version("1.0.0")
       .description("this is a new command CLI tool")
       .option("-c, --cpu","display CPU info")
       .option("-m, --memory","display memory info")
       .option("-o, --os","display os info")
       .option("-a, --all","display all system settings")
       .parse(process.argv);

const options = program.opts();

if(options.cpu || options.all)
{
    console.log(os.cpus());
}
if(options.memory || options.all)
{
    console.log(`Total memory ${os.totalmem() / 1e9} GB`);
    console.log(`Free memory ${os.freemem() / 1e9} GB`);
}
if(options.os || options.all)
{
    console.log(`Platform : ${os.platform()}`);
    console.log(`Release : ${os.release()}`);
    console.log(`Architecture : ${os.arch()}`);

}