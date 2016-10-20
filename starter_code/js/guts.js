// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber
    function multiply(a,b){
       return a*b;
    }
    function divide(a,b){
        return a/b;
    }
    function subtract(a,b){
        return a-b;
    }
    function add(a,b){
        return a+b;
    }
    function power(a,b){
         return Math.pow(a,b);
    }
    function square_root(a){
        return Math.sqrt(a);
    }
    function logBase10(a){
        return Math.log10(a);
    }
    function generateRandomNumber(){
        return Math.floor(Math.random()*10000)+0;
    }