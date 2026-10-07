
import { getCoursesForContactForm } from '@/lib/queries/course'
import ContactForm from './contact-form'

async function ContactFormWrapper() {
    const courses = await getCoursesForContactForm()
    return (
        <ContactForm courses={courses} />
    )
}

export default ContactFormWrapper