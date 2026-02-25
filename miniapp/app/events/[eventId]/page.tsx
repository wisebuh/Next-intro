"use client"

import { useParams } from 'next/navigation'
import { getEventById } from '@/dummy-data';
import { Fragment } from 'react';
import EventSummary from "@/event-detail/event-summary";
import EventLogistics from "@/event-detail/event-logistics";
import EventContent from "@/event-detail/event-content";

export default function EventId() {
  const params = useParams();
  const eventId = params.eventId;
  const event = getEventById(eventId)

  if (!eventId) return <p>Loading...</p>
  if (!event) return <p>No Event Found</p>

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}