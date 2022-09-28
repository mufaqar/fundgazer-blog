const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const key_part_1 = 'xkeysib';
const key_part_b =
  'd863c6524ab66e59bd5a0392cfb3e6e1b8f0ca71cb4f4ca3db2872913e73c091';
const key_part_c = 'tOdXrcwD1sypNqxG';

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
