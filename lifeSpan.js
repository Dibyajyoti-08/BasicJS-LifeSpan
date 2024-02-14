function lifeInWeeks(age) {      
        var dayCal = age * 365;
        var weekCal = age * 52;
        var monthCal = age * 12;
        
        var finalAge = 90;
        
        var totalDay = (finalAge * 365) - dayCal;
        var totalWeek = (finalAge * 52) - weekCal;
        var totalMonth = (finalAge * 12) - monthCal;
        
        console.log("You have " + totalDay + " days, " + totalWeek + " weeks, and " + totalMonth + " months left." );
    }
    
lifeInWeeks(56);