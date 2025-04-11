//In here once photo is selected, user has option to edit or save photo.
// Saved photo will be uploaded to the server.
// Edited photo will pull up ToastUI Image Editor.

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Button } from "@react95/core";

import imageURL from './../index';

import ImageEditor from 'tui-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';

/*
  - Now we want to call toastui function in the div below.
  - What I want to test is loading the image editor  with an image.
    - Create an input button in the div  that calls toastui function and see if the image comes up with the editor.
 Ai suggestions: !! - We want to call the function in the useEffect hook.
        !! - We want to pass the imageURL as a prop to the EditImage component.

*/

interface EditImageProps {
    imageURL: string;
}


const EditImage: React.FC<EditImageProps> = ({ imageURL }) => {
    useEffect(() => {
        const editorElement = document.querySelector('#tui-image-editor');
        if (editorElement) {
            const toastUI = new ImageEditor(editorElement, {
                includeUI: {
                    loadImage: {
                        path: 'public/images/card-1.png',
                        name: 'Example Image'
                    },
                    theme: {
                        'menu.normalIcon.path': '../dist/svg/icon-d.svg',
                        'menu.normalIcon.name': 'icon-d',
                        'menu.activeIcon.path': '../dist/svg/icon-b.svg',
                        'menu.activeIcon.name': 'icon-b',
                        'submenu.normalIcon.path': '../dist/svg/icon-a.svg',
                        'submenu.normalIcon.name': 'icon-a',
                        'submenu.activeIcon.path': '../dist/svg/icon-c.svg',
                        'submenu.activeIcon.name': 'icon-c'
                    }, // download this from github repo or match our styling
                    menu: ['crop', 'flip', 'rotate', 'shape', 'icon'],
                    initMenu: 'crop',
                    uiSize: {
                        width: '1000px',
                        height: '700px'
                    },
                    menuBarPosition: 'bottom'
                },
                cssMaxWidth: 700,
                cssMaxHeight: 500,
                selectionStyle: {
                    cornerSize: 20,
                    rotatingPointOffset: 70
                },
                usageStatistics: false
            });

        }
    });
    // ! Figure out what you want the edit function to do
    //const edit = async (uploadedImage)

    return (
        <div id="tui-image-editor" style={{ height: '500px' }}></div>
    )
};

export default EditImage;

