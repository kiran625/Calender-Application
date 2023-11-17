var Calendar = /** @class */ (function () {
    function Calendar() {
        var today = new Date();
        this.currentMonth = today.getMonth() + 1; // Months are zero-based
        this.currentYear = today.getFullYear();
    }
    Calendar.prototype.displayCalendar = function () {
        console.log("Calendar for ".concat(this.getMonthName(this.currentMonth), " ").concat(this.currentYear));
        console.log('Sun Mon Tue Wed Thu Fri Sat');
        var firstDayOfMonth = new Date(this.currentYear, this.currentMonth - 1, 1);
        var lastDayOfMonth = new Date(this.currentYear, this.currentMonth, 0);
        var daysInMonth = lastDayOfMonth.getDate();
        var firstDayOfWeek = firstDayOfMonth.getDay();
        var dayCounter = 1;
        for (var i = 0; i < 6; i++) {
            var row = '';
            for (var j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfWeek) {
                    row += '    ';
                }
                else if (dayCounter <= daysInMonth) {
                    row += dayCounter.toString().padStart(4, ' ');
                    dayCounter++;
                }
            }
            console.log(row);
        }
    };
    Calendar.prototype.getMonthName = function (month) {
        var monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return monthNames[month - 1];
    };
    return Calendar;
}());
// Example usage
var calendar = new Calendar();
calendar.displayCalendar();
