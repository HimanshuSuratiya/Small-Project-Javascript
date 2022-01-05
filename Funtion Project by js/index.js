// numberFunction(number): {
//  is square
// 	is Odd,
// 	is prime,
// 	divisible by 5 and 7,
// 	is a fibbonacci number,
// 	is palindrome,
// 	is armstrong,
// 	sum of digits,
// 	Reverse Number
// }


console.log("Practice of javascript");

function square(number){
    const squarenum = number * number;
    console.log(`Square of ${number} is = ${squarenum}`);
};

function odd(number){
    const isodd = number;
    if(isodd%2 === 0)
    console.log(`${isodd} = This number is not odd `);
    else
    console.log(`${isodd} = This number is odd `);
};

function prime(number){
    const isprime = number;
    for(var i=2; i<isprime; i++)
        {
            if(isprime%i==0)
            return console.log(`${isprime} = This Number is not Prime`);   
        }
        console.log(`${isprime} = This Number is Prime`);
};

function divisible(number){
    const div = number;
        if(div%5 === 0 && div%7 === 0)
        return console.log(`${div} = This Number is Totally Divisible by 5 or 7`);
        else
        console.log(`${div} = This Number is not Totally Divisible by 5 or 7`);
};

function fibon(number){
    const fib = number;
    var f1=0,f2=1,f3;
    f3=f1+f2;
    while(f3 <= fib){
        f1=f2;
        f2=f3;
        f3=f1+f2;
    }

    if(fib === f2)
    console.log(`${fib} = This Number Is fabbonic Series`);
    else
    console.log(`${fib} = This Number Is  Not fabbonic Series`);
};

function palindromes(string){
    const palis = string;
    for(var i=0; i<palis.length/2; i++){
        if(palis[i] != palis[palis.length - 1 - i]){
        return console.log(`${palis} = It is Not a Palindrome String`);
        }
    }
    console.log(`${palis} = It is a Palindrome String`);
};
 
function palindromen(number){
    var pali = number;
    var reverse = 0;
    var result;
    while(pali > 0){
        result=pali%10;
        reverse=reverse*10+result;
        pali=parseInt(pali/10);
    }
    if(number === reverse)
    console.log(`${number} = It is a Palindrome Number`);
    else
    console.log(`${number} = It is Not a Palindrome Number`);
};

function armstrong(number){
    const original = number
    var arms = number;
    var result=0;
    var sum = 0;
    for(var i=0; i<number.toString().length; i++)
    {
        var one= arms%10;
        result = arms%10;
        for(var j=0; j<number.toString().length - 1; j++)
        {
            result = one*result;
        }
        arms = parseInt(arms/10);
        sum = sum+result;
    }
        if(sum === original)
        console.log(`${sum} = It is a armstrong Number`);
        else
        console.log(`${sum} = It is Not a armstrong Number`);
};

function sum(number){
    var add = number;
    const original = number;
    var result = 0;
    var sum = 0;
    for(var i=0; i<number.toString().length; i++)
    {
        result = add%10;
        sum = sum+result;
        add = parseInt(add/10);
    }
    console.log(`${original} = The sum of This Numbers is = ${sum}`);
};

function reverse(number){
    var num = number;
    var original = number;
    var result = 0;
    var reverse = 0;

    while(num > 0)
    {
        result = num%10;
        reverse = reverse*10+result;
        num = parseInt(num/10);
    }
    console.log(`${original} = This Number Reverse is ${reverse}`);
};



main(12);

function main(number){
    square(number);
    odd(number);
    prime(number);
    divisible(number);
    fibon(number);
    palindromes('madam');
    palindromen(number);
    armstrong(number);
    sum(number);
    reverse(number);
}

// person({name, age, dob, profession, age of year, salary}){
	
// 	Car price = 12L
// 	Bike price = 2L
// 	Normal man expenses = 30housand
// 	Cannot save more than 1 year 


// 	Print{
// 		Your name is ------
// 		Your age is ------- year month days
// 		your date of birth in Total days
// 		Message specific to profession,
// 		Predict which thing he can buy
// 		Can drive
// 	}
// }



console.log(`Start Second Section Of code Options is Professions is
1-software developer 
2-fashion designer 
3-teacher
And Salary Options
1-200000
2-100000
3-50000
4-30000
`);

function person(obj){
    console.log(`Your name is ${obj.name}`);

    var num = obj.age;
    var years = parseInt(num/365);
    var weeks = parseInt((num%365)/7);
    var days = (num%365)%7;
    console.log(`You Type ${num} Days of Your Age =  Your Age is ${years} years, ${weeks} weeks, ${days} days`);	
    
    var todayIS = new Date()
    var mybday = new Date(obj.dob.year,obj.dob.month,obj.dob.day);
    var masince = todayIS.getTime()- mybday.getTime();
    var daysince = Math.floor(masince/(1000*60*60*24));
    console.log(`Your Date of Birth is ${mybday.toDateString()} Yor are alive in = ${daysince} days`);
   
    var prof = obj.profession;
    if(prof === 'software developer')
    console.log(`Yor are a ${prof} - Please Improve your skills to perfect a good Software Developer`);
    if(prof === 'fashion designer')
    console.log(`You are a ${prof} - Fashion you can buy, but style you possess. The key to style is learning who you are, which takes years. There's no how-to road map to style. It's about self expression and, above all, attitude.`); 
    if(prof === 'teacher')
    console.log(`You are a ${prof} - You are the spark, the inspiration, the guide, the candle to my life. I am deeply thankful that you are my teacher.`);
   
    if(daysince > 6570)
    console.log(`Your Age is ${parseInt(daysince/365)} = You Are Drive a vehicle`);
    if(daysince < 6570)
    console.log(`Your Age is ${parseInt(daysince/365)} = You Are Not Drive a vehicle`);

    var carprize  = 1000000;
    var smallcar  =  599999;
    var bikeprize =  200000;
    var smallbike =  100000;
    var sal = obj.salary;
    if(sal === 200000){
        console.log(`${obj.name} Salary is ${sal} = ${obj.name} expense is 100000 every month.`);
        var save = 100000*12;
        console.log(`${obj.name} Yearly save a ${save} rupees`);
        console.log(`you are easily Purchase a Car And car prize is only = ${carprize}`);
    }
    if(sal  === 100000){
        console.log(`${obj.name} Salary is ${sal} = ${obj.name} expense is 50000 every month.`);
        var save = 50000*12;
        console.log(`${obj.name} Yearly save a ${save} rupees`);
        console.log(`you are easily Purchase a smallCar And smallcar prize is only = ${smallcar}`);
    }
    if(sal  === 50000){
        console.log(`${obj.name} Salary is ${sal} = ${obj.name} expense is 30000 every month.`);
        var save = 20000*12;
        console.log(`${obj.name} Yearly save a ${save} rupees`);
        console.log(`you are easily Purchase a bike And bike prize is only = ${bikeprize}`);
    }
    if(sal  === 30000){
        console.log(`${obj.name} Salary is ${sal} = ${obj.name} expense is 30000 every month.`);
        var save = 0*12;
        console.log(`${obj.name} Yearly save a ${save} rupees`);
        console.log(`you are not purchase any product because your save money is ${save}`);
    }
};

person({name:'Raj Singh', age: 7000, dob:{year:2003, month:2, day:13}, profession:'fashion designer', salary:200000});





