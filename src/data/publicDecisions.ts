// src/data/publicDecisions.ts
import { Decision } from "../types";

export const publicDecisions: Decision[] = [
  {
    id: "pub-1",
    title: "Standardized on PostgreSQL for relational storage",
    status: "Active",
    description:
      "Evaluated MySQL and DynamoDB. Selected PostgreSQL for robust JSONB support, strict ACID compliance, and rich extension ecosystem.",
    date: "2025-04-18",
    author: "Core Architecture Guild",
  },
  {
    id: "pub-2",
    title: "Adopted Tailwind CSS for unified styling",
    status: "Active",
    description:
      "Replaced custom CSS modules to enforce consistent token constraints, reduce CSS bundle duplication, and accelerate frontend iteration.",
    date: "2025-03-29",
    author: "Frontend Platform Team",
  },
  {
    id: "pub-3",
    title: "Replaced REST polling with WebSockets for real-time updates",
    status: "Active",
    description:
      "HTTP polling at 3s intervals degraded database throughput during peak traffic. WebSockets reduced backend I/O load by 74%.",
    date: "2025-02-14",
    author: "Infrastructure & Platform",
  },
  {
    id: "pub-4",
    title: "Migrated from Monolith to Modular Microservices",
    status: "Superseded",
    description:
      "Premature service decomposition increased network latency and deployment complexity. Replaced by a modular monolith architecture.",
    date: "2024-11-05",
    author: "Engineering Leadership",
  },
  {
    id: "pub-5",
    title: "Deprecated legacy OAuth 1.0 authentication",
    status: "Superseded",
    description:
      "Legacy tokens lacked granular scope control and refresh mechanisms. Fully replaced by OAuth 2.0 with PKCE extensions.",
    date: "2024-09-12",
    author: "Security Team",
  },
  {
    id: "pub-6",
    title: "Adopted Vite over Webpack for frontend builds",
    status: "Active",
    description:
      "Replaced Webpack 5. HMR boot times dropped from 4.2 seconds to 110ms, significantly boosting developer feedback velocity.",
    date: "2024-08-01",
    author: "DX & Tooling Team",
  },
];
