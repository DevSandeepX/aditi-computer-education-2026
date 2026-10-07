# Computer Institute Website — Technology Stack

## 1. Project Overview

The Computer Institute Website will be built using a modern full-stack web architecture focused on:

- Performance
- Scalability
- SEO
- Responsive design
- Maintainability
- Type safety
- Secure admin management
- Easy deployment

The application will use **Next.js + TypeScript** for the frontend and backend, **PostgreSQL + Drizzle ORM** for data management, and **Clerk** for authentication.

---

# 2. Core Technology Stack

| Technology      | Purpose                          |
| --------------- | -------------------------------- |
| Next.js         | Full-stack React framework       |
| TypeScript      | Type-safe development            |
| React           | UI development                   |
| Tailwind CSS    | Styling                          |
| shadcn/ui       | Reusable UI components           |
| PostgreSQL      | Relational database              |
| Drizzle ORM     | Database ORM                     |
| Clerk           | Authentication & user management |
| UploadThing     | File/image uploads               |
| React Hook Form | Form management                  |
| Zod             | Validation                       |
| Sonner          | Toast notifications              |
| Lucide React    | Icons                            |
| Vercel          | Deployment                       |

---

# 3. Frontend

## Next.js

**Version:** Latest stable version compatible with the project.

Next.js will be used as the primary application framework.

### Responsibilities

- Page routing
- Server Components
- Client Components
- Server Actions
- API routes where required
- Metadata/SEO
- Image optimization
- Static rendering
- Dynamic rendering
- Caching and revalidation

### Rendering Strategy

Use the appropriate rendering strategy for each page.

### Static / Cached Pages

Suitable for:

- Home
- About
- Courses listing
- Course details
- Facilities
- Gallery
- FAQ

### Dynamic Pages

Suitable for:

- Admin dashboard
- Enquiries
- Certificate verification
- User-specific pages

---

# 4. TypeScript

TypeScript will be used throughout the application.

### Benefits

- Type safety
- Better developer experience
- Safer database operations
- Better component APIs
- Easier refactoring
- Reduced runtime errors

Avoid using:

```ts
any;
```

unless there is a specific reason.

Prefer:

```ts
interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
}
```

or appropriate inferred types.

---

# 5. Styling

## Tailwind CSS

Tailwind CSS will be the primary styling system.

### Design Principles

- Mobile-first
- Consistent spacing
- Responsive layouts
- Design tokens
- Utility-first styling
- Minimal custom CSS

Example:

```tsx
<section className="py-16 sm:py-20 lg:py-24">...</section>
```

---

# 6. Component Library

## shadcn/ui

shadcn/ui will be used for reusable UI components.

Potential components:

- Button
- Input
- Textarea
- Label
- Select
- Dialog
- Dropdown Menu
- Sheet
- Tabs
- Card
- Table
- Badge
- Alert Dialog
- Skeleton
- Breadcrumb
- Pagination

Components should be customized according to the institute's visual identity instead of using the default styling everywhere.

---

# 7. Icons

## Lucide React

Lucide React will be used for interface icons.

Examples:

```tsx
import {
  BookOpen,
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Menu,
  Search,
  ArrowRight,
} from "lucide-react";
```

Avoid mixing multiple icon libraries unless necessary.

---

# 8. Typography

The project will use a three-font system.

## Heading Font

### Plus Jakarta Sans

Used for:

- H1
- H2
- H3
- H4
- Section headings
- Important titles

```ts
Plus_Jakarta_Sans;
```

---

## Body Font

### Inter

Used for:

- Paragraphs
- Navigation
- Buttons
- Forms
- Course descriptions
- General UI

```ts
Inter;
```

---

## Technical Font

### JetBrains Mono

Used only for:

- Code examples
- Programming content
- Technical labels
- Developer-related sections

```ts
JetBrains_Mono;
```

---

# 9. Font Configuration

Fonts will be loaded using Next.js `next/font`.

```tsx
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});
```

---

# 10. Database

## PostgreSQL

PostgreSQL will be the primary database.

It will store:

