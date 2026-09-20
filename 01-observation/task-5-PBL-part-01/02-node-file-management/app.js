


const readline = require("readline");
const fileOps = require("./fileoperations");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = rl[Symbol.asyncIterator]();

/** Prompts the user and waits for the next line of input. */
async function ask(question) {
  process.stdout.write(question);
  const { value } = await lines.next();
  return value ?? "";
}

async function main() {
  console.log("=== Node.js File Management ===\n");

  const filename = (await ask("Enter a filename (e.g. notes.txt): ")).trim();
  const initialContent = await ask("Enter the content to write to the file: ");

  // 1. Create/write
  const filePath = fileOps.createAndWrite(filename, initialContent);
  console.log(`\n✅ File created and written: ${filePath}`);

  // 2. Read
  console.log("\n--- Contents after writing ---");
  console.log(fileOps.readFile(filename));
  console.log("--- end of file ---");

  // 3. Append
  const extraContent = await ask("\nEnter additional content to append: ");
  fileOps.appendToFile(filename, extraContent);
  console.log(`\n✅ Content appended to: ${filePath}`);

  // 4. Display final contents
  console.log("\n--- Final contents after appending ---");
  console.log(fileOps.readFile(filename));
  console.log("--- end of file ---");

  rl.close();
}

main().catch((err) => {
  console.error("Something went wrong:", err.message);
  rl.close();
  process.exitCode = 1;
});