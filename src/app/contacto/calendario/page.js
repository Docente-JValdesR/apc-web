"use client";

import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useState } from "react";

dayjs.locale("es");
dayjs.extend(customParseFormat);

export default function Page() {
  const [eventsData, setEventsData] = useState([]);
  const [currentView, setCurrentView] = useState("work_week");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const localizer = dayjsLocalizer(dayjs);

  useEffect(() => {
    const fetchData = async () => {
      const resEvent = await fetch("/json/calendario.json");
      if (resEvent.ok) {
        const json = await resEvent.json();
        setEventsData(json.calendario);
      } else {
        console.error("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  const events = eventsData.map((ticket) => {
    return {
      start: dayjs(ticket.attributes.start, "YYYY-MM-DDTHH:mm:ss").toDate(),
      end: dayjs(ticket.attributes.end, "YYYY-MM-DDTHH:mm:ss").toDate(),
      title: ticket.attributes.title,
      teacher: ticket.attributes.teacher,
      course: ticket.attributes.course,
      description: ticket.attributes.description,
    };
  });

  const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    work_week: "Semana",
  };

  const eventPropGetter = (event, start, end, isSelected) => {
    let newStyle = {
      backgroundColor: "#2e86a1",
      color: "white",
      borderRadius: "5px",
      border: "1px solid black",
    };

    if (dayjs(start).day() === 0 || dayjs(start).day() === 6) {
      newStyle.display = "none";
    }

    return {
      style: newStyle,
    };
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleEventClick = (event) => {
    if (currentView === "month" || currentView === "work_week") {
      setSelectedDate(event.start);
      setCurrentView("day");
    }
  };

  const renderEventContent = (event) => {
    if (currentView === "month") {
      return <h3>{event.title}</h3>;
    } else if (currentView === "day") {
      return (
        <div className="grid rounded">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
      );
    } else if (currentView === "work_week") {
      return (
        <div className="grid rounded">
          <h3>{event.title}</h3>
          <p>{event.teacher}</p>
        </div>
      );
    }
  };

  return (
    <div className="mt-28 mb-10 full-width-section">
      <div
        className="lg:mx-auto lg:w-10/12 lg:p-10 bg-white"
        style={{
          height: "80vh",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          color: "#000",
          fontSize: "12px",
        }}
      >
        <Calendar
          localizer={localizer}
          events={events}
          min={dayjs("2024-01-01T08:00:00").toDate()}
          max={dayjs("2024-12-31T17:00:00").toDate()}
          messages={messages}
          views={{
            week: false,
            day: true,
            work_week: true,
            month: true,
          }}
          defaultView="month"
          onView={handleViewChange}
          onNavigate={(date) => setSelectedDate(date)}
          date={selectedDate}
          view={currentView}
          components={{
            event: ({ event }) => renderEventContent(event),
          }}
          eventPropGetter={eventPropGetter}
          onSelectEvent={handleEventClick}
        />
      </div>
    </div>
  );
}
