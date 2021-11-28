const errorMessage = Object.freeze({
    NO_AGENT_ID_PARAM: { message: 'Agent id must be specified' },
    NO_AGENT_BODY_IN_REQ: { message: 'No body in the request' },
    AGENT_IDS_MISMATCH: { message: 'Agent id parameter does not match body agent id' }
})

module.exports = errorMessage