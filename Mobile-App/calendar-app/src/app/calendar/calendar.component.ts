import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-calendar',
  standalone: true, 
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatGridListModule, 
    MatCardModule,
    MatIconModule
  ] // Ensure necessary modules are imported

})
export class CalendarComponent implements OnInit {
  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysInMonth: (number | null)[] = [];
  currentMonth: string | undefined;
  currentYear: number | undefined;
  currentDate: Date = new Date();

  ngOnInit() {
    this.updateCalendar(this.currentDate);
  }

  updateCalendar(date: Date) {
    this.currentYear = date.getFullYear();
    this.currentMonth = formatDate(date, 'MMMM yyyy', 'en-US');

    const firstDay = new Date(this.currentYear, date.getMonth(), 1).getDay();
    const daysInMonth = new Date(this.currentYear, date.getMonth() + 1, 0).getDate();

    this.daysInMonth = [];
    for (let i = 0; i < firstDay; i++) {
      this.daysInMonth.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      this.daysInMonth.push(i);
    }
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.updateCalendar(this.currentDate);
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.updateCalendar(this.currentDate);
  }
}
