const tryThrowErrorOrDoSuccess = (error, data, response) => {
  try {
    response.send({
      status: true,
      data: data
    });
  } catch (error) {
    response.send({
      status: false,
      error: error.message
    });
  }
}
export default tryThrowErrorOrDoSuccess
