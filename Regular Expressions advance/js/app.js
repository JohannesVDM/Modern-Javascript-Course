let re;
//literal chars
re = /hello/;
re = /hello/i;

//metachars symbols

re = /^h/i;      // must start with
re = /world$/i;  // must end with 

re = /^hello$/i; //must begin and and with 
re = /^hello$/i; //must begin and and with 
re = /^h.llo$/i; //any one char 
re = /^h*llo$/i; //any character 0 or more times

re = /^gre?a?y$/i; //optional character

re = /^gre?a?y?/i; //escape character

//^ ~ carat

//string to match 
const str = 'grey';

// log results
const result = re.exec(str);
console.log(result);

//great test to compare string and regex
function reTest(re, str) {
  if (re.test(str)) {
    //source will keep out slashes
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);