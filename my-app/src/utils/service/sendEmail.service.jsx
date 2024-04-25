import emailjs from '@emailjs/browser'

const SendMail = (dataForm) => {
    emailjs.sendForm('service_hq9xlwc', 'template_z66fy7t', dataForm, '1PjyWOYiftS_Sdn8R');

}

export default SendMail