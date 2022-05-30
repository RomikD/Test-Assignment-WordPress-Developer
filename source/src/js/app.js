/*!
Theme Name: Kallisto
Author: Roman Dudnyk
Author URI: http://dudnyk.rb@gmail.com
Version: 1.0.0
*/

'use strict'

import * as rtlIndicator from "./modules/rtlIndicator.js"
import {clearInputFile} from "./modules/clearInputFile.js";
import {clearForm} from "./modules/clearForm.js";
import {showNameImage} from "./modules/showNameImage.js";

rtlIndicator.rtlIndicator();

document.addEventListener('DOMContentLoaded', () => {

    console.log("// Welcome to Kallisto (Gulp) theme there is all what you needed! //")

    $('#masthead .menu-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('checked');
        $('#fixed-menu').toggleClass('active');
        $('body').toggleClass('stop');
    });

    //Clearing form file in add product
    let formContainer = document.querySelector('#add-product');

    if(formContainer) {

        let realForm = formContainer.querySelector('form.add-product-form'),
            formClear = formContainer.querySelector('#productReset'),
            formFile = formContainer.querySelector('#productImage'),
            formFileTitle = formContainer.querySelector('.form-file-label'),
            formFileTitleText = formFileTitle.textContent,
            formFileClear = formContainer.querySelector('#productImageRemove');

        formFileClear.addEventListener('click', () => {
            clearInputFile(formFile);
            formFileTitle.textContent = formFileTitleText;
        });

        formFile.onchange = function () {
            showNameImage(formFile, formFileTitle);
        }

        formClear.addEventListener('click', () => {
            clearForm(realForm);
        });
    }
});