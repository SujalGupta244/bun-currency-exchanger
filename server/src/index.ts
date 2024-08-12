import {serveStatic} from "hono/bun";
import { Hono } from 'hono';
import {cors} from "hono/cors";
import { promises as fs } from 'fs'; // Use the promises API of fs for async/await

const app = new Hono()

app.use("/*", cors())

// app.use('/jsons/*', serveStatic({root:"./"}))

app.get("/currencies", async(c) =>{
  // return c.redirect("/jsons/currencies.json")

  try {
    // Read the currencies.json file from the json directory
    const data = await fs.readFile('./src/jsons/currencies.json', 'utf-8');
    
    // Parse the JSON data (optional, if you want to ensure it's valid JSON)
    const jsonData = JSON.parse(data);
    
    // Return the JSON data as a response
    return c.json(jsonData);
  } catch (error) {
    // Handle errors, such as file not found
    console.error('Error reading currencies.json:', error);
    return c.text('Failed to load currencies data', 500);
  }
})

app.get("/names", async(c) =>{

  try {
    // Read the currencies.json file from the json directory
    const data = await fs.readFile('./src/jsons/names.json', 'utf-8');
    
    // Parse the JSON data (optional, if you want to ensure it's valid JSON)
    const jsonData = JSON.parse(data);
    
    // Return the JSON data as a response
    return c.json(jsonData);
  } catch (error) {
    // Handle errors, such as file not found
    console.error('Error reading currencies.json:', error);
    return c.text('Failed to load currencies data', 500);
  }

  // return c.redirect("/jsons/names.json")
})


const port = 5000;

const server = Bun.serve({
  port,
  fetch: app.fetch,
})

console.log(`Server is running on ${server.port} port!`)

export default app
