'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  Ticket,
  Users,
} from 'lucide-react';
import { useParams } from 'next/navigation';

const event = {
  id: 1,
  title: 'Tech Conference 2025',
  date: 'March 15, 2025',
  time: '9:00 AM - 6:00 PM',
  location: 'Moscone Center',
  address: '747 Howard St, San Francisco, CA 94103',
  description: `Join us for the biggest tech conference of the year. Network with industry leaders, attend workshops, and learn about the latest technologies.

The conference will feature:
- Keynote speakers from leading tech companies
- Interactive workshops and hands-on sessions
- Networking opportunities
- Product demonstrations
- Career fair`,
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=400&fit=crop',
  tickets: [
    {
      type: 'Early Bird',
      price: 299,
      available: 50,
    },
    {
      type: 'Regular',
      price: 399,
      available: 200,
    },
    {
      type: 'VIP',
      price: 699,
      available: 20,
    },
  ],
};

export default function EventDetailsPage() {
  const params = useParams();

  return (
    <div className="space-y-6 animate-in pb-8">
      <div className="relative h-[300px] -mx-6 -mt-6">
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold">{event.title}</h1>
              <div className="flex gap-4 text-sm mt-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {event.time}
                </div>
              </div>
            </div>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line">{event.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {event.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{event.address}</p>
              <div className="mt-4 aspect-video bg-muted rounded-lg" />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tickets</CardTitle>
              <CardDescription>Select your ticket type</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {event.tickets.map((ticket) => (
                <div
                  key={ticket.type}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold">{ticket.type}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Ticket className="h-4 w-4" />
                      {ticket.available} available
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${ticket.price}</div>
                    <Button size="sm" className="mt-2">
                      Buy Ticket
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Attendees
                </div>
                <span className="font-semibold">245/500</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Ticket className="h-4 w-4" />
                  Tickets Sold
                </div>
                <span className="font-semibold">270</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}