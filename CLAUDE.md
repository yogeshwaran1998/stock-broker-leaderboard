# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Indian Stock Broker Market Share Dashboard - A React-based financial dashboard showing market share of Kotak Securities vs peers across Equity, F&O, and Commodity segments.

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Charts**: Recharts
- **Icons**: Lucide React
- **Styling**: CSS with CSS Variables for theming

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

- `src/App.jsx` - Main component with theme state and segment switching
- `src/styles/theme.css` - CSS variables for light/dark themes
- `src/data/brokerData.js` - Static market data for brokers
- `src/components/` - UI components (Header, SegmentTabs, MetricCards, MarketShareChart, BrokerTable, DataSources)

## Theme System

Uses CSS variables with `data-theme` attribute on `<html>` element. Theme is controlled via React state in App.jsx.
