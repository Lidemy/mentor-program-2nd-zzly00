function shareResp(status, data=[]) {
  return {
      status: status,
      data: data
  }
}

module.exports = {
  shareResp: shareResp
}