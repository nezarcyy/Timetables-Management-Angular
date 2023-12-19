import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // On page load or when changing themes
    this.themeService.toggleTheme();

    // You might want to add an event listener to listen for changes in the future
    // For example, if the user changes the theme in settings
    // window.addEventListener('themeChanged', this.themeService.toggleTheme);
  }
}