- Courses
- Course categories
- Course modules
- Enquiries
- Gallery items
- Testimonials
- Achievements
- Certificates
- Site settings
- Admin/user-related data where required

PostgreSQL is preferred because the application contains structured relational data.

---

# 11. ORM

## Drizzle ORM

Drizzle ORM will be used for database access.

### Why Drizzle?

- Type-safe
- Lightweight
- SQL-like API
- Excellent TypeScript support
- Easy migrations
- Good PostgreSQL support

Example:

```ts
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
```

---

# 12. Database Migrations

Drizzle Kit will manage migrations.

### Generate migration

```bash
npx drizzle-kit generate
```

### Apply migration

```bash
npx drizzle-kit migrate
```

### Development workflow

```text
Schema
  ↓
Drizzle Kit Generate
  ↓
Migration
  ↓
PostgreSQL
```

---

# 13. Database Hosting

Recommended options:

### Primary

- Neon PostgreSQL

### Alternatives

- Supabase PostgreSQL
- Railway PostgreSQL
- Render PostgreSQL

For this project, **Neon PostgreSQL** is recommended because it works well with serverless deployments.

---

# 14. Authentication

## Clerk

Clerk will handle authentication and user management.

Authentication will primarily be required for:

- Admin
- Staff users
- Protected dashboard routes

Public visitors will not need an account to:

- View courses
- View gallery
- Read institute information
- Submit an enquiry

---

# 15. Authorization

Authentication and authorization must be separated.

Example roles:

```text
ADMIN
STAFF
```

Admin users can:

- Manage courses
- Manage enquiries
- Manage gallery
- Manage testimonials
- Manage certificates
- Manage site settings

Staff users can receive limited permissions depending on requirements.

---

# 16. Route Protection

Protected routes:

```text
/admin/*
```

The middleware/authentication layer should ensure that only authorized users can access the admin dashboard.

Public routes remain accessible without authentication.

---

# 17. Forms

## React Hook Form

React Hook Form will be used for complex forms.

Examples:

- Enquiry form
- Contact form
- Course form
- Gallery form
- Testimonial form
- Certificate form
- Site settings form

Example:

```tsx
const form = useForm<CourseFormValues>({
  resolver: zodResolver(courseSchema),
});
```

---

# 18. Validation

## Zod

Zod will handle form and server-side validation.

Example:

```ts
const enquirySchema = z.object({
  studentName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional(),
  courseId: z.string().min(1),
  message: z.string().optional(),
});
```

Validation should happen on both:

- Client
- Server

Never rely only on client-side validation.

---

# 19. Server Actions

Next.js Server Actions will be preferred for application mutations.

Examples:

```text
createEnquiry()
updateEnquiry()
createCourse()
updateCourse()
deleteCourse()
createTestimonial()
deleteGalleryImage()
verifyCertificate()
```

Typical flow:

```text
Client Form
     ↓
React Hook Form
     ↓
Zod Validation
     ↓
Server Action
     ↓
Database
     ↓
Revalidation
     ↓
UI Update
```

---

# 20. Caching & Revalidation

Next.js caching and revalidation will be used for public content.

Examples:

```text
Courses
Gallery
Testimonials
Site Settings
```

After admin mutations:

```ts
revalidatePath("/courses");
revalidatePath("/admin/courses");
```

For more complex caching requirements, use appropriate cache tags.

Example:

```text
courses
gallery
testimonials
site-settings
```

---

# 21. File Uploads

## UploadThing

UploadThing will be used for image and document uploads.

Possible upload types:

```text
courseImages
galleryImages
profileImages
achievementImages
certificateDocuments
siteLogo
siteFavicon
```

Uploaded files should be validated for:

- File type
- File size
- Upload permissions

---

# 22. Image Optimization

Next.js Image will be used whenever possible.

```tsx
import Image from "next/image";
```

Images should:

- Have proper dimensions
- Use meaningful alt text
- Use responsive sizes
- Be lazy-loaded when appropriate
- Avoid unnecessarily large files

---

# 23. Notifications

## Sonner

Sonner will be used for user feedback.

Examples:

```text
Course created successfully
Course updated successfully
Enquiry submitted successfully
Gallery image uploaded
Something went wrong
```

