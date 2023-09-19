function isCalendlyEvent(e) {
            return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
        };

        window.addEventListener("message", function(e) {
            if (isCalendlyEvent(e)) {
                /* Example to get the name of the event */
                console.log("Event name:", e.data.event);

                /* Example to get the payload of the event */
                console.log("Event details:", e.data.payload);
                if (e.data.event == "calendly.event_scheduled") {
                    var event_url = e.data.payload.event.uri;
                    console.log(e.data.payload.event.uri);
                    console.log("All good");
                    const parts = event_url.split('/');
                    const lastId = parts[parts.length - 1];
                    window.top.location.href = "https://thetokenspace.com/sessions?event_id="+lastId;
                }
            }
        });
