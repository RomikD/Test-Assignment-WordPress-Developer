
//Function that removes file on click

export function clearInputFile(f){
    if(f.value){
        try{
            f.value = ''; //for IE11, latest Chrome/Firefox/Opera...
            console.log('Form image cleared');
        }catch(err){
            console.log('Form image something not work as needed please check!');
        }
    }
}