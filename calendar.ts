class NovemberCalendar {
    private currentMonth: number;
    private currentYear: number;
  
    constructor() {
      const today = new Date();
      this.currentMonth = today.getMonth() + 1; // Months are zero-based
      this.currentYear = today.getFullYear();
    }
  
    displayCalendar(): void {
      console.log(`Calendar for ${this.getMonthName(this.currentMonth)} ${this.currentYear}`);
      console.log('Sun Mon Tue Wed Thu Fri Sat');
  
      const firstDayOfMonth = new Date(this.currentYear, this.currentMonth - 1, 1);
      const lastDayOfMonth = new Date(this.currentYear, this.currentMonth, 0);
      const daysInMonth = lastDayOfMonth.getDate();
      const firstDayOfWeek = firstDayOfMonth.getDay();
  
      let dayCounter = 1;
  
      for (let i = 0; i < 6; i++) {
        let row = '';
  
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDayOfWeek) {
            row += '    ';
          } else if (dayCounter <= daysInMonth) {
            row += dayCounter.toString().padStart(4, ' ');
            dayCounter++;
          }
        }
  
        console.log(row);
      }
    }
  
    private getMonthName(month: number): string {
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
  
      return monthNames[month - 1];
    }
  }
  
  // Example usage
  const novcalendar = new Calendar();
  calendar.displayCalendar();
  