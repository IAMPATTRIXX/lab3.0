// console.log('5555');

let validate = ()=> {
    console.log('validatee!!!');
    
    let name = document.myForm.Name.value;
    let email = document.myForm.EMail.value;
    let zip = document.myForm.Zip.value;
    let country = document.myForm.Country.value;
    
    if(name === ''){
        alert('Please input your name');
        document.myForm.Name.focus();
        return false;
    }
    if(email=== '' || !validateEmail(email) ){
        alert('Please input your email');
        document.myForm.EMail.focus();
        return false;
    }
    if(zip === '' || isNaN(zip)|| zip.length<=5){
        alert('Please input your Zip Code');
        document.myForm.Zip.focus();
        return false;
    }
    if(country === '-1'){
        alert('Please input your Country');
        document.myForm.Country.focus();
        return false;
    }
    
    return true;
}

let validateEmail = (email) => {
    
    atpos = email.indexOf('@');
    dotpos = email.lastIndexOf('.');
    if( atpos <1 || (dotpos-atpos)<2){
        alert ('Please enter valid Emallll !!');
        document.myForm.EMail.focus();
        return false;
    }
    return true;
}