const testObject = {
  name: name => console.log(`Hello ${name}`),
}

const testFunction = testObject['name']
testFunction('Dajana')

// Same as above two lines combined
testObject['name']('lene')
