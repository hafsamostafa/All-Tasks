/* Simple JS application showing the Net salary after deducting 10% */

let gross = parseFloat(prompt("Please Enter your Gross Salary")),
    vat = gross-(gross/100),
    net = gross-vat ;

console.log (`The Net Salary Is ${net}`)


