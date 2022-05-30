export function showNameImage (name, titleAdd) {
    let nameFile = ('Selected file: ' + name.files.item(0).name),
    sizeFile = ('\nSelected file size: ' + name.files.item(0).size),
    typeFile = ('\nSelected file type: ' + name.files.item(0).type);

    console.log(nameFile + sizeFile +typeFile);
    titleAdd.textContent = nameFile;

}