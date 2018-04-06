let myObjet = {
    name : '',
    express : '',
    age : ''
};
console.log(myObjet)

const addObjet = (_obj) => {
    _obj.name = "toto",
    _obj.express = "connard",
    _obj.age = 10
}


addObjet(myObjet);
console.log(myObjet)
