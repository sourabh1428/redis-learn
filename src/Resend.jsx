import { Resend } from 'resend';

const resend = new Resend('re_EznC3t7L_6F2G8rbWJZkxYJhLrfodXT1i');

(async function () {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['spparhak1428@gmail.com'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>',
    });
  
    if (error) {
      return console.error({ error });
    }
  
    console.log({ data });
  })();