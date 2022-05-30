
//Function that removes file on click

export function clearInputFile(f){
    if(f.value){
        try{
            f.value = ''; //for IE11, latest Chrome/Firefox/Opera...
            console.log('cleared');
        }catch(err){
            console.log('something get wrong');
        }
    }
}