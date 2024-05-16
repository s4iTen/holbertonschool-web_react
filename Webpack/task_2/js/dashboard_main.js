import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import logoImage from '../assets/holberton-logo.jpg';

$(document).ready(function() {
    $('body').append(`<div id="logo"></div>`); // Add the logo element at the top of the document
    $('#logo').css({
        width: '200px',
        height: '200px',
        backgroundImage: `url(${logoImage})`, // Set the background image of the logo
        backgroundSize: 'cover',
    });

    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="clickButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    let count = 0;
    const countParagraph = $('#count');

    function updateCounter() {
        count++;
        countParagraph.text(`${count} clicks on the button`);
    }

    $('#clickButton').on('click', _.debounce(updateCounter, 500));
});
