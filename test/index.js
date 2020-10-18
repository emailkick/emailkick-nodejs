import { assert } from 'chai';

const Emailkick = require('../src/index');

describe('Send Test', () => {
  it('should test default awesome function', () => {
    const emailkickClient = new Emailkick({
      APIKEY: 'TEST',
      ACCESSID: 'TESTACCESSID'
    });
    assert(emailkickClient.sendMail({
      to: 'atulsuresh123@gmail.com',
      from: 'atulsuresh123@gmail.com',
      templateId: 'test',
      variables: {}
    }));
  });
});
