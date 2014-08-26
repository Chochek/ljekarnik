$(function() {
    Today = new Date();
    ljekarnik_count_down_el = $('.ljekarnik-count-down');
    console.log(ljekarnik_count_down_el.html());

    ljekarnik_sale_over_label = "Akcija je završila!";
    ljekarnik_sale_ends_in_label = "Akcija završava za";
    ljekarnik_day_label = "dan";
    ljekarnik_days_label = "dana";
    ljekarnik_hour_label = "sat";
    ljekarnik_hours_label = "sati";
    ljekarnik_minute_label = "minutu";
    ljekarnik_minutes_label = "minuta";
    ljekarnik_second_label = "sekundu";
    ljekarnik_seconds_label = "sekundi";

    LjekarnikSaleEnds = new Date($('.sale-ends').text());

    function LjekarnikCountdown(){
        var day_label = ljekarnik_day_label,
        hour_label =  ljekarnik_hour_label,
        minute_label = ljekarnik_minute_label,
        second_label=ljekarnik_second_label,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0,
        difference = 0;

        difference = LjekarnikSaleEnds - Today;
        days = Math.floor(difference/(1000*60*60*24));

        difference = difference - (days * 1000*60*60*24);
        hours = Math.floor(difference/(1000*60*60));

        difference = difference - (hours * 1000*60*60);
        minutes = Math.floor(difference/(1000*60));

        difference = difference - (minutes * 1000*60);
        seconds = Math.floor(difference/(1000));

        if(days != 1) day_label = ljekarnik_days_label;
        if(hours != 1) hour_label = ljekarnik_hours_label;
        if(minutes != 1) minute_label = ljekarnik_minutes_label;
        if(seconds != 1) second_label = ljekarnik_seconds_label;

        if(days<0){
            ljekarnik_count_down_el.html(ljekarnik_sale_over_label);
        }
        if(days>=0)  {
            ljekarnik_count_down_el.html(ljekarnik_sale_ends_in_label +
            " " + days +" "+ day_label +
            ", "+ hours +" " +hour_label +
            ", "+ minutes +" " +minute_label +
            ", "+ seconds +" " +second_label);
        }

        Today.setSeconds(Today.getSeconds() + 1);
    }

    LjekarnikCountdown();
    setInterval(LjekarnikCountdown,1000);
})