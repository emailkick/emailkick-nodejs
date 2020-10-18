const fetch = require('node-fetch');

const APIURL = 'https://api.emailkick.com/mail/send';

class Emailkick {
  constructor(args) {
    this.APIKEY = args.apikey;
    this.ACCESSID = args.accessId;
  }

  sendMail(params) {
    const mailBody = {
      APIKEY: this.APIKEY,
      ACCESSID: this.APIKEY,
      to: params.to,
      from: params.from,
      templateId: params.templateId,
      variables: params.variables
    };
    fetch(APIURL, {
      method: 'POST',
      body: JSON.stringify(mailBody)
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response;
    });
    return mailBody;
  }
}
export default Emailkick;
