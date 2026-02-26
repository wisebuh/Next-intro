"use client";

import { useRouter } from "next/navigation";
import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/Event-list";
import EventsSearch from "@/components/events/event-search";

export default function AllEventPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year: number, month: number) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}