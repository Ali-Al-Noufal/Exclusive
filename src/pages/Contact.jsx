import { FiPhone } from "react-icons/fi"
import ContactForm from "../components/ContactForm"
import { GoMail } from "react-icons/go"


const Contact = () => {
    const icons=[<FiPhone />,<GoMail />]
    const title=["Call To Us","Write To US"]
    const description=["We are available 24/7, 7 days a week.","Fill out our form and we will contact you within 24 hours."]
    const emails=["customer@exclusive.com","support@exclusive.com"]
    const inputs=[
        {
            type:"text",
            placeholder:"Your Name"
        },
        {
            type:"email",
            placeholder:"Your Email"
        },
        {
            type:"number",
            placeholder:"Your Phone"
        }
    ]
  return (
    <>
      <ContactForm icon={icons} title={title} description={description} emails={emails}
      phone="+8801611112222" inputs={inputs} textarea="Your Message" submit="Send Message" />
    </>
  )
}

export default Contact
