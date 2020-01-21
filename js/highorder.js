// Add the following element at the end of <body> element in an html file
// <script src="main.js"></script>

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
//   for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
//   }
  
  // forEach
  companies.forEach(function(Company){
      console.log(Company.name);
  }

  );
  // filter age:>=21 year
  let output1=[];
  for(let i=0;i<ages.length;i++){
      if(ages[i]>=21)
      output1.push(ages[i]);
  }
  console.log(output1);

//   let output2=ages.filter(function(age){
//       if(age>=21)
//       return true;
//   });
//   console.log(output2);
  
let output2=ages.filter( ages => ages>=21);
  console.log(output2);

const retailCompanies = companies.filter(c => c.category === 'Retail');
  console.log(retailCompanies);

const tenyearsComp = companies.filter(c => (c.end = c.start)>=10);
console.log(tenyearsComp);

//map

const cmpNames = companies.map (c => c.name);
console.log(cmpNames);

const ageMap = ages.map (ages => Math.sqrt(ages).toFixed(2))
                    .filter(ages => ages >= 8)
                    .sort((a,b) => b-a);
console.log(ageMap);
  
const totalyear = ages.reduce((total,ages)=> total+ages);
console.log(totalyear);