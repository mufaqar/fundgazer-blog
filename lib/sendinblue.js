const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const key_part_1 = 'xkeysib';
const key_part_b =
  '02124add0a4721dfb57f3d97e9de9646c04c253db93c72a9af4b87bab419ca20';
const key_part_c = 'kU14rL6wEOm0qtWN';

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = `${key_part_1}-${key_part_b}-${key_part_c}`;

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
