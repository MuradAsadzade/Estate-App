import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);



// https://vitejs.dev/config/
export default defineConfig({
  server:{
    // proxy:{
    //   "/api":{
    //     target:"http://localhost:3000",
    //     secure:false
    //   }
    // }
  },
  plugins: [react()]
})
