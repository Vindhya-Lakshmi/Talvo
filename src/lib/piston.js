// piston API is a service for code execution 

const PISTON_API = "https://emkc.org/api/v2/piston"

const LANGUAGE_VERSIONS = {
    javascript: {language:"javascript",version:"18.15.0"},
    pyton: {language:"python",version:"3.10.0"},
    java: {language:"java",version:"18.15.0"},

}

/**
 * 
 * @param {string} language - programming language 
 * @param {string} code - source code to execute
 * @return {Promise<{success:boolean, output?:string,error?:string}>} 
 */

export async function executeCode(language,code) {}