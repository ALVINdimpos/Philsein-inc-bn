const isEmail = (v) => {
    return /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/.test(v)
}

module.exports = isEmail