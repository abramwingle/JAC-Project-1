function listUpcomingEvents() {
    var calendarId = 'primary';
    var optionalArgs = {
      timeMin: (new Date()).toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime'
    };
    var response = Calendar.Events.list(calendarId, optionalArgs);
    var events = response.items;
    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        var event = events[i];
        var when = event.start.dateTime;
        if (!when) {
          when = event.start.date;
        }
        console.log('%s (%s)', event.summary, when);
      }
    } else {
      console.log('No upcoming events found.');
    }
  }
  var test = "test";
  console.log(test);