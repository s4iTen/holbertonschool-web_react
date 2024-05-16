import $ from 'jquery';
import _ from 'lodash';
import './body.css';

const countParagraph = $('<p id="count"></p>');
$('body').append(countParagraph);

let count = 0;

function updateCounter() {
    count++;
    countParagraph.text(`${count} clicks on the button`);
}

$('#clickButton').on('click', _.debounce(updateCounter, 500));
