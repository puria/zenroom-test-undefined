var zenroom = require("zenroom") // Version 1.0.2
// here it's undefined

const execute = (keys, script) =>{
    return new Promise((resolve, reject) => {
        zenroom
        .keys(keys)
        .script(script)
        .print((msg) => {
          // console.log(JSON.parse(msg))
          resolve(JSON.parse(msg))
        })
        .error((msg) => {
          reject(msg)
        })
        .zencode_exec()
    })
  }

const main = async() => {
let keys = await execute(false,
      `rule check version 1.0.0
      Scenario 'simple': Create the keypair
      Given that I am known as 'Alex'
      When I create the keypair
      Then print my data`)
 }

main()
