const { default: axios } = require("axios");

const token = 'Bearer aSuperSecretKey';

const getFile = async (file) => {

  const uri = `https://echo-serv.tbxnet.com/v1/secret/file/${file}`;

  const response = await axios.get(uri, {
    headers: {
      Authorization: token,
    },
  })

  return response;
}

const getFiles = async () => {
  const uri = 'https://echo-serv.tbxnet.com/v1/secret/files';

  const response = await axios.get(uri, {
    headers: {
      Authorization: token,
    },
  });

  return response;
}


module.exports = {
  getFile,
  getFiles,
};
