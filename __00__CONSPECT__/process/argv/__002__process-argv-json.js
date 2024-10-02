
function consoleToJSON() {
  const cons = {};
  const argvs = process.argv
  const len = argvs.length
  
  for(let i = 2; i < len; i++) {
    const arg = argvs[i].split('=');
    cons[arg[0]] = arg[1] ? arg[1] : true
  }
  
  return cons
}
// node __10-01-0__process-argv-json.js message=hello spec=false
console.log(consoleToJSON());  // { message: 'hello', spec: 'false' }