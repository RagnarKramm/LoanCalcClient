import 'bootstrap/dist/css/bootstrap.min.css';
import 'my-app.css'
import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';

Aurelia
  .register(RouterConfiguration)
  .app(MyApp)
  .start();
