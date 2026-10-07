import "dotenv/config";
import { db } from "@/db";
import {
    categoryTable,
    courseTable,
    lessonTable,
} from "@/db/schema";

async function seed() {
    console.log("🌱 Seeding database...");

    // ---------------------------------------------------------
    // Categories
    // ---------------------------------------------------------

    const categories = await db
        .insert(categoryTable)
        .values([
            {
                slug: "computer-courses",
                title: "Computer Courses",
                sortDescription:
                    "Professional computer courses for beginners and students.",
            },
            {
                slug: "accounting-courses",
                title: "Accounting Courses",
                sortDescription:
                    "Learn accounting, Tally and business management skills.",
            },
        ])
        .returning();

    const computerCategory = categories.find(
        (category) => category.slug === "computer-courses"
    );

    const accountingCategory = categories.find(
        (category) => category.slug === "accounting-courses"
    );

    if (!computerCategory || !accountingCategory) {
        throw new Error("Categories could not be created.");
    }

    // ---------------------------------------------------------
    // Main Courses
    // ---------------------------------------------------------

    const courses = await db
        .insert(courseTable)
        .values([
            {
                title: "CCC",
                imageUrl: "/assets/images/courses/ccc.jpg",
                sortDescription:
                    "Certificate Course in Computer Concepts for beginners.",
                description:
                    "CCC is a basic computer course designed to develop fundamental computer, internet and digital literacy skills.",
                duration: 3,
                isFeatured: true,
                status: "published",
                categoryId: computerCategory.id,
            },
            {
                title: "ADCA",
                imageUrl: "/assets/images/courses/adca.jpg",
                sortDescription:
                    "Advanced Diploma in Computer Applications.",
                description:
                    "ADCA is a comprehensive computer application course covering office applications, programming, database, web development and practical computer skills.",
                duration: 12,
                isFeatured: true,
                status: "published",
                categoryId: computerCategory.id,
            },
            {
                title: "DCA",
                imageUrl: "/assets/images/courses/dca.jpg",
                sortDescription:
                    "Diploma in Computer Applications for practical computer skills.",
                description:
                    "DCA provides practical knowledge of computer applications, office automation, internet, programming and databases.",
                duration: 6,
                isFeatured: true,
                status: "published",
                categoryId: computerCategory.id,
            },
            {
                title: "O Level",
                imageUrl: "/assets/images/courses/o-level.jpg",
                sortDescription:
                    "NIELIT O Level professional computer course.",
                description:
                    "O Level is a professional computer course covering information technology, web designing, Python programming and IoT.",
                duration: 12,
                isFeatured: true,
                status: "published",
                categoryId: computerCategory.id,
            },
            {
                title: "Tally",
                imageUrl: "/assets/images/courses/tally.jpg",
                sortDescription:
                    "Professional accounting course with Tally Prime.",
                description:
                    "Learn computerized accounting, GST, inventory management and business transactions using Tally Prime.",
                duration: 3,
                isFeatured: true,
                status: "published",
                categoryId: accountingCategory.id,
            },
            {
                title: "DCM",
                imageUrl: "/assets/images/courses/dcm.jpg",
                sortDescription:
                    "Diploma in Computer Management.",
                description:
                    "DCM is designed to provide practical knowledge of computer applications, office automation and computer management.",
                duration: 12,
                isFeatured: false,
                status: "published",
                categoryId: computerCategory.id,
            },
        ])
        .returning();

    const getCourse = (title: string) => {
        const course = courses.find((course) => course.title === title);

        if (!course) {
            throw new Error(`${title} course not found.`);
        }

        return course;
    };

    // ---------------------------------------------------------
    // O Level Child Courses
    // ---------------------------------------------------------

    const oLevel = getCourse("O Level");

    const oLevelSubjects = await db
        .insert(courseTable)
        .values([
            {
                parentId: oLevel.id,
                title: "IT Tools & Network Basics",
                imageUrl: "/assets/images/courses/it-tools.jpg",
                sortDescription:
                    "Learn computer fundamentals, office tools and networking basics.",
                description:
                    "This module covers computer fundamentals, operating systems, word processing, spreadsheets, presentations, internet and networking basics.",
                duration: 3,
                isFeatured: false,
                status: "published",
                categoryId: computerCategory.id,
            },
            {
                parentId: oLevel.id,
                title: "Web Designing & Publishing",
                imageUrl: "/assets/images/courses/web-design.jpg",
                sortDescription:
                    "Learn HTML, CSS, JavaScript and web designing.",
                description:
                    "Learn the fundamentals of web development using HTML, CSS, JavaScript and modern web technologies.",
                duration: 3,
                isFeatured: false,
                status: "published",
                categoryId: computerCategory.id,
            },
            {
                parentId: oLevel.id,
                title: "Python Programming",
                imageUrl: "/assets/images/courses/python.jpg",
                sortDescription:
                    "Learn Python programming from fundamentals to practical applications.",
                description:
                    "Learn Python programming, data types, conditions, loops, functions, OOP and practical problem solving.",
                duration: 3,
                isFeatured: false,
                status: "published",
                categoryId: computerCategory.id,
            },
            {
                parentId: oLevel.id,
                title: "Internet of Things",
                imageUrl: "/assets/images/courses/iot.jpg",
                sortDescription:
                    "Learn IoT concepts, sensors, devices and automation.",
                description:
                    "Learn IoT architecture, sensors, microcontrollers, communication protocols and practical IoT applications.",
                duration: 3,
                isFeatured: false,
                status: "published",
                categoryId: computerCategory.id,
            },
        ])
        .returning();

    // ---------------------------------------------------------
    // Lessons
    // ---------------------------------------------------------

    const lessons = [
        // CCC
        {
            courseId: getCourse("CCC").id,
            title: "Introduction to Computer",
            slug: "introduction-to-computer",
            description: "Learn the fundamentals of computers.",
            content:
                "Introduction to computers, types of computers, hardware and software.",
            order: 1,
        },
        {
            courseId: getCourse("CCC").id,
            title: "Operating System Basics",
            slug: "operating-system-basics",
            description: "Understand operating systems and their functions.",
            content:
                "Learn Windows, files, folders, desktop and basic system operations.",
            order: 2,
        },
        {
            courseId: getCourse("CCC").id,
            title: "Internet Fundamentals",
            slug: "internet-fundamentals",
            description: "Learn internet and web basics.",
            content:
                "Internet, browsers, search engines, websites and online services.",
            order: 3,
        },

        // ADCA
        {
            courseId: getCourse("ADCA").id,
            title: "Computer Fundamentals",
            slug: "computer-fundamentals",
            description: "Learn fundamental computer concepts.",
            content:
                "Computer generations, hardware, software, memory and input/output devices.",
            order: 1,
        },
        {
            courseId: getCourse("ADCA").id,
            title: "MS Office",
            slug: "ms-office",
            description: "Learn Word, Excel and PowerPoint.",
            content:
                "Practical Microsoft Office training including documents, spreadsheets and presentations.",
            order: 2,
        },
        {
            courseId: getCourse("ADCA").id,
            title: "Database Fundamentals",
            slug: "database-fundamentals",
            description: "Introduction to databases.",
            content:
                "Database concepts, tables, records, relationships and basic SQL.",
            order: 3,
        },

        // DCA
        {
            courseId: getCourse("DCA").id,
            title: "Computer Basics",
            slug: "computer-basics",
            description: "Introduction to computer applications.",
            content:
                "Learn computer fundamentals and basic operations.",
            order: 1,
        },
        {
            courseId: getCourse("DCA").id,
            title: "Office Automation",
            slug: "office-automation",
            description: "Learn office productivity tools.",
            content:
                "Word processing, spreadsheets and presentations.",
            order: 2,
        },
        {
            courseId: getCourse("DCA").id,
            title: "Internet & Email",
            slug: "internet-and-email",
            description: "Learn internet and email communication.",
            content:
                "Internet browsing, email, online forms and digital communication.",
            order: 3,
        },

        // O Level Parent
        {
            courseId: oLevel.id,
            title: "O Level Course Introduction",
            slug: "o-level-course-introduction",
            description: "Introduction to NIELIT O Level.",
            content:
                "Overview of O Level subjects, examination pattern and practical training.",
            order: 1,
        },

        // O Level - IT Tools
        {
            courseId: oLevelSubjects[0].id,
            title: "Introduction to IT Tools",
            slug: "introduction-to-it-tools",
            description: "Introduction to IT tools and computer applications.",
            content:
                "Learn computer fundamentals, operating systems and productivity applications.",
            order: 1,
        },
        {
            courseId: oLevelSubjects[0].id,
            title: "Word Processing",
            slug: "word-processing",
            description: "Learn document creation and formatting.",
            content:
                "Create, edit and format professional documents.",
            order: 2,
        },
        {
            courseId: oLevelSubjects[0].id,
            title: "Spreadsheet",
            slug: "spreadsheet",
            description: "Learn spreadsheet operations.",
            content:
                "Rows, columns, formulas, functions, charts and data management.",
            order: 3,
        },

        // O Level - Web Design
        {
            courseId: oLevelSubjects[1].id,
            title: "HTML Fundamentals",
            slug: "html-fundamentals",
            description: "Learn HTML from basics.",
            content:
                "HTML structure, elements, attributes, links, images, forms and tables.",
            order: 1,
        },
        {
            courseId: oLevelSubjects[1].id,
            title: "CSS Fundamentals",
            slug: "css-fundamentals",
            description: "Learn CSS for web page styling.",
            content:
                "Selectors, colors, typography, box model, flexbox and responsive design.",
            order: 2,
        },
        {
            courseId: oLevelSubjects[1].id,
            title: "JavaScript Basics",
            slug: "javascript-basics",
            description: "Introduction to JavaScript programming.",
            content:
                "Variables, data types, conditions, loops, functions and DOM basics.",
            order: 3,
        },

        // O Level - Python
        {
            courseId: oLevelSubjects[2].id,
            title: "Python Introduction",
            slug: "python-introduction",
            description: "Introduction to Python programming.",
            content:
                "Python syntax, variables, data types and basic programming concepts.",
            order: 1,
        },
        {
            courseId: oLevelSubjects[2].id,
            title: "Python Control Flow",
            slug: "python-control-flow",
            description: "Learn conditions and loops.",
            content:
                "if statements, for loops, while loops and practical problem solving.",
            order: 2,
        },
        {
            courseId: oLevelSubjects[2].id,
            title: "Python Functions",
            slug: "python-functions",
            description: "Learn reusable Python functions.",
            content:
                "Functions, parameters, return values, scope and modules.",
            order: 3,
        },

        // O Level - IoT
        {
            courseId: oLevelSubjects[3].id,
            title: "Introduction to IoT",
            slug: "introduction-to-iot",
            description: "Learn Internet of Things fundamentals.",
            content:
                "IoT architecture, devices, sensors and real-world applications.",
            order: 1,
        },
        {
            courseId: oLevelSubjects[3].id,
            title: "Sensors & Actuators",
            slug: "sensors-and-actuators",
            description: "Learn sensors and actuators used in IoT.",
            content:
                "Different types of sensors, actuators and their applications.",
            order: 2,
        },
        {
            courseId: oLevelSubjects[3].id,
            title: "IoT Projects",
            slug: "iot-projects",
            description: "Build practical IoT projects.",
            content:
                "Learn how to design and build basic IoT automation projects.",
            order: 3,
        },

        // Tally
        {
            courseId: getCourse("Tally").id,
            title: "Introduction to Tally Prime",
            slug: "introduction-to-tally-prime",
            description: "Learn Tally Prime fundamentals.",
            content:
                "Company creation, ledgers, groups and basic accounting concepts.",
            order: 1,
        },
        {
            courseId: getCourse("Tally").id,
            title: "Accounting & GST",
            slug: "accounting-and-gst",
            description: "Learn accounting and GST in Tally.",
            content:
                "Ledger management, vouchers, GST setup and GST transactions.",
            order: 2,
        },
        {
            courseId: getCourse("Tally").id,
            title: "Inventory Management",
            slug: "inventory-management",
            description: "Learn inventory management in Tally.",
            content:
                "Stock groups, stock items, units and inventory transactions.",
            order: 3,
        },

        // DCM
        {
            courseId: getCourse("DCM").id,
            title: "Computer Fundamentals",
            slug: "dcm-computer-fundamentals",
            description: "Learn basic computer concepts.",
            content:
                "Computer hardware, software, operating systems and applications.",
            order: 1,
        },
        {
            courseId: getCourse("DCM").id,
            title: "Office Applications",
            slug: "dcm-office-applications",
            description: "Learn office productivity applications.",
            content:
                "Word processing, spreadsheets and presentation software.",
            order: 2,
        },
        {
            courseId: getCourse("DCM").id,
            title: "Internet & Digital Services",
            slug: "dcm-internet-digital-services",
            description: "Learn internet and digital services.",
            content:
                "Internet, email, online services, digital payments and cyber safety.",
            order: 3,
        },
    ];

    await db.insert(lessonTable).values(
        lessons.map((lesson) => ({
            ...lesson,
            status: "published" as const,
        }))
    );

    console.log("✅ Database seeded successfully.");
    console.log(`📚 Main courses: ${courses.length}`);
    console.log(`📖 O Level subjects: ${oLevelSubjects.length}`);
    console.log(`📝 Lessons: ${lessons.length}`);
}

seed()
    .catch((error) => {
        console.error("❌ Seed failed:", error);
        process.exit(1);
    });