---

# 24. SEO

Next.js Metadata API will handle SEO.

Each major public page should have:

- Title
- Description
- Keywords where appropriate
- Open Graph metadata
- Twitter metadata
- Canonical URL

Course pages should generate metadata dynamically from course information.

---

# 25. Local SEO

Because this is a physical computer institute, local SEO is important.

The website should include:

- Institute name
- City
- State
- Address
- Phone
- Opening hours
- Google Maps
- Social links

Structured data can later be added using schema.org.

Potential schema:

```text
EducationalOrganization
LocalBusiness
Course
BreadcrumbList
```

---

# 26. State Management

Global state management should be kept minimal.

Use:

### React State

For local UI state:

```text
Modal
Sidebar
Dropdown
Mobile menu
Filters
```

### Server State

Prefer Next.js server-side data fetching where possible.

Do not introduce Redux/RTK unless the project develops a genuine need for complex client-side global state.

---

# 27. URL State

Filters and search should preferably be represented in the URL.

Example:

```text
/courses?category=programming
```

or:

```text
/courses?search=python&category=programming
```

Benefits:

- Shareable URLs
- Browser navigation support
- SEO-friendly filtering
- Refresh persistence

---

# 28. API Architecture

The application should primarily use:

```text
Server Components
Server Actions
Database Queries
```

API routes should be introduced only where they provide a clear benefit.

Possible API endpoints:

```text
/api/certificates/verify
/api/upload
```

Avoid creating unnecessary API routes for operations that can be handled through Server Actions.

---

# 29. Error Handling

The application should include:

### Public

- `not-found.tsx`
- `error.tsx`
- Loading states
- Empty states

### Admin

- Form validation errors
- Database errors
- Permission errors
- Upload errors
- Confirmation dialogs

Users should receive meaningful messages instead of raw errors.

---

# 30. Loading UI

Use:

- Skeletons
- Loading indicators
- Suspense boundaries

Examples:

```text
CourseCardSkeleton
CourseTableSkeleton
GallerySkeleton
DashboardSkeleton
```

Avoid showing blank screens while data is loading.

---

# 31. Admin UI

Admin dashboard should use:

- Responsive sidebar
- Top navigation
- Breadcrumbs
- Data tables
- Search
- Filters
- Pagination
- Dialogs
- Confirmation dialogs
- Form pages
- Toast notifications
- Empty states

Suggested navigation:

```text
Dashboard

Courses
  ├── All Courses
  ├── Categories
  └── Add Course

Enquiries

Gallery

Testimonials

Achievements

Certificates

Settings
```

---

# 32. Security

Security requirements include:

- Protected admin routes
- Role-based authorization
- Server-side validation
- Secure database queries
- Upload validation
- Environment variables for secrets
- No sensitive credentials in client code
- No direct database access from Client Components

Environment variables:

```env
DATABASE_URL=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
UPLOADTHING_TOKEN=
```

Secrets must never be committed to Git.

---

# 33. Code Architecture

The project should follow clear separation of responsibilities.

```text
UI Components
      ↓
Forms
      ↓
Server Actions
      ↓
Validation
      ↓
Database Queries
      ↓
PostgreSQL
```

Avoid putting database queries directly inside reusable UI components.

---

# 34. Client vs Server Components

Prefer **Server Components by default**.

Use `"use client"` only when required.

Client Components are appropriate for:

- Interactive forms
- Mobile menu
- Dialogs
- Tabs
- Dropdowns
- Image upload
- Client-side filtering
- Interactive UI

Server Components are preferred for:

- Course pages
- About page
- Gallery listing
- Public content
- Database fetching
- SEO content

---

# 35. Environment Configuration

Example `.env.local`:

```env
DATABASE_URL="postgresql://..."

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="..."
CLERK_SECRET_KEY="..."

UPLOADTHING_TOKEN="..."
```

Never expose server-only secrets through `NEXT_PUBLIC_*`.

---

# 36. Package Management

Recommended package manager:

```text
npm
```

Typical installation:

```bash
npm install
```

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Production:

