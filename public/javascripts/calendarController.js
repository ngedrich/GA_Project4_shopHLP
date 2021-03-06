angular.module('shopHLP')
  .controller('CalendarController', CalendarController);

  CalendarController.$inject = ['BusinessService', 'EventsService'];

  function CalendarController(BusinessService, EventsService){
    var vm = this;

    vm.bizEvents = BusinessService.events;
    vm.events = EventsService.all;
    vm.addEvent = EventsService.addEvent;
    vm.newEvent = EventsService.newEvent;
    vm.getEvents = EventsService.getEvents;
    vm.deleteEvent = EventsService.deleteEvent;

    vm.date = new Date();

    vm.date2 =moment();

  ///////////cal move forward & back
  var currentMonth = vm.date2;
  console.log('the format of current month is: ' + currentMonth);
  var newDate2 = {};

  vm.forwardMonth = function(){
    var currentMonthDay = currentMonth.format('DD');
      console.log('current month day: ' + currentMonthDay);
    var nextMonth = currentMonth.add(1, 'month');
      newDate2 = nextMonth;
      console.log('next month is:' + nextMonth);
      document.getElementById("monthDisplay").innerHTML = newDate2.format('MMMM YYYY');
      vm.createCalendar()
  };
  // console.log(newDate2)
  // currentMonth = newDate2;
  // console.log("new date 2: " + newDate2);

  vm.backMonth = function(){
    console.log('currentMonth: ', currentMonth)
    var currentMonthDay = currentMonth.format('DD');
      console.log('current month day: ' + currentMonthDay);
    var lastMonth = currentMonth.subtract(1, 'month');
    var date2 = lastMonth;
      console.log('last month was:' + lastMonth);
      document.getElementById("monthDisplay").innerHTML = date2.format('MMMM YYYY');
      vm.createCalendar()
      return date2;
    };
//////////draw the calendar grid

    vm.createCalendar = function(){
      var c = document.getElementById('calDisplay');
      c.innerHTML = ""

      var today = currentMonth.toString();
      console.log('this is createCal date:' + today);
      console.log("got the date");
        var generateRowsWithCols = function(rowStart, noOfRows, noOfCols){
          if (rowStart> noOfRows)
            return;
          var table = document.getElementById("grid");
          var tr = table.insertRow("tr");
          tr.setAttribute("id", "tr"+rowStart);
          generateCells(1, rowStart, noOfCols);
          generateRowsWithCols(++rowStart, noOfRows,noOfCols);
        };

        var generateCells = function(colStart,rowStart,noOfCols){
          if (colStart > noOfCols)
            return;
          var row = document.getElementById("tr"+rowStart);
          var td = row.insertCell('td');
          td.setAttribute("id", "td"+rowStart+colStart);
          td.setAttribute("class", "eventCalCells");
          td.setAttribute("ng-click", "vm.showEvents()")
          generateCells(++colStart,rowStart,noOfCols);
        };

        var generateTable = function(noOfRows,noOfCols){
          var table = document.createElement("table");
          table.setAttribute("id", "grid");
          c.appendChild(table);
          generateRowsWithCols(1,noOfRows,noOfCols);
          placeDates();
        };

        var placeDates = function(){
          console.log('hello placeDates');
          var getToday = vm.date2.toString();
          console.log('get today num: ' + getToday);
          var todaySubstr = getToday.slice(8, 10);
          var monthSubstr = getToday.slice(4, 7);
          console.log("this month is:" + monthSubstr);
          var todayNum = Number(todaySubstr);
          console.log('today is:'+ todayNum);
          var startOfMonth = vm.date2.clone().subtract(todayNum, 'days');
          startOfMonth = startOfMonth.format("ddd");
          console.log('the start of the month was a:' + startOfMonth);
            if(monthSubstr.indexOf("Feb")> -1){
              document.getElementById("td26").innerHTML ="29";
              document.getElementById("td27").innerHTML ="28";
              document.getElementById("td31").innerHTML ="27";
              document.getElementById("td32").innerHTML ="26";
              document.getElementById("td33").innerHTML ="25";
              document.getElementById("td34").innerHTML ="24";
              document.getElementById("td35").innerHTML ="23";
              document.getElementById("td36").innerHTML ="22";
              document.getElementById("td37").innerHTML ="21";
              document.getElementById("td41").innerHTML ="20";
              document.getElementById("td42").innerHTML ="19";
              document.getElementById("td43").innerHTML ="18";
              document.getElementById("td44").innerHTML ="17";
              document.getElementById("td45").innerHTML ="16";
              document.getElementById("td46").innerHTML ="15";
              document.getElementById("td47").innerHTML ="14";
              document.getElementById("td51").innerHTML ="13";
              document.getElementById("td52").innerHTML ="12";
              document.getElementById("td53").innerHTML ="11";
              document.getElementById("td54").innerHTML ="10";
              document.getElementById("td55").innerHTML ="9";
              document.getElementById("td56").innerHTML ="8";
              document.getElementById("td57").innerHTML ="7";
              document.getElementById("td61").innerHTML ="6";
              document.getElementById("td62").innerHTML ="5";
              document.getElementById("td63").innerHTML ="4";
              document.getElementById("td64").innerHTML ="3";
              document.getElementById("td65").innerHTML ="2";
              document.getElementById("td66").innerHTML ="1";
              document.getElementById("td67").innerHTML =" ";
              document.getElementById("td71").innerHTML ="Saturday";
              document.getElementById("td72").innerHTML ="Friday";
              document.getElementById("td73").innerHTML ="Thursday";
              document.getElementById("td74").innerHTML ="Wednesday";
              document.getElementById("td75").innerHTML ="Tuesday";
              document.getElementById("td76").innerHTML ="Monday";
              document.getElementById("td77").innerHTML ="Sunday";
            }
              else if(monthSubstr.indexOf("Mar" || "May" || "Jul" || "Aug" || "Oct" || "Dec")> -1){
                if(startOfMonth.indexOf("Sun")> -1){
                  document.getElementById("td24").innerHTML="31";
                  document.getElementById("td25").innerHTML ="30";
                  document.getElementById("td26").innerHTML ="29";
                  document.getElementById("td27").innerHTML ="28";
                  document.getElementById("td31").innerHTML ="27";
                  document.getElementById("td32").innerHTML ="26";
                  document.getElementById("td33").innerHTML ="25";
                  document.getElementById("td34").innerHTML ="24";
                  document.getElementById("td35").innerHTML ="23";
                  document.getElementById("td36").innerHTML ="22";
                  document.getElementById("td37").innerHTML ="21";
                  document.getElementById("td41").innerHTML ="20";
                  document.getElementById("td42").innerHTML ="19";
                  document.getElementById("td43").innerHTML ="18";
                  document.getElementById("td44").innerHTML ="17";
                  document.getElementById("td45").innerHTML ="16";
                  document.getElementById("td46").innerHTML ="15";
                  document.getElementById("td47").innerHTML ="14";
                  document.getElementById("td51").innerHTML ="13";
                  document.getElementById("td52").innerHTML ="12";
                  document.getElementById("td53").innerHTML ="11";
                  document.getElementById("td54").innerHTML ="10";
                  document.getElementById("td55").innerHTML ="9";
                  document.getElementById("td56").innerHTML ="8";
                  document.getElementById("td57").innerHTML ="7";
                  document.getElementById("td61").innerHTML ="6";
                  document.getElementById("td62").innerHTML ="5";
                  document.getElementById("td63").innerHTML ="4";
                  document.getElementById("td64").innerHTML ="3";
                  document.getElementById("td65").innerHTML ="2";
                  document.getElementById("td66").innerHTML ="1";
                  document.getElementById("td67").innerHTML =" ";
                  document.getElementById("td71").innerHTML ="Saturday";
                  document.getElementById("td72").innerHTML ="Friday";
                  document.getElementById("td73").innerHTML ="Thursday";
                  document.getElementById("td74").innerHTML ="Wednesday";
                  document.getElementById("td75").innerHTML ="Tuesday";
                  document.getElementById("td76").innerHTML ="Monday";
                  document.getElementById("td77").innerHTML ="Sunday";
                }
                  else if (startOfMonth.indexOf("Mon")> -1){
                    document.getElementById("td23").innerHTML="31";
                    document.getElementById("td24").innerHTML="30";
                    document.getElementById("td25").innerHTML ="29";
                    document.getElementById("td26").innerHTML ="28";
                    document.getElementById("td27").innerHTML ="27";
                    document.getElementById("td31").innerHTML ="26";
                    document.getElementById("td32").innerHTML ="25";
                    document.getElementById("td33").innerHTML ="24";
                    document.getElementById("td34").innerHTML ="23";
                    document.getElementById("td35").innerHTML ="22";
                    document.getElementById("td36").innerHTML ="21";
                    document.getElementById("td37").innerHTML ="20";
                    document.getElementById("td41").innerHTML ="19";
                    document.getElementById("td42").innerHTML ="18";
                    document.getElementById("td43").innerHTML ="17";
                    document.getElementById("td44").innerHTML ="16";
                    document.getElementById("td45").innerHTML ="15";
                    document.getElementById("td46").innerHTML ="14";
                    document.getElementById("td47").innerHTML ="13";
                    document.getElementById("td51").innerHTML ="12";
                    document.getElementById("td52").innerHTML ="11";
                    document.getElementById("td53").innerHTML ="10";
                    document.getElementById("td54").innerHTML ="9";
                    document.getElementById("td55").innerHTML ="8";
                    document.getElementById("td56").innerHTML ="7";
                    document.getElementById("td57").innerHTML ="6";
                    document.getElementById("td61").innerHTML ="5";
                    document.getElementById("td62").innerHTML ="4";
                    document.getElementById("td63").innerHTML ="3";
                    document.getElementById("td64").innerHTML ="2";
                    document.getElementById("td65").innerHTML ="1";
                    document.getElementById("td66").innerHTML =" ";
                    document.getElementById("td67").innerHTML =" ";
                    document.getElementById("td71").innerHTML ="Saturday";
                    document.getElementById("td72").innerHTML ="Friday";
                    document.getElementById("td73").innerHTML ="Thursday";
                    document.getElementById("td74").innerHTML ="Wednesday";
                    document.getElementById("td75").innerHTML ="Tuesday";
                    document.getElementById("td76").innerHTML ="Monday";
                    document.getElementById("td77").innerHTML ="Sunday";
                  }
                    else if (startOfMonth.indexOf("Tue")> -1){
                      document.getElementById("td22").innerHTML="31";
                      document.getElementById("td23").innerHTML="30";
                      document.getElementById("td24").innerHTML="29";
                      document.getElementById("td25").innerHTML ="28";
                      document.getElementById("td26").innerHTML ="27";
                      document.getElementById("td27").innerHTML ="26";
                      document.getElementById("td31").innerHTML ="25";
                      document.getElementById("td32").innerHTML ="24";
                      document.getElementById("td33").innerHTML ="23";
                      document.getElementById("td34").innerHTML ="22";
                      document.getElementById("td35").innerHTML ="21";
                      document.getElementById("td36").innerHTML ="20";
                      document.getElementById("td37").innerHTML ="19";
                      document.getElementById("td41").innerHTML ="18";
                      document.getElementById("td42").innerHTML ="17";
                      document.getElementById("td43").innerHTML ="16";
                      document.getElementById("td44").innerHTML ="15";
                      document.getElementById("td45").innerHTML ="14";
                      document.getElementById("td46").innerHTML ="13";
                      document.getElementById("td47").innerHTML ="12";
                      document.getElementById("td51").innerHTML ="11";
                      document.getElementById("td52").innerHTML ="10";
                      document.getElementById("td53").innerHTML ="9";
                      document.getElementById("td54").innerHTML ="8";
                      document.getElementById("td55").innerHTML ="7";
                      document.getElementById("td56").innerHTML ="6";
                      document.getElementById("td57").innerHTML ="5";
                      document.getElementById("td61").innerHTML ="4";
                      document.getElementById("td62").innerHTML ="3";
                      document.getElementById("td63").innerHTML ="2";
                      document.getElementById("td64").innerHTML ="1";
                      document.getElementById("td65").innerHTML =" ";
                      document.getElementById("td66").innerHTML =" ";
                      document.getElementById("td67").innerHTML =" ";
                      document.getElementById("td71").innerHTML ="Saturday";
                      document.getElementById("td72").innerHTML ="Friday";
                      document.getElementById("td73").innerHTML ="Thursday";
                      document.getElementById("td74").innerHTML ="Wednesday";
                      document.getElementById("td75").innerHTML ="Tuesday";
                      document.getElementById("td76").innerHTML ="Monday";
                      document.getElementById("td77").innerHTML ="Sunday";
                    }
                      else if (startOfMonth.indexOf("Wed")> -1){
                        document.getElementById("td21").innerHTML ="31";
                        document.getElementById("td22").innerHTML="30";
                        document.getElementById("td23").innerHTML="29";
                        document.getElementById("td24").innerHTML="28";
                        document.getElementById("td25").innerHTML ="27";
                        document.getElementById("td26").innerHTML ="26";
                        document.getElementById("td27").innerHTML ="25";
                        document.getElementById("td31").innerHTML ="24";
                        document.getElementById("td32").innerHTML ="23";
                        document.getElementById("td33").innerHTML ="22";
                        document.getElementById("td34").innerHTML ="21";
                        document.getElementById("td35").innerHTML ="20";
                        document.getElementById("td36").innerHTML ="19";
                        document.getElementById("td37").innerHTML ="18";
                        document.getElementById("td41").innerHTML ="17";
                        document.getElementById("td42").innerHTML ="16";
                        document.getElementById("td43").innerHTML ="15";
                        document.getElementById("td44").innerHTML ="14";
                        document.getElementById("td45").innerHTML ="13";
                        document.getElementById("td46").innerHTML ="12";
                        document.getElementById("td47").innerHTML ="11";
                        document.getElementById("td51").innerHTML ="10";
                        document.getElementById("td52").innerHTML ="9";
                        document.getElementById("td53").innerHTML ="8";
                        document.getElementById("td54").innerHTML ="7";
                        document.getElementById("td55").innerHTML ="6";
                        document.getElementById("td56").innerHTML ="5";
                        document.getElementById("td57").innerHTML ="4";
                        document.getElementById("td61").innerHTML ="3";
                        document.getElementById("td62").innerHTML ="2";
                        document.getElementById("td63").innerHTML ="1";
                        document.getElementById("td64").innerHTML =" ";
                        document.getElementById("td65").innerHTML =" ";
                        document.getElementById("td66").innerHTML =" ";
                        document.getElementById("td67").innerHTML =" ";
                        document.getElementById("td71").innerHTML ="Saturday";
                        document.getElementById("td72").innerHTML ="Friday";
                        document.getElementById("td73").innerHTML ="Thursday";
                        document.getElementById("td74").innerHTML ="Wednesday";
                        document.getElementById("td75").innerHTML ="Tuesday";
                        document.getElementById("td76").innerHTML ="Monday";
                        document.getElementById("td77").innerHTML ="Sunday";
                      }
                        else if (startOfMonth.indexOf("Thu")> -1){
                          document.getElementById("td17").innerHTML ="31";
                          document.getElementById("td21").innerHTML ="30";
                          document.getElementById("td22").innerHTML="29";
                          document.getElementById("td23").innerHTML="28";
                          document.getElementById("td24").innerHTML="27";
                          document.getElementById("td25").innerHTML ="26";
                          document.getElementById("td26").innerHTML ="25";
                          document.getElementById("td27").innerHTML ="24";
                          document.getElementById("td31").innerHTML ="23";
                          document.getElementById("td32").innerHTML ="22";
                          document.getElementById("td33").innerHTML ="21";
                          document.getElementById("td34").innerHTML ="20";
                          document.getElementById("td35").innerHTML ="19";
                          document.getElementById("td36").innerHTML ="18";
                          document.getElementById("td37").innerHTML ="17";
                          document.getElementById("td41").innerHTML ="16";
                          document.getElementById("td42").innerHTML ="15";
                          document.getElementById("td43").innerHTML ="14";
                          document.getElementById("td44").innerHTML ="13";
                          document.getElementById("td45").innerHTML ="12";
                          document.getElementById("td46").innerHTML ="11";
                          document.getElementById("td47").innerHTML ="10";
                          document.getElementById("td51").innerHTML ="9";
                          document.getElementById("td52").innerHTML ="8";
                          document.getElementById("td53").innerHTML ="7";
                          document.getElementById("td54").innerHTML ="6";
                          document.getElementById("td55").innerHTML ="5";
                          document.getElementById("td56").innerHTML ="4";
                          document.getElementById("td57").innerHTML ="3";
                          document.getElementById("td61").innerHTML ="2";
                          document.getElementById("td62").innerHTML ="1";
                          document.getElementById("td63").innerHTML =" ";
                          document.getElementById("td64").innerHTML =" ";
                          document.getElementById("td65").innerHTML =" ";
                          document.getElementById("td66").innerHTML =" ";
                          document.getElementById("td67").innerHTML =" ";
                          document.getElementById("td71").innerHTML ="Saturday";
                          document.getElementById("td72").innerHTML ="Friday";
                          document.getElementById("td73").innerHTML ="Thursday";
                          document.getElementById("td74").innerHTML ="Wednesday";
                          document.getElementById("td75").innerHTML ="Tuesday";
                          document.getElementById("td76").innerHTML ="Monday";
                          document.getElementById("td77").innerHTML ="Sunday";
                        }
                          else if (startOfMonth.indexOf("Fri")> -1){
                            document.getElementById("td16").innerHTML = "31";
                            document.getElementById("td17").innerHTML = "30";
                            document.getElementById("td21").innerHTML = "29";
                            document.getElementById("td22").innerHTML="28";
                            document.getElementById("td23").innerHTML="27";
                            document.getElementById("td24").innerHTML="26";
                            document.getElementById("td25").innerHTML ="25";
                            document.getElementById("td26").innerHTML ="24";
                            document.getElementById("td27").innerHTML ="23";
                            document.getElementById("td31").innerHTML ="22";
                            document.getElementById("td32").innerHTML ="21";
                            document.getElementById("td33").innerHTML ="20";
                            document.getElementById("td34").innerHTML ="19";
                            document.getElementById("td35").innerHTML ="18";
                            document.getElementById("td36").innerHTML ="17";
                            document.getElementById("td37").innerHTML ="16";
                            document.getElementById("td41").innerHTML ="15";
                            document.getElementById("td42").innerHTML ="14";
                            document.getElementById("td43").innerHTML ="13";
                            document.getElementById("td44").innerHTML ="12";
                            document.getElementById("td45").innerHTML ="11";
                            document.getElementById("td46").innerHTML ="10";
                            document.getElementById("td47").innerHTML ="9";
                            document.getElementById("td51").innerHTML ="8";
                            document.getElementById("td52").innerHTML ="7";
                            document.getElementById("td53").innerHTML ="6";
                            document.getElementById("td54").innerHTML ="5";
                            document.getElementById("td55").innerHTML ="4";
                            document.getElementById("td56").innerHTML ="3";
                            document.getElementById("td57").innerHTML ="2";
                            document.getElementById("td61").innerHTML ="1";
                            document.getElementById("td62").innerHTML =" ";
                            document.getElementById("td63").innerHTML =" ";
                            document.getElementById("td64").innerHTML =" ";
                            document.getElementById("td65").innerHTML =" ";
                            document.getElementById("td66").innerHTML =" ";
                            document.getElementById("td67").innerHTML =" ";
                            document.getElementById("td71").innerHTML ="Saturday";
                            document.getElementById("td72").innerHTML ="Friday";
                            document.getElementById("td73").innerHTML ="Thursday";
                            document.getElementById("td74").innerHTML ="Wednesday";
                            document.getElementById("td75").innerHTML ="Tuesday";
                            document.getElementById("td76").innerHTML ="Monday";
                            document.getElementById("td77").innerHTML ="Sunday";
                          }
                            else {
                              document.getElementById("td25").innerHTML ="31";
                              document.getElementById("td26").innerHTML ="30";
                              document.getElementById("td27").innerHTML ="29";
                              document.getElementById("td31").innerHTML ="28";
                              document.getElementById("td32").innerHTML ="27";
                              document.getElementById("td33").innerHTML ="26";
                              document.getElementById("td34").innerHTML ="25";
                              document.getElementById("td35").innerHTML ="24";
                              document.getElementById("td36").innerHTML ="23";
                              document.getElementById("td37").innerHTML ="22";
                              document.getElementById("td41").innerHTML ="21";
                              document.getElementById("td42").innerHTML ="20";
                              document.getElementById("td43").innerHTML ="19";
                              document.getElementById("td44").innerHTML ="18";
                              document.getElementById("td45").innerHTML ="17";
                              document.getElementById("td46").innerHTML ="16";
                              document.getElementById("td47").innerHTML ="15";
                              document.getElementById("td51").innerHTML ="14";
                              document.getElementById("td52").innerHTML ="13";
                              document.getElementById("td53").innerHTML ="12";
                              document.getElementById("td54").innerHTML ="11";
                              document.getElementById("td55").innerHTML ="10";
                              document.getElementById("td56").innerHTML ="9";
                              document.getElementById("td57").innerHTML ="8";
                              document.getElementById("td61").innerHTML ="7";
                              document.getElementById("td62").innerHTML ="6";
                              document.getElementById("td63").innerHTML ="5";
                              document.getElementById("td64").innerHTML ="4";
                              document.getElementById("td65").innerHTML ="3";
                              document.getElementById("td66").innerHTML ="2";
                              document.getElementById("td67").innerHTML ="1";
                              document.getElementById("td71").innerHTML ="Saturday";
                              document.getElementById("td72").innerHTML ="Friday";
                              document.getElementById("td73").innerHTML ="Thursday";
                              document.getElementById("td74").innerHTML ="Wednesday";
                              document.getElementById("td75").innerHTML ="Tuesday";
                              document.getElementById("td76").innerHTML ="Monday";
                              document.getElementById("td77").innerHTML ="Sunday";
                            }
              }
                else {
                  if(startOfMonth.indexOf("Sun")> -1){
                    document.getElementById("td25").innerHTML ="30";
                    document.getElementById("td26").innerHTML ="29";
                    document.getElementById("td27").innerHTML ="28";
                    document.getElementById("td31").innerHTML ="27";
                    document.getElementById("td32").innerHTML ="26";
                    document.getElementById("td33").innerHTML ="25";
                    document.getElementById("td34").innerHTML ="24";
                    document.getElementById("td35").innerHTML ="23";
                    document.getElementById("td36").innerHTML ="22";
                    document.getElementById("td37").innerHTML ="21";
                    document.getElementById("td41").innerHTML ="20";
                    document.getElementById("td42").innerHTML ="19";
                    document.getElementById("td43").innerHTML ="18";
                    document.getElementById("td44").innerHTML ="17";
                    document.getElementById("td45").innerHTML ="16";
                    document.getElementById("td46").innerHTML ="15";
                    document.getElementById("td47").innerHTML ="14";
                    document.getElementById("td51").innerHTML ="13";
                    document.getElementById("td52").innerHTML ="12";
                    document.getElementById("td53").innerHTML ="11";
                    document.getElementById("td54").innerHTML ="10";
                    document.getElementById("td55").innerHTML ="9";
                    document.getElementById("td56").innerHTML ="8";
                    document.getElementById("td57").innerHTML ="7";
                    document.getElementById("td61").innerHTML ="6";
                    document.getElementById("td62").innerHTML ="5";
                    document.getElementById("td63").innerHTML ="4";
                    document.getElementById("td64").innerHTML ="3";
                    document.getElementById("td65").innerHTML ="2";
                    document.getElementById("td66").innerHTML ="1";
                    document.getElementById("td67").innerHTML =" ";
                    document.getElementById("td71").innerHTML ="Saturday";
                    document.getElementById("td72").innerHTML ="Friday";
                    document.getElementById("td73").innerHTML ="Thursday";
                    document.getElementById("td74").innerHTML ="Wednesday";
                    document.getElementById("td75").innerHTML ="Tuesday";
                    document.getElementById("td76").innerHTML ="Monday";
                    document.getElementById("td77").innerHTML ="Sunday";
                  }
                    else if (startOfMonth.indexOf("Mon")> -1){
                      document.getElementById("td24").innerHTML="30";
                      document.getElementById("td25").innerHTML ="29";
                      document.getElementById("td26").innerHTML ="28";
                      document.getElementById("td27").innerHTML ="27";
                      document.getElementById("td31").innerHTML ="26";
                      document.getElementById("td32").innerHTML ="25";
                      document.getElementById("td33").innerHTML ="24";
                      document.getElementById("td34").innerHTML ="23";
                      document.getElementById("td35").innerHTML ="22";
                      document.getElementById("td36").innerHTML ="21";
                      document.getElementById("td37").innerHTML ="20";
                      document.getElementById("td41").innerHTML ="19";
                      document.getElementById("td42").innerHTML ="18";
                      document.getElementById("td43").innerHTML ="17";
                      document.getElementById("td44").innerHTML ="16";
                      document.getElementById("td45").innerHTML ="15";
                      document.getElementById("td46").innerHTML ="14";
                      document.getElementById("td47").innerHTML ="13";
                      document.getElementById("td51").innerHTML ="12";
                      document.getElementById("td52").innerHTML ="11";
                      document.getElementById("td53").innerHTML ="10";
                      document.getElementById("td54").innerHTML ="9";
                      document.getElementById("td55").innerHTML ="8";
                      document.getElementById("td56").innerHTML ="7";
                      document.getElementById("td57").innerHTML ="6";
                      document.getElementById("td61").innerHTML ="5";
                      document.getElementById("td62").innerHTML ="4";
                      document.getElementById("td63").innerHTML ="3";
                      document.getElementById("td64").innerHTML ="2";
                      document.getElementById("td65").innerHTML ="1";
                      document.getElementById("td66").innerHTML =" ";
                      document.getElementById("td67").innerHTML =" ";
                      document.getElementById("td71").innerHTML ="Saturday";
                      document.getElementById("td72").innerHTML ="Friday";
                      document.getElementById("td73").innerHTML ="Thursday";
                      document.getElementById("td74").innerHTML ="Wednesday";
                      document.getElementById("td75").innerHTML ="Tuesday";
                      document.getElementById("td76").innerHTML ="Monday";
                      document.getElementById("td77").innerHTML ="Sunday";
                    }
                      else if (startOfMonth.indexOf("Tue")> -1){
                        document.getElementById("td23").innerHTML="30";
                        document.getElementById("td24").innerHTML="29";
                        document.getElementById("td25").innerHTML ="28";
                        document.getElementById("td26").innerHTML ="27";
                        document.getElementById("td27").innerHTML ="26";
                        document.getElementById("td31").innerHTML ="25";
                        document.getElementById("td32").innerHTML ="24";
                        document.getElementById("td33").innerHTML ="23";
                        document.getElementById("td34").innerHTML ="22";
                        document.getElementById("td35").innerHTML ="21";
                        document.getElementById("td36").innerHTML ="20";
                        document.getElementById("td37").innerHTML ="19";
                        document.getElementById("td41").innerHTML ="18";
                        document.getElementById("td42").innerHTML ="17";
                        document.getElementById("td43").innerHTML ="16";
                        document.getElementById("td44").innerHTML ="15";
                        document.getElementById("td45").innerHTML ="14";
                        document.getElementById("td46").innerHTML ="13";
                        document.getElementById("td47").innerHTML ="12";
                        document.getElementById("td51").innerHTML ="11";
                        document.getElementById("td52").innerHTML ="10";
                        document.getElementById("td53").innerHTML ="9";
                        document.getElementById("td54").innerHTML ="8";
                        document.getElementById("td55").innerHTML ="7";
                        document.getElementById("td56").innerHTML ="6";
                        document.getElementById("td57").innerHTML ="5";
                        document.getElementById("td61").innerHTML ="4";
                        document.getElementById("td62").innerHTML ="3";
                        document.getElementById("td63").innerHTML ="2";
                        document.getElementById("td64").innerHTML ="1";
                        document.getElementById("td65").innerHTML =" ";
                        document.getElementById("td66").innerHTML =" ";
                        document.getElementById("td67").innerHTML =" ";
                        document.getElementById("td71").innerHTML ="Saturday";
                        document.getElementById("td72").innerHTML ="Friday";
                        document.getElementById("td73").innerHTML ="Thursday";
                        document.getElementById("td74").innerHTML ="Wednesday";
                        document.getElementById("td75").innerHTML ="Tuesday";
                        document.getElementById("td76").innerHTML ="Monday";
                        document.getElementById("td77").innerHTML ="Sunday";
                      }
                        else if (startOfMonth.indexOf("Wed")> -1){
                          document.getElementById("td22").innerHTML="30";
                          document.getElementById("td23").innerHTML="29";
                          document.getElementById("td24").innerHTML="28";
                          document.getElementById("td25").innerHTML ="27";
                          document.getElementById("td26").innerHTML ="26";
                          document.getElementById("td27").innerHTML ="25";
                          document.getElementById("td31").innerHTML ="24";
                          document.getElementById("td32").innerHTML ="23";
                          document.getElementById("td33").innerHTML ="22";
                          document.getElementById("td34").innerHTML ="21";
                          document.getElementById("td35").innerHTML ="20";
                          document.getElementById("td36").innerHTML ="19";
                          document.getElementById("td37").innerHTML ="18";
                          document.getElementById("td41").innerHTML ="17";
                          document.getElementById("td42").innerHTML ="16";
                          document.getElementById("td43").innerHTML ="15";
                          document.getElementById("td44").innerHTML ="14";
                          document.getElementById("td45").innerHTML ="13";
                          document.getElementById("td46").innerHTML ="12";
                          document.getElementById("td47").innerHTML ="11";
                          document.getElementById("td51").innerHTML ="10";
                          document.getElementById("td52").innerHTML ="9";
                          document.getElementById("td53").innerHTML ="8";
                          document.getElementById("td54").innerHTML ="7";
                          document.getElementById("td55").innerHTML ="6";
                          document.getElementById("td56").innerHTML ="5";
                          document.getElementById("td57").innerHTML ="4";
                          document.getElementById("td61").innerHTML ="3";
                          document.getElementById("td62").innerHTML ="2";
                          document.getElementById("td63").innerHTML ="1";
                          document.getElementById("td64").innerHTML =" ";
                          document.getElementById("td65").innerHTML =" ";
                          document.getElementById("td66").innerHTML =" ";
                          document.getElementById("td67").innerHTML =" ";
                          document.getElementById("td71").innerHTML ="Saturday";
                          document.getElementById("td72").innerHTML ="Friday";
                          document.getElementById("td73").innerHTML ="Thursday";
                          document.getElementById("td74").innerHTML ="Wednesday";
                          document.getElementById("td75").innerHTML ="Tuesday";
                          document.getElementById("td76").innerHTML ="Monday";
                          document.getElementById("td77").innerHTML ="Sunday";
                        }
                          else if (startOfMonth.indexOf("Thu")> -1){
                            document.getElementById("td21").innerHTML = "30";
                            document.getElementById("td22").innerHTML="29";
                            document.getElementById("td23").innerHTML="28";
                            document.getElementById("td24").innerHTML="27";
                            document.getElementById("td25").innerHTML ="26";
                            document.getElementById("td26").innerHTML ="25";
                            document.getElementById("td27").innerHTML ="24";
                            document.getElementById("td31").innerHTML ="23";
                            document.getElementById("td32").innerHTML ="22";
                            document.getElementById("td33").innerHTML ="21";
                            document.getElementById("td34").innerHTML ="20";
                            document.getElementById("td35").innerHTML ="19";
                            document.getElementById("td36").innerHTML ="18";
                            document.getElementById("td37").innerHTML ="17";
                            document.getElementById("td41").innerHTML ="16";
                            document.getElementById("td42").innerHTML ="15";
                            document.getElementById("td43").innerHTML ="14";
                            document.getElementById("td44").innerHTML ="13";
                            document.getElementById("td45").innerHTML ="12";
                            document.getElementById("td46").innerHTML ="11";
                            document.getElementById("td47").innerHTML ="10";
                            document.getElementById("td51").innerHTML ="9";
                            document.getElementById("td52").innerHTML ="8";
                            document.getElementById("td53").innerHTML ="7";
                            document.getElementById("td54").innerHTML ="6";
                            document.getElementById("td55").innerHTML ="5";
                            document.getElementById("td56").innerHTML ="4";
                            document.getElementById("td57").innerHTML ="3";
                            document.getElementById("td61").innerHTML ="2";
                            document.getElementById("td62").innerHTML ="1";
                            document.getElementById("td63").innerHTML =" ";
                            document.getElementById("td64").innerHTML =" ";
                            document.getElementById("td65").innerHTML =" ";
                            document.getElementById("td66").innerHTML =" ";
                            document.getElementById("td67").innerHTML =" ";
                            document.getElementById("td71").innerHTML ="Saturday";
                            document.getElementById("td72").innerHTML ="Friday";
                            document.getElementById("td73").innerHTML ="Thursday";
                            document.getElementById("td74").innerHTML ="Wednesday";
                            document.getElementById("td75").innerHTML ="Tuesday";
                            document.getElementById("td76").innerHTML ="Monday";
                            document.getElementById("td77").innerHTML ="Sunday";
                          }
                            else if (startOfMonth.indexOf("Fri")> -1){
                              document.getElementById("td17").innerHTML = "30";
                              document.getElementById("td21").innerHTML = "29";
                              document.getElementById("td22").innerHTML="28";
                              document.getElementById("td23").innerHTML="27";
                              document.getElementById("td24").innerHTML="26";
                              document.getElementById("td25").innerHTML ="25";
                              document.getElementById("td26").innerHTML ="24";
                              document.getElementById("td27").innerHTML ="23";
                              document.getElementById("td31").innerHTML ="22";
                              document.getElementById("td32").innerHTML ="21";
                              document.getElementById("td33").innerHTML ="20";
                              document.getElementById("td34").innerHTML ="19";
                              document.getElementById("td35").innerHTML ="18";
                              document.getElementById("td36").innerHTML ="17";
                              document.getElementById("td37").innerHTML ="16";
                              document.getElementById("td41").innerHTML ="15";
                              document.getElementById("td42").innerHTML ="14";
                              document.getElementById("td43").innerHTML ="13";
                              document.getElementById("td44").innerHTML ="12";
                              document.getElementById("td45").innerHTML ="11";
                              document.getElementById("td46").innerHTML ="10";
                              document.getElementById("td47").innerHTML ="9";
                              document.getElementById("td51").innerHTML ="8";
                              document.getElementById("td52").innerHTML ="7";
                              document.getElementById("td53").innerHTML ="6";
                              document.getElementById("td54").innerHTML ="5";
                              document.getElementById("td55").innerHTML ="4";
                              document.getElementById("td56").innerHTML ="3";
                              document.getElementById("td57").innerHTML ="2";
                              document.getElementById("td61").innerHTML ="1";
                              document.getElementById("td62").innerHTML =" ";
                              document.getElementById("td63").innerHTML =" ";
                              document.getElementById("td64").innerHTML =" ";
                              document.getElementById("td65").innerHTML =" ";
                              document.getElementById("td66").innerHTML =" ";
                              document.getElementById("td67").innerHTML =" ";
                              document.getElementById("td71").innerHTML ="Saturday";
                              document.getElementById("td72").innerHTML ="Friday";
                              document.getElementById("td73").innerHTML ="Thursday";
                              document.getElementById("td74").innerHTML ="Wednesday";
                              document.getElementById("td75").innerHTML ="Tuesday";
                              document.getElementById("td76").innerHTML ="Monday";
                              document.getElementById("td77").innerHTML ="Sunday";
                            }
                              else {

                                document.getElementById("td25").innerHTML ="31";
                                document.getElementById("td26").innerHTML ="30";
                                document.getElementById("td27").innerHTML ="29";
                                document.getElementById("td31").innerHTML ="28";
                                document.getElementById("td32").innerHTML ="27";
                                document.getElementById("td33").innerHTML ="26";
                                document.getElementById("td34").innerHTML ="25";
                                document.getElementById("td35").innerHTML ="24";
                                document.getElementById("td36").innerHTML ="23";
                                document.getElementById("td37").innerHTML ="22";
                                document.getElementById("td41").innerHTML ="21";
                                document.getElementById("td42").innerHTML ="20";
                                document.getElementById("td43").innerHTML ="19";
                                document.getElementById("td44").innerHTML ="18";
                                document.getElementById("td45").innerHTML ="17";
                                document.getElementById("td46").innerHTML ="16";
                                document.getElementById("td47").innerHTML ="15";
                                document.getElementById("td51").innerHTML ="14";
                                document.getElementById("td52").innerHTML ="13";
                                document.getElementById("td53").innerHTML ="12";
                                document.getElementById("td54").innerHTML ="11";
                                document.getElementById("td55").innerHTML ="10";
                                document.getElementById("td56").innerHTML ="9";
                                document.getElementById("td57").innerHTML ="8";
                                document.getElementById("td61").innerHTML ="7";
                                document.getElementById("td62").innerHTML ="6";
                                document.getElementById("td63").innerHTML ="5";
                                document.getElementById("td64").innerHTML ="4";
                                document.getElementById("td65").innerHTML ="3";
                                document.getElementById("td66").innerHTML ="2";
                                document.getElementById("td67").innerHTML ="1";
                                document.getElementById("td71").innerHTML ="Saturday";
                                document.getElementById("td72").innerHTML ="Friday";
                                document.getElementById("td73").innerHTML ="Thursday";
                                document.getElementById("td74").innerHTML ="Wednesday";
                                document.getElementById("td75").innerHTML ="Tuesday";
                                document.getElementById("td76").innerHTML ="Monday";
                                document.getElementById("td77").innerHTML ="Sunday";
                              }
                }
        }
  generateTable(7,7);
  }

    vm.createCalendar();


    //vm.date2 = vm.forwardMonth();

    vm.showEvents = function(){
      console.log('working on this');
    };

  };



