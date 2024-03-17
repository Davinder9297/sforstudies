import React from 'react'

const Replace = () => {
    let originalString = "This is a sample string with spaces";
let stringWithHyphens = originalString.replace(/ /g, '-');

console.log(stringWithHyphens);

  return (
    <div>Replace</div>
  )
}

export default Replace