```bash
npm start
```

---

# 37. Development Tools

Recommended tools:

- VS Code
- Git
- GitHub
- ESLint
- Prettier
- Drizzle Kit
- Chrome/Edge DevTools

---

# 38. Version Control

Git will be used for version control.

Recommended workflow:

```text
main
  ↓
development
  ↓
feature/*
```

Example:

```bash
git checkout -b feature/course-management
```

Commit messages should be meaningful.

Examples:

```text
feat: add course management
fix: resolve enquiry validation
refactor: improve course form
style: update homepage typography
```

---

# 39. Deployment

## Recommended Platform

### Vercel

Vercel will be used for deploying the Next.js application.

Deployment flow:

```text
GitHub
   ↓
Vercel
   ↓
Next.js Build
   ↓
Production
```

---

# 40. Production Database

Recommended:

```text
Neon PostgreSQL
```

Production flow:

```text
Next.js / Vercel
       ↓
Server Actions
       ↓
Drizzle ORM
       ↓
Neon PostgreSQL
```

---

# 41. Deployment Commands

Before deployment:

```bash
npm install
npx drizzle-kit generate
npx drizzle-kit migrate
npm run build
```

For production:

```bash
npm start
```

Database migrations should be executed against the correct production database.

---

# 42. Testing Strategy

Testing can be introduced progressively.

### Unit Testing

For:

- Validation schemas
- Utility functions
- Business logic

### Integration Testing

For:

- Server Actions
- Database operations
- Enquiry workflow

### Manual Testing

Required for:

- Responsive UI
- Forms
- Admin dashboard
- Authentication
- File uploads
- Certificate verification

---

# 43. Performance Strategy

The application should prioritize:

- Server Components
- Static/cached public pages
- Optimized images
- Next.js Image
- `next/font`
- Minimal client JavaScript
- Lazy loading
- Pagination for admin tables
- Database indexes
- Efficient queries

Avoid:

- Unnecessary `useEffect`
- Large client-side libraries
- Fetching all database records at once
- Unoptimized images
- Excessive animations

---

# 44. Accessibility

The UI should follow accessible development practices.

Requirements:

- Semantic HTML
- Keyboard navigation
- Focus states
- Accessible labels
- Form error messages
- Sufficient color contrast
- Alt text
- Screen-reader-friendly controls

---

# 45. Recommended Architecture

```text
                    ┌──────────────────────┐
                    │      Next.js App     │
                    └──────────┬───────────┘
                               │
              ┌────────────────┴────────────────┐
              │                                 │
      ┌───────▼────────┐              ┌─────────▼────────┐
      │ Public Website │              │  Admin Dashboard │
      └───────┬────────┘              └─────────┬────────┘
              │                                 │
              └────────────────┬────────────────┘
                               │
                       Server Actions
                               │
                    ┌──────────▼──────────┐
                    │      Zod           │
                    │    Validation      │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │    Drizzle ORM      │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │ PostgreSQL / Neon   │
                    └─────────────────────┘

External Services:

Clerk       → Authentication
UploadThing → File Uploads
Vercel      → Deployment
```

---

# 46. Final Technology Stack

```text
Frontend
├── Next.js
├── React
├── TypeScript
├── Tailwind CSS
├── shadcn/ui
├── Lucide React
└── next/font

Forms
├── React Hook Form
└── Zod

Backend
├── Next.js Server Actions
├── PostgreSQL
└── Drizzle ORM

Authentication
└── Clerk

File Storage
└── UploadThing

Notifications
└── Sonner

Deployment
└── Vercel

Database Hosting
└── Neon PostgreSQL

Typography
├── Plus Jakarta Sans
├── Inter
└── JetBrains Mono

Development
├── Git
├── GitHub
├── VS Code
├── ESLint
└── Prettier
```

---

# 47. Architecture Principle

The project should follow this principle:

> **Keep the public website fast and mostly server-rendered, keep the admin dashboard interactive, keep business logic on the server, and keep the database layer strongly typed.**

The goal is to build a website that is not only visually professional but also **maintainable, secure, SEO-friendly, scalable, and production-ready**.
