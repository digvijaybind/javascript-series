// best closure 

let myFunction =(function(){
    let name=''

    getName=function(){
        return name;
    }
    setName=function(setFullname){
        name=setFullname
    }

    return {
        getName:getName,
        setName:setName
    }
}())

myFunction.setName('Digvijay')
console.log(myFunction.getName())