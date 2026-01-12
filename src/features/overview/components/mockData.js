import { AlertCircle, Clock, AlertTriangle, Activity } from "lucide-react";

// --- DATA LAYER (Mock Data) ---

export const PROJECT_INFO = {
  name: "Phoenix Backend Upgrade",
  sprint: "Sprint 24",
  status: "On Track",
  daysLeft: 4,
  totalDays: 14,
};

export const STATS = [
  {
    label: "Open Issues",
    value: 24,
    trend: "+2",
    trendUp: true,
    icon: AlertCircle,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    label: "Due Today",
    value: 5,
    trend: "-1",
    trendUp: false,
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    label: "Blocked",
    value: 3,
    trend: "+1",
    trendUp: true,
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    label: "High Priority",
    value: 8,
    trend: "0",
    trendUp: false,
    icon: Activity,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

export const MY_ISSUES = [
  {
    id: "PHX-102",
    title: "Refactor API Authentication Middleware",
    status: "In Progress",
    priority: "High",
    due: "Today",
  },
  {
    id: "PHX-105",
    title: "Update Database Schema for User Profiles",
    status: "To Do",
    priority: "Medium",
    due: "Tomorrow",
  },
  {
    id: "PHX-112",
    title: "Fix Race Condition in Payment Webhook",
    status: "Review",
    priority: "Critical",
    due: "Today",
  },
  {
    id: "PHX-120",
    title: "Write Unit Tests for Notification Service",
    status: "In Progress",
    priority: "Low",
    due: "Fri, Oct 24",
  },
];

export const WORKFLOW_STATS = [
  { status: "To Do", count: 8, color: "bg-slate-300" },
  { status: "In Progress", count: 12, color: "bg-blue-500" },
  { status: "In Review", count: 4, color: "bg-purple-500" },
  { status: "Done", count: 32, color: "bg-green-500" },
];

export const ACTIVITY_FEED = [
  {
    user: "Sarah J.",
    action: "commented on",
    target: "PHX-102",
    time: "10m ago",
  },
  {
    user: "Mike T.",
    action: "moved",
    target: "PHX-99",
    to: "Done",
    time: "1h ago",
  },
  { user: "System", action: "deployed", target: "Build #402", time: "3h ago" },
  { user: "Sarah J.", action: "created", target: "PHX-125", time: "4h ago" },
];

export const DEADLINES = [
  { id: "PHX-102", title: "Auth Middleware", due: "Today", overdue: false },
  { id: "PHX-98", title: "Legacy Cleanup", due: "Yesterday", overdue: true },
  { id: "PHX-112", title: "Payment Fix", due: "Today", overdue: false },
  { id: "PHX-130", title: "Documentation", due: "Oct 25", overdue: false },
];
