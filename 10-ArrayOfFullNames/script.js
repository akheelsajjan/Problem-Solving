function fullNames(names) {
  return names.map(value=>{
      return value.firstname + ' ' + value.lastname
  })
}

//Input: names = [{firstname: 'Bruce', lastname: 'Wayne'}, {firstname: 'Clark', lastname: 'Kent'}]
let names = [
  {firstname: 'Bruce', lastname: 'Wayne'},
  {firstname: 'Clark', lastname: 'Kent'}
];

console.log(fullNames(names)) //- Returns ['Bruce Wayne', 'Clark Kent']