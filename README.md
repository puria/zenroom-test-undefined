# zenroom-test-undefined

# install

`npm i`

# run

`npm start`

# expected output

```
npm start

> zenroom-import@1.0.0 start /home/puria/src/test/zenroom-test-undefined
> node index.js

 .  System memory manager in use
 .  ECDH curve is GOLDILOCKS
 .  Memory in use: 194 KB
 .  Zencode version match: 1.0.0+1b6d918
 .  rule check version 1.0.0
[*] Script successfully executed:

rule check version 1.0.0
      Scenario 'simple': Create the keypair
      Given that I am known as 'Alex'
      When I create the keypair
      Then print my data
[*] Zenroom teardown.
 .  Memory used: 233 KB
```
