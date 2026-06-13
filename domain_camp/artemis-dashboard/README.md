# Artemis Orbital Launch Dashboard

Demo React app simulating a rocket pre-launch monitoring dashboard.

Quick start:

1. Install deps

```bash
cd domain_camp/artemis-dashboard
npm install
npm run dev
```

This project demonstrates:
- `DashboardPanel` composition using `children` prop
- `LaunchCommander` with `useEffect` timer and functional state updates
- `TelemetrySubsystem` using inline `&&` conditional rendering
- Proper cleanup of intervals and abort handling
