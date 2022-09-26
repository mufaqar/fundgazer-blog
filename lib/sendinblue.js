const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const key_part_1 = 'xkeysib'
const key_part_2a = '74989ed1e8a13f5ff4da33290bd9fca0bc0'
const key_part_2b = '2d2a0810428b74e283d9dc3a97c9a'
const key_part_c = '3njUGQZtEd56kqrX'
// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = `${key_part_1}-${key_part_2a}${key_part_2b}-${key_part_c}`;

var apiInstance = new SibApiV3Sdk.SMTPApi();

const sendinblue = (sendSmtpEmail) => {
  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      return true;
    },
    function (error) {
      console.error(error);
      return false;
    }
  );
};

module.exports = sendinblue;
