"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Copy,
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  PlusCircle,
  Search,
  Share2,
  Ticket,
  Trophy,
  Twitter,
  Users2,
  Video,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Overview } from "@/components/dashboard/overview";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const eventCategories = [
  {
    name: "Concerts",
    icon: Music2,
    count: 12,
    color: "bg-pink-500/10 text-pink-500",
    lastUpdate: "2 hours ago",
  },
  {
    name: "Conferences",
    icon: Users2,
    count: 8,
    color: "bg-blue-500/10 text-blue-500",
    lastUpdate: "5 hours ago",
  },
  {
    name: "Sports",
    icon: Trophy,
    count: 6,
    color: "bg-green-500/10 text-green-500",
    lastUpdate: "1 day ago",
  },
  {
    name: "Others",
    icon: Video,
    count: 4,
    color: "bg-purple-500/10 text-purple-500",
    lastUpdate: "3 days ago",
  },
];

const recentAttendees = [
  {
    name: "Sarah Davis",
    email: "sarah@example.com",
    ticketType: "VIP Pass",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
  },
  {
    name: "Michael Chen",
    email: "michael@example.com",
    ticketType: "Regular",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=64&h=64&fit=crop&crop=faces",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    ticketType: "Early Bird",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  },
];

const socialLinks = [
  { icon: Twitter, color: "bg-blue-400" },
  { icon: Facebook, color: "bg-blue-600" },
  { icon: Instagram, color: "bg-pink-600" },
  { icon: Linkedin, color: "bg-blue-700" },
];

export default function DashboardPage() {
  const [referralCode] = useState("EVENT-FLOW-2024");
  const totalTickets = 1280;
  const soldTickets = 820;
  const soldPercentage =
    Math.round((soldTickets / totalTickets) * 100 * 100) / 100;

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    // You could add a toast notification here
  };

  return (
    <div className="space-y-8 animate-in">
      {/* Search and Create Event */}
      <div className="flex justify-between items-center">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search events, attendees, or tickets..."
            className="pl-10"
          />
        </div>
        <Link href="/dashboard/events/new">
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Create Event
          </Button>
        </Link>
      </div>

      {/* Ticket Sales Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Ticket Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Tickets Sold</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{soldPercentage}%</div>
                    <div className="text-sm text-muted-foreground">Sold</div>
                  </div>
                </div>
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    className="stroke-muted stroke-2 fill-none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    className="stroke-primary stroke-2 fill-none"
                    strokeDasharray={`${soldPercentage * 3.51} 351`}
                  />
                </svg>
              </div>
              <div className="text-sm text-muted-foreground mt-4">
                {soldTickets} / {totalTickets} Tickets
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Event Categories */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {eventCategories.map((category) => (
          <Card key={category.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {category.name}
              </CardTitle>
              <div className={`${category.color} p-2 rounded-lg`}>
                <category.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{category.count}</div>
              <p className="text-xs text-muted-foreground">
                Last updated {category.lastUpdate}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Attendees and Referral */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Attendees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentAttendees.map((attendee) => (
                <div
                  key={attendee.email}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={attendee.avatar} />
                      <AvatarFallback>
                        {attendee.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{attendee.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {attendee.email}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    {attendee.ticketType}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Event Referral</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-2">
              <Input value={referralCode} readOnly />
              <Button variant="outline" size="icon" onClick={copyReferralCode}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <div className="text-sm font-medium mb-2">
                Share on Social Media
              </div>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`${social.color} text-white hover:opacity-90`}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
