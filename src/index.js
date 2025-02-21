import { AlertService } from './app/alert.service.js';
import { run } from './app/app.js';
import { CalculatorService } from './app/calculator.service.js';
import { JokesService } from './app/jokes.service.js';
import './style.scss';
import './vendor.js';

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);

console.log('Hello, world! from index.js');
