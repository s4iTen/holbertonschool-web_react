import $ from 'jquery';
import './header.css';

console.log('Init header');

const logo = $('<img src="./assets/holberton-logo.jpg" alt="Holberton Logo">');
const title = $('<h1>Holberton Dashboard</h1>');

$('#root').append(logo).append(title);
