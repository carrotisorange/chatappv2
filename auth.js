function isCredentialCorrect(email, password){

    if(email == 'kodego@test.com' && password == '12345678'){
        return true;
    }else{
        return false;
    }
}


module.exports = isCredentialCorrect;