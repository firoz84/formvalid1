

const  setAlert=(msg, type="danger")=>{
    return `<p class="alert d-flex justify-content-between alert-${type}">${msg} <button data-bs-dismiss="alert" class="btn-close"></button></p>`;
}


// number paturn 

const numberCheck=(num)=>{

    let agePattern=/^[0-9]{2,3}$/;

    return agePattern.test(num);